export type IPost = {
  id: string;
  title: string;
  body: string;
  image: string;
};

export type IComment = {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  body: string;
  date: Date;
  edited: boolean;
};