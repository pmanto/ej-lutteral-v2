import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState } from '../types';
import { LoginState } from './types';
export const state: LoginState = {
    isError: false,
    errorMessage: '',
    isAuthenticated: false
}

const namespaced: boolean = true;
export const login: Module<LoginState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};