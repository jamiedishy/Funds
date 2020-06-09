import axios from 'axios';

const state = {
    funds: [],
    oneFund: null,
    fundName: null,
    topHoldings: null,
    assetMix: null,
    series: null,
    dailyNav: null,
    inceptionDate: null,
    adjustedMER: null,
    isActive: null,
    filtered: null
};

const getters = {
    allFunds: state => state.funds,
    oneFund: state => state.oneFund,
    filtered: state => state.filtered
};

// makes request, gets response, then calls mutation bc we use commit to make mutation... dont clal mutation directly
const actions = {
    async fetchFunds( { commit }) {
        const response = await axios.get('https://content.rbcgam.com/funds/list?short=true&active=true&orderby=fundName&ordered=asc');
        commit('SET_FUNDS', response.data);
        // console.log('fetching is first');
    },
    async getFund( { commit }, rbcFundCode) {
        const response = await axios.get('https://content.rbcgam.com/funds/detail?rbcFundCode=' + rbcFundCode);
        console.log('getting one fund first')
        commit('SHOW_FUND', response.data);
        this.dispatch('recentDailyNav');
        this.dispatch('formatDate')
    },
    async filterFunds({ commit }, searchWord) {
        commit('FILTER_FUNDS', searchWord);
        // console.log('filtering is second')
    },
    async formatDate({ commit, state }) {
        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let updatedDate = state.inceptionDate.split('-');
        updatedDate.unshift(updatedDate.pop());
        updatedDate = monthNames[parseInt(updatedDate[2], 10)] + " " + updatedDate[1];
        commit('FORMAT_DATE', updatedDate);
    },
    async recentDailyNav({ commit, state }) {
        let placeHolder = state.dailyNav;
        //console.log('the value of input dailynav is ' + this.oneFund.dailyNav)
        console.log('in the action this is the start of placeholder ' + placeHolder)
        let lastKey = (lastKey=Object.keys(placeHolder))[lastKey.length-1];
        let lastVal = (lastVal=Object.values(placeHolder))[lastVal.length-1];
        placeHolder = lastVal + " as of " + lastKey
        commit('RECENT_DAILY_NAV', placeHolder);
        console.log('in the action this is the result of placeholder ' + placeHolder)
    }
}; 

const mutations = {
    SET_FUNDS: (state, funds) => {
        state.funds = funds, 
        state.filtered = funds
    },
    SHOW_FUND: (state, oneFund) => {
        state.oneFund = oneFund;
        state.topHoldings = oneFund.topHoldings;
        state.assetMix = oneFund.assetMix;
        state.series = oneFund.series;
        state.dailyNav = oneFund.dailyNav;
        state.inceptionDate = oneFund.inceptionDate;
        state.adjustedMER = oneFund.adjustedMER;
        state.isActive = oneFund.isActive;
        state.fundName = oneFund.fundName;
    },
    FILTER_FUNDS(state, searchWord) {
        state.filtered = state.funds.filter(post => {
            return post.fundName.toLowerCase().includes(searchWord.toLowerCase())
        })
    },
    FORMAT_DATE: (state, date) => {
        state.inceptionDate = date
    },
    RECENT_DAILY_NAV: (state, dailyNav) => {
        state.dailyNav = dailyNav;
    }
};

export default {
    state,
    getters,
    actions, 
    mutations
};