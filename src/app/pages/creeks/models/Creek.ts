import { Comment } from '../../comments/models/Comment';

export interface Creek {
  name: string;
  img: [string];
  province: string;
  type: string;
  description: string;
  comments?: [Comment];
  lat: number;
  lng: number;
  timesFav?: number;
  _id?: string;
}
