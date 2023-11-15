import { inquirerMenu, pauseMenu, readInput } from "./helpers/inquirer";
import { Tasks } from "./models/Tasks";
// import { showMenu, pausePrompt } from "./helpers/messages";


const main = async () => {
  // showMenu();
  // pausePrompt();

  let option: number;
  const tareas = new Tasks();

  do {
    option = await inquirerMenu();
    console.log({ option })

    switch (option) {
      case 1:
        const description = await readInput();
        tareas.createTask(description);
        break;

      case 2:
        console.log(tareas.readTasks());
      default:
        break;
    }

    await pauseMenu();
  } while (option !== 0);

}

main();
