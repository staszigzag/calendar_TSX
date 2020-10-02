import {Component, Vue} from 'vue-property-decorator'
import {useStore} from 'vuex-simple'
import SheduleStore from '@/store/store'
import {getCurrentMonthAndYear} from '@/service/Date'

import styles from './Calendar.module.scss'

@Component
export default class SheduleCalendar extends Vue {
    private store: SheduleStore = useStore(this.$store)
    private weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    private currentNameMonthAndYear = getCurrentMonthAndYear()

    render() {
        return (
            <section class={styles.calendar}>
                <h2 class={styles.title}>{this.currentNameMonthAndYear}</h2>
                <ul class={styles.wrapDaysWeek}>
                    {this.weekDays.map((d, idx) =>
                        <li class={styles.dayWeek} key={idx}>
                            {d}
                        </li>
                    )}
                </ul>
                <ul class={styles.wrapDays}>
                    {/*если первый день месяца ПН то скрываем распорку*/}
                    {this.store.days.startDayWeekOfMonth !== 1 &&
                    <li class={styles.spacer}
                        style={`grid-column-end: ${this.store.days.startDayWeekOfMonth};`}
                        key="spacer"
                    />}
                    {this.store.days.allDaysOfMonth.map((d, idx) =>
                        <li class={`${styles.day} ${d.dayDate === this.store.days.selectedDay.dayDate ? styles.selected : ''}`}
                            onClick={() => this.store.days.SET_SELECTED_DAY(d)}
                            key={idx}
                        >
                            <span class={d.tasksList.length ? styles.isTasks : ''}>{d.dayDate}</span>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}
