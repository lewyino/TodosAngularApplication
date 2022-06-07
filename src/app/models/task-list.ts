import { Task } from "./task";
import { taskType } from "./task-type";

export class TaskList {
    title: string;
    type: taskType;
    tasks: Task[];

    constructor(opts?: Partial<TaskList>) {
        opts = opts || {};
        this.tasks = opts.tasks || [];
        this.title = opts.title || '';
        this.type = opts.type || 'todo';
    }
}
