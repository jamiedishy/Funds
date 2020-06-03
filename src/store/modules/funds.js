import axios from 'axios';

const state = {
    funds: [],
    oneFund: []
};

const getters = {
    allFunds: state => state.funds,
    oneFund: state => state.oneFund
};

// makes request, gets response, then calls mutation bc we use commit to make mutation... dont clal mutation directly

const actions = {
    async fetchFunds( { commit }) {
        const response = await axios.get('https://content.rbcgam.com/funds/list?short=true&active=true&orderby=fundName&ordered=asc');
        commit('setFunds', response.data);
        //console.log(response.data);
    },
    async getFund( { commit }, rbcFundCode) {
        const response = await axios.get('https://content.rbcgam.com/funds/detail?rbcFundCode=' + rbcFundCode);
        commit('showFund', response.data);
    }

}; 

const mutations = {
    setFunds: (state, funds) => (state.funds = funds),
    showFund: (state, oneFund) => (state.oneFund = oneFund)
};

export default {
    state,
    getters,
    actions, 
    mutations
};