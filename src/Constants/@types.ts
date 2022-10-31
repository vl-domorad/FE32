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
  Light = 'light',
  Dark = 'dark'
}