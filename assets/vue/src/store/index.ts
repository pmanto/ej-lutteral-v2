import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { login } from './login/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        login
    }
};

export default new Vuex.Store<RootState>(store);