import colors from 'colors/safe';

import { STATUS, TASK_STATUS, TasksList } from '../interfaces/Task';
import { Task } from './Task';

export class Tasks {
  _list: TasksList = {};

  get listArray() {
      const list: Task[] = [];
      Object.keys(this._list).forEach(key => {
        list.push(this._list[key]);
      })
      return list
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArray = (tasks: Task[] = []) => {
    //console.log(tasks)
    if (tasks.length > 0) {
      tasks.forEach(task => {
        this._list[task._id] = task;
      })
    }
    console.log(this._list)
  }

  createTask = (description: string) => {
    const task = new Task(description);
    this._list[task._id] = task;
  }

  readTasks = () => {
    return this._list;
  }

  deleteTask = ( id: string)=> {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  listAllTasks = () => {
    this.listArray.forEach((task, i) => {
      const idx = colors.green(`${i + 1}`);
      const STATUS = task._completed ? colors.green('Completed') : colors.red('Pending');
      console.log(`${idx}: ${task._description} \t|| Status: ${STATUS}`)
    })
  }

  listTasksByStatus = (status: STATUS) => {
    this.listArray.forEach((task, i) => {
      if(task._completed === (status === TASK_STATUS.COMPLETED)) {
        const idx = colors.green(`${i + 1}`);
        const STATUS = task._completed ? colors.green(TASK_STATUS.COMPLETED) : colors.red(TASK_STATUS.PENDING);
        console.log(`${idx}: ${task._description} \t|| Status: ${STATUS}`)
      }
    })
  }

  toggleTasks = ( ids: string[] = []) => {
    this.listArray.forEach(task => {
      if (ids.includes(task._id)) {
        task._completed = true;
      }
      else {
        task._completed = false;
      }
    })
  }

}
