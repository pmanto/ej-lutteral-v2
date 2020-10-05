import { MutationTree } from 'vuex';
import { LoginState } from './types';

export const mutations: MutationTree<LoginState> = {
    authenticated(state) {
        state.isError =  false;
        state.errorMessage = '';
        state.isAuthenticated = true;
    },
    authenticatedError(state, payload: string) {
        state.isError = true;
        state.errorMessage = payload;
        state.isAuthenticated = false;
    }
};