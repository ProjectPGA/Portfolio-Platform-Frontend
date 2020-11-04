import { Actions } from 'vuex-smart-module';
import MainState from './MainState';
import MainMutations from './MainMutations';
import MainGetters from './MainGetters';
import Axios from 'axios';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    public reverttestData(): void {
        this.commit('changeTestData');
    }
}
