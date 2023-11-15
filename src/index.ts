import { inquirerMenu, pauseMenu } from "./helpers/inquirer";
// import { showMenu, pausePrompt } from "./helpers/messages";


const main = async () => {
  // showMenu();
  // pausePrompt();

  let option: number;
  do {
    option = await inquirerMenu();
    console.log({ option })
    await pauseMenu();
  } while (option !== 0);

}

main();
