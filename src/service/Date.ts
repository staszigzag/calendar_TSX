import {lastDayOfMonth, startOfMonth, format} from 'date-fns'
import ru from 'date-fns/locale/ru'

const TEMPLATE_MONTH_AND_YEAR = 'LLLL yyyy'

export function getLastDayOfCurrentMonth(): number {
    return lastDayOfMonth(new Date()).getDate()
}

export function getStartDayWeekOfMonth(): number {
    return startOfMonth(new Date()).getDay() || 7
}

export function getCurrentMonthAndYear(): string {
    const str = format(new Date(), TEMPLATE_MONTH_AND_YEAR, {locale: ru})
    return str[0].toUpperCase() + str.slice(1)
}