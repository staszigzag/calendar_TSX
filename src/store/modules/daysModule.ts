import {Mutation, State} from 'vuex-simple'
import {getLastDayOfCurrentMonth, getStartDayWeekOfMonth} from '@/service/Date'
import Day from '@/models/Day'
import Task from '@/models/Task'

export default class DaysModule {
    constructor() {
        this.lastDayOfCurrentMonth = getLastDayOfCurrentMonth()
        this.startDayWeekOfMonth = getStartDayWeekOfMonth()
        // инициализация текущего месяца
        for (let i = 1; i < this.lastDayOfCurrentMonth; i++) {
            const d = new Day(i)
            if (d.dayDate === new Date().getDate()) {
                this.SET_SELECTED_DAY(d)
            }
            this.allDaysOfMonth.push(d)
        }
    }

    @State()
    readonly allDaysOfMonth: Day[] = []
    @State()
    readonly lastDayOfCurrentMonth: number
    @State()
    readonly startDayWeekOfMonth: number
    @State()
    public selectedDay!: Day

    @Mutation()
    public SET_SELECTED_DAY(day: Day): void {
        this.selectedDay = day
    }

    @Mutation()
    public ADD_NEW_TASK(text: string): void {
        this.selectedDay.tasksList.push(new Task(text))
    }
}