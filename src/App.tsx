import {Component, Vue} from 'vue-property-decorator'
import Shedule from './views/Shedule/Shedule'

@Component
export default class App extends Vue {
    render() {
        return (
            <Shedule/>
        )
    }
}
