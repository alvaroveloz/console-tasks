
import { readFile, saveFile } from "./helpers/saveFile";
import { confirmSelection, inquirerMenu, listTasksToDelete, listTasksToEdit, pauseMenu, readInput } from "./helpers/inquirer";
import { Tasks } from "./models/Tasks";
import { TASK_STATUS } from "./interfaces/Task";

const main = async () => {

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

      case 5:
        const idToEdit = await listTasksToEdit(tareas.listArray);
        tareas.toggleTasks(idToEdit);
        break;

      case 6:
        const id = await listTasksToDelete(tareas.listArray);
        if (id !== '0') {
          const answer = await confirmSelection();
          if (answer) tareas.deleteTask(id);
        }
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
