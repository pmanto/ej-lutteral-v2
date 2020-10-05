import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { LoginState } from './types';

export const getters: GetterTree<LoginState, RootState> = {
    errorMessage(state): string {
        return state.errorMessage;
    },
    isError(state): boolean {
        return state.isError;
    },
    isAuthenticated(state): boolean{
        return state.isAuthenticated;
    }
};