import {Module} from 'vuex-simple'
import DaysModule from './modules/daysModule'

export default class SheduleStore {
    @Module()
    public days = new DaysModule()
}