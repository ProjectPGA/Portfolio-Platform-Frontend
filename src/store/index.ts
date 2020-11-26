import Vue from 'vue';
import Vuex from 'vuex';
import { createStore, Module } from 'vuex-smart-module';
import createPersistedState from 'vuex-persistedstate';

import mainStore from './main-store/MainStore';
import NavigationStore from './navigation-store/NavigationStore';

Vue.use(Vuex);

const root = new Module({
    modules: {
        mainStore,
        NavigationStore,
    },
});

const persistedPaths = ['path'];
export const store = createStore(root, {
    plugins: [createPersistedState({ paths: persistedPaths })],
});
