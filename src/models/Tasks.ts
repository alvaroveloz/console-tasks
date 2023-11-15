import { Task } from './Task';

interface TasksList {
  [key: string]: Task
}

export class Tasks {
  _list: TasksList = {};
  constructor() {
    this._list = {};
  }


  createTask = (description: string) => {
    const task = new Task(description);
    this._list[task._id] = task;
  }

  readTasks = () => {
    return this._list;
  }

}
