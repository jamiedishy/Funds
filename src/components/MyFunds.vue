<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-5">
                <header>
                   <h1>My Funds</h1>
                   <router-link :to="{ name: 'funds' }">
                        <rbc-button 
                            class="mb-2"
                            color="primary"
                            outline>
                            Back
                        </rbc-button>
                    </router-link>
                </header>
                <div class="row"> 
                    <div class="col-md-12 mb-5">
                        <table class="table table-striped table-compact">
							<thead>
								<tr>
                                    <th>
                                        #
                                    </th>
									<th>
										Fund name
									</th>
									<th>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr :key="fund.index" v-for="(fund, index) in myFunds">
                                    <td> {{index+1}} </td>
                                    <td class="text-nowrap">
                                        {{fund}}
                                    </td>
                                    <td >
                                        <rbc-button 
                                            @click="deleteMyFund(index-1)"
                                            icon="download" 
                                            size="small"
                                            color="secondary"
                                            outline>
                                            Delete
                                        </rbc-button>
									</td>	
								</tr>
							</tbody>
						</table>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Button } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
    name: "MyFunds",
    components: {
        'rbc-button': Button
    },
    computed: {
        ...mapState({
            myFunds: state => state.funds.myFunds
        })
    },
    methods: {
        ...mapActions(['deleteMyFund'])
      
     },
    created() {
        
    }
}
</script>

<style scoped>
</style>