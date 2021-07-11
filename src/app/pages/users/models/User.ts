import { Creek } from '../../creeks/models/Creek';
import { Comment } from '../../comments/models/Comment';

export interface User {
  userName: string;
  password: string;
  email: string;
  role?: string;
  comments?: [Comment];
  favorites?: [Creek];
  img?: string;
  _id?: number;
}
