
import { readFile, saveFile } from "./helpers/saveFile";
import { inquirerMenu, pauseMenu, readInput } from "./helpers/inquirer";
import { Tasks } from "./models/Tasks";
import { STATUS, TASK_STATUS } from "./interfaces/Task";

// import { showMenu, pausePrompt } from "./helpers/messages";


const main = async () => {
  // showMenu();
  // pausePrompt();

  let option: number;
  const tareas = new Tasks();
  const tasksDB = readFile();



  if (tasksDB) {
    tareas.loadTasksFromArray(tasksDB);
  }


  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const description = await readInput();
        tareas.createTask(description);
        break;

      case 2:
        tareas.listAllTasks();
        break;

      case 3:
        tareas.listTasksByStatus(TASK_STATUS.COMPLETED);
        break;

      case 4:
        tareas.listTasksByStatus(TASK_STATUS.PENDING);
        break;

      case 0:
        break;
        default:
    }

    saveFile(tareas.listArray)

    await pauseMenu();
  } while (option !== 0);

}

main();
