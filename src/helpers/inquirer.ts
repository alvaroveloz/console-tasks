import select from '@inquirer/select';
import input from '@inquirer/input';
import confirm from '@inquirer/confirm';
import checkbox, { Separator } from '@inquirer/checkbox';
import { green } from 'colors/safe';

import { menu } from '../constants/menu';
import { Task } from '../models/Task';

export const inquirerMenu = async () => {

  console.clear();
  const options = await select({
    message: 'Select an option',
    choices: menu
  })

  return options
}

export const listTasksToDelete = async ( tasks: Task[]) => {
  console.clear();
  const choices = tasks.map( (task, idx) => {
    return {
      name: `${green((idx + 1).toString())}. ${task._description}`,
      value: task._id
    }
  })
  choices.unshift({
    name: `${green('0.')} Cancel`,
    value: '0'
  })
  const options = await select({
    message: 'Select an option',
    choices
  })

  return options
}

export const listTasksToEdit = async ( tasks: Task[]) => {
  console.clear();
  const choices = tasks.map((task, idx) => {
    return {
      name: `${green((idx + 1).toString())}. ${task._description}`,
      value: task._id,
      checked: task._completed ? true : false
    }
  })

  const options = await checkbox({
    message: 'Select an option',
    choices
  })
  return options

}

export const pauseMenu = async () => {
  return await input({
    message: 'Press ENTER to continue',
  })
}

export const confirmSelection = async () => {
  return await confirm({
    message: 'Are you sure?'
  })
}

export const readInput = async () => {
  return await input({
    message: 'Enter the new message',
    validate: (value) => {
      if (value.length === 0) {
        return 'Please enter a value';
      }
      return true
    }
  })
}
