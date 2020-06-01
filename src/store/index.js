// entrypoint to vuex... where we combine our modules and add them to our vuex store
import Vuex from 'vuex';
import Vue from 'vue';
import funds from './modules/funds';

// Load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        funds
    }
}) 

