export type NewReply = {
  id: number;
  user: string;
  createDate: string;
  text: string;
  commentReply: string;
  votes: number;
  replies: NewReply[];
  isReply: boolean;
};