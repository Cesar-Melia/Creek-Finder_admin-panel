import { User } from '../../users/models/User';
import { Creek } from '../../creeks/models/Creek';

export interface Comment {
  creek: Creek;
  user: User;
  text: string;
  date: number;
}
