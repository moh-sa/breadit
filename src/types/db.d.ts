import type { Post, subbreadit, User, Vote, Comment } from "@prisma/client";

export type ExtendedPost = Post & {
  subbreadit: subbreadit;
  votes: Vote[];
  author: User;
  comments: Comment[];
};
