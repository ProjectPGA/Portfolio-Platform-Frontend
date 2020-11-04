import { Mutations } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
    public changeTestData(): void {
        this.state.testData = !this.state.testData;
    }
}
