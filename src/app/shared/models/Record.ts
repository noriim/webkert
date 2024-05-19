import {User} from "./User";

export interface Record {
  id: string;
  user: User;
  type: string;
  date: string;
  record: string;
}
