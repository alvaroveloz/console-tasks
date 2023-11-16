import { Task } from "../models/Task"

export type STATUS ='PENDING'|'COMPLETED'

export const TASK_STATUS: Record<STATUS, STATUS> = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
}

export interface TasksList {
  [key: string]: Task
}
