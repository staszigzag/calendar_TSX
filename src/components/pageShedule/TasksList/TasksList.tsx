import {Component, Vue, Ref} from 'vue-property-decorator'
import {useStore} from 'vuex-simple'
import SheduleStore from '@/store/store'
import Task from '@/models/Task'

import styles from './TasksList.module.scss'

@Component
export default class SheduleTasksList extends Vue {
    private store: SheduleStore = useStore(this.$store)
    @Ref()
    readonly inputTask!: HTMLInputElement

    handlerSubmitTask(evt: Event) {
        evt.preventDefault()
        evt.stopPropagation()
        const text = this.inputTask.value.trim()
        if (!text) return
        this.store.days.ADD_NEW_TASK(text)
        this.inputTask.value = ''
    }

    handlerChangeIsDoneTask(evt: Event, task: Task) {
        evt.preventDefault()
        evt.stopPropagation()
        const checkbox = evt.target as HTMLInputElement
        task.isDone = checkbox.checked
    }

    render() {
        return (
            <section class={styles.taskList}>
                <h2 class={styles.title}>События</h2>
                <form onSubmit={this.handlerSubmitTask}>
                    <ul class={styles.wrapper}>
                        {this.store.days.selectedDay.tasksList.map((t, idx) =>
                            <li class={styles.itemTask} key={idx}>
                                <label class={styles.label}>
                                    <input class={styles.checkbox}
                                           onChange={(e: Event) => this.handlerChangeIsDoneTask(e, t)}
                                           type="checkbox"
                                           name="taskCheckbox"
                                           checked={t.isDone}
                                        //   disabled={t.isDone}
                                    />
                                    <span class={styles.textTask}>{t.text}</span>
                                </label>
                            </li>
                        )}
                    </ul>
                    <input class={styles.inputTask}
                           type="text"
                           autocomplete="off"
                           ref="inputTask"
                           name="taskText"
                           placeholder="Текст"
                    />
                </form>
            </section>
        )
    }
}
