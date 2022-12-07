import { call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../Constants/consts";
import API from "../utils/api";
import { logoutUser } from "../Reducers/authReducer";

type AnyResponse = ApiResponse<any>;

export default function* callCheckingAuth(api: any, ...rest: any) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || ""; // вот тут мы достаем токены из хранилища
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY) || "";

  const response: AnyResponse = yield call(api, accessToken, ...rest); // первоначальный запрос (а вдруг все хорошо?)

  if (response.status === 401) {
    // запрос не прошел и вернул 401 - неавторизован
    const { status: accessStatus } = yield call(API.verifyToken, accessToken); // проверяем жив ли accessToken

    if (accessStatus === 401) {
      //если accessToken умер, то нужно проверить жив ли refreshToken
      const { status: refreshStatus } = yield call(
        API.verifyToken,
        refreshToken
      ); // проверяем жив ли refreshToken

      if (refreshStatus === 200) {
        const { ok, data } = yield call(API.getNewAccessToken, refreshToken); // получаем новый accessToken
        if (ok && data) {
          //если все хорошо и токен пришел
          const { access: newAccessToken } = data
          localStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken); //сетаем новое значение токена
          const newResponse: AnyResponse = yield call(api, newAccessToken, ...rest); // делаем запрос с НОВЫМ значением токена
          return newResponse; //ОБЯЗАТЕЛЬНО возвращаем его пользователю
        } else {
          // если совсем все плохо - просто выносим пользователя из приложения - пускай перезаходит сам
          yield put(logoutUser());
        }
      } else {
        //если умер и refreshToken - выкидываем пользователя из приложения
        yield put(logoutUser());
      }
    } else {
      return response; // c токеном все хорошо, надо искать ошибку в другом месте
    }
  } else {
    return response; // тут просто просто все хорошо
  }
}
