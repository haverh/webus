export interface ReactionsType {
  likes: number;
  replies: number;
};

export interface PostType {
  username: string;
  handle: string;
  content: string;
  reactions: ReactionsType;
};

export interface UserType {
  name: string;
  handle: string;
  bio: string;
};