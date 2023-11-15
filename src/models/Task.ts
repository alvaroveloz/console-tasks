import { v4 as uuidv4 } from 'uuid';

export class Task {
  _id: string
  _description: string
  _completed: boolean

  constructor(description: string) {
    this._id = uuidv4();
    this._description = description;
    this._completed = false;
   }
}
