import colors from "colors/safe";
import readline from 'readline';
import { fillSpace } from "./functions";
import { menu } from "../constants/menu";



export const showMenu = () => {
  console.clear();

  console.log(colors.bgBlue(colors.green('      ===========================       ')));
  console.log(colors.bgBlue(colors.green('            Select an option            ')));
  console.log(colors.bgBlue(colors.green('      ===========================       ')));
  menu.forEach(element => {
    const menuToDisplay = colors.bgBlue(`${colors.green(element.value.toString())}. ${element.text} `);
    //console.log(`${menuToDisplay}${colors.bgBlue(SPACE.repeat(BLANK_DEFAULT - menuToDisplay.length))} `);
    console.log(`${menuToDisplay}${fillSpace(menuToDisplay)}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = colors.bgBlue('Choose an option: ')
  const fullQuestion = question + fillSpace(question)

  rl.question(fullQuestion, (answer) => {
    console.log(answer);
    rl.close();
    return answer
  })

}


export const pausePrompt = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = colors.bgBlue(`Press ${colors.green('ENTER')} to continue`)
  const fullQuestion = question + fillSpace(question)

  rl.question( fullQuestion , (answer) => {
    console.log(answer);
    rl.close();
    return answer
  })

}
