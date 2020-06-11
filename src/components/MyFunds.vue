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
                                            type="danger"
                                            id="modalToggleButton"
                                            @click="deleteFundModal(index)" 
                                            size="small"
                                            color="secondary"
                                            
                                        >
                                            <custom-icon name="alert-triangle" base-class="custom-icon"></custom-icon>
                                            <span class="ml-1">Delete</span>
                                        </rbc-button>
									</td>	
								</tr>
							</tbody>
						</table>

                         <rbc-modal
                            id="basicModal"
                            :active="modalIsOpen"
                            title="Deleted!"
                            :show-button="false"
                            @toggle="modalIsOpen = false"
                        >
                            <p>
                                You have successfully deleted to the fund. 
                            </p>
                        </rbc-modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
import { mapState, mapActions } from "vuex";
import { Button, Modal } from 'rbc-wm-framework-vuejs/dist/wm/components';
//import { Icon } from '/dist/wm/style-fa.css';

export default {
    name: "MyFunds",
    components: {
        'rbc-button': Button,
        'custom-icon': customIcon,
        'rbc-modal': Modal
    },
    data() {
        return {
            baseClass: 'v-icon',
            modalIsOpen: false
        }
    },
    computed: {
        ...mapState({
            myFunds: state => state.funds.myFunds
        })
    },
    methods: {
        ...mapActions(['deleteMyFund']),
        deleteFundModal(indexToDelete) {
            this.deleteMyFund(indexToDelete) + (this.modalIsOpen = !this.modalIsOpen);
        }
      
     },
    created() {
        
    }
}
</script>

<style scoped>
.custom-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
}
</style>