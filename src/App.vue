<template>
  <div id="app">
<rbc-layout
        :top-nav="true"
        logo="https://rbcwm-styleguide.azurewebsites.net/src/assets/rbc-wm-logo-en.svg" 
			>
      <div class="container" 
				slot="content">
				<div class="row">
					<div class="col-md-12">
            <router-view /> 
					</div>
				</div>
			</div>
		</rbc-layout>
  </div>
</template>

<script>
import 'rbc-wm-framework-vuejs/dist/wm/vendors/';
import 'rbc-wm-framework-vuejs/dist/wm/';
import { Layout } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
  name: 'App',
  components: {
    'rbc-layout': Layout
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700|Roboto:300,400,400i,500,700');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-grid.min.css');
@import '../style.css';

</style>
