import { IComment } from "modals/posts/Modals";

export const commentListMock: Array<IComment> = [
  {
    id: "1",
    postId: "3747f14a-083c-467c-af4c-48a29fc965fe",
    userId: "2943271F-9DB2-4D64-A833-42479441EF6E",
    userName: "Nea Juste",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam lacinia, nunc nisl ultricies nunc, quis aliquam nisl nunc quis nisl.",
    date: new Date(),
    edited: false
  },
  {
    id: "2",
    postId: "529cbe2c-a606-41b2-88c7-e936c237e982",
    userId: "953F411D-803A-45B0-A484-82DBFD394C07",
    userName: "Makenzie Hadiye",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam lacinia, nunc nisl ultricies nunc, quis aliquam nisl nunc quis nisl.",
    date: new Date(),
    edited: false
  },
  {
    id: "3",
    postId: "529cbe2c-a606-41b2-88c7-e936c237e982",
    userId: "953F411D-803A-45B0-A484-82DBFD394C07",
    userName: "Makenzie Hadiye",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam lacinia, nunc nisl ultricies nunc, quis aliquam nisl nunc quis nisl.",
    date: new Date(),
    edited: false
  },
  {
    id: "4",
    postId: "3747f14a-083c-467c-af4c-48a29fc965fe",
    userId: "2943271F-9DB2-4D64-A833-42479441EF6E",
    userName: "Nea Juste",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam lacinia, nunc nisl ultricies nunc, quis aliquam nisl nunc quis nisl.",
    date: new Date(),
    edited: false
  }
]

export const commentMock: IComment = {
  id: "1",
  postId: "3747f14a-083c-467c-af4c-48a29fc965fe",
  userId: "2943271F-9DB2-4D64-A833-42479441EF6E",
  userName: "Nea Juste",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam lacinia, nunc nisl ultricies nunc, quis aliquam nisl nunc quis nisl.",
  date: new Date(),
  edited: false
}