import { ActionTree } from 'vuex';
import axios from 'axios';
import { RootState } from '../types';
import { LoginState } from './types';

export const actions: ActionTree<LoginState, RootState> = {
    loginAction({ commit }, params): any {
        console.log(params)
        axios.post("/login", params)
            .then((response) => {
                if (response.data == 'authenticated') {
                    commit("authenticated");
                } else {
                    commit('authenticatedError', response.data);
                }
            }, (error) => {
                commit('authenticatedError', error.data);
            });
    }
};