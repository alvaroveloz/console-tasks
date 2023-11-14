import colors from "colors/safe";

const menu = [
  { text: 'Create a new task',    value: 1 },
  { text: 'List all tasks',       value: 2 },
  { text: 'List completed tasks', value: 3 },
  { text: 'List pending tasks',   value: 4 },
  { text: 'Complete task',        value: 5 },
  { text: 'Delete task',          value: 6 },
  { text: 'Exit',                 value: 0 }
]

export const showMenu = () => {
  console.clear();
  const BLANK_DEFAULT = 60;
  const SPACE = ' ';

  console.log(colors.bgBlue(colors.green('      ===========================       ')));
  console.log(colors.bgBlue(colors.green('            Select an option            ')));
  console.log(colors.bgBlue(colors.green('      ===========================       ')));
  menu.forEach(element => {
    const menuToDisplay = colors.bgBlue(`${colors.green(element.value.toString())}. ${element.text} `);
    console.log(`${menuToDisplay}${colors.bgBlue(SPACE.repeat(BLANK_DEFAULT - menuToDisplay.length))} `);
  });

}
