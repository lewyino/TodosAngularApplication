import { taskType } from "./task-type";

export class Task {
    title: string;
    id: string;
    type: taskType;

    constructor(opts?: Partial<Task>) {
        opts = opts || {};
        this.title = opts.title || '';
        this.id = opts.id || '';
        this.type = opts.type || 'todo';
    }
}
