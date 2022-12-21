export type CardType = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export type CardsListType = Array<CardType>;

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
}

export type SetLikeStatusPayload = {
  card: CardType;
  likeStatus: LikeStatus;
};

export enum Tabs {
  All = "all",
  Favourites = "myFavourites",
  Popular = "popular",
  MyPosts = "myPosts",
}

export type AddNewPostPayload = {
  formData: any;
  callback: () => void;
};
