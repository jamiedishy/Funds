/* eslint-disable no-unused-vars */
<template>
  <div id="app">
<rbc-layout
        :top-nav="topNav"
        logo="https://rbcwm-styleguide.azurewebsites.net/src/assets/rbc-wm-logo-en.svg" 
			>
      <div class="container" 
				slot="content">
				<div class="row">
					<div class="col-md-12">
            <rbc-header />
            <!-- <rbc-search :funds="funds" /> -->
            <rbc-funds />
					</div>
				</div>
			</div>
		</rbc-layout>

  </div>
</template>

<script>
import 'rbc-wm-framework-vuejs/dist/wm/vendors/';
import 'rbc-wm-framework-vuejs/dist/wm/';
import Header from './components/Header';
import Funds from './components/Funds';
// import Search from './components/Search';
import { Layout } from 'rbc-wm-framework-vuejs/dist/wm/components';
// import axios from 'axios';

window.axios = require('axios');

export default {
  name: 'App',
  components: {
    'rbc-funds': Funds,
    'rbc-header': Header,
    'rbc-layout': Layout
   // 'rbc-search': Search
  },
  // created() {
  //   axios.get('https://content.rbcgam.com/funds/list?short=true&active=true&orderby=fundName&ordered=asc')
  //     .then(response => this.funds = response.data)

  //     //.catch(error => this.funds = [{rbcFundCode: 'NO POSTS FOUND'}])
  //     //.finally(() => console.log("Data loading complete:)"));

  // //     .then(response => console.log(response.data));
  // },
  // data() {
  //   return {
  //     funds: null
  // };
//},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700|Roboto:300,400,400i,500,700');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-grid.min.css');
@import '../style.css';

</style>
