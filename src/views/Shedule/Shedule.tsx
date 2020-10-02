import {Component, Vue} from 'vue-property-decorator'
import SheduleCalendar from '../../components/pageShedule/Calendar/Calendar'
import SheduleTasksList from '@/components/pageShedule/TasksList/TasksList'

import styles from './Shedule.module.scss'

@Component({
    name: 'Shedule'
})
export default class Shedule extends Vue {
    render() {
        return (
            <main class={styles.shedule}>
                <SheduleCalendar/>
                <SheduleTasksList/>
            </main>
        )
    }
}
