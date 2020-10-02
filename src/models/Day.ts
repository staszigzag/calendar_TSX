import Task from './Task'

export default class Day {
    constructor(public dayDate: number) {
    }

    readonly tasksList: Task[] = []
}