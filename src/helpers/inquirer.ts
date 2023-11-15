import { menu } from '../constants/menu';
import select from '@inquirer/select';
import input from '@inquirer/input';

export const inquirerMenu = async () => {

  console.clear();
  const options = await select({
    message: 'Select an option',
    choices: menu
  })

  return options
}


export const pauseMenu = async () => {
  return await input({
    message: 'Press ENTER to continue',
  })
}
