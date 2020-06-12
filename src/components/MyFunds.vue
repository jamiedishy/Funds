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
                            <rbc-icon 
                                icon="arrow-left"
                            />
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
                                            <rbc-icon
                                                icon="trash-alt" 
                                            />
                                            <span>Delete</span>
                                        </rbc-button>
									</td>	
								</tr>
							</tbody>
						</table>

                        <div v-if="!error">
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
                        <div v-else>
                            <rbc-modal
                                id="basicModal"
                                :active="modalIsOpen"
                                title="Error"
                                :show-button="false"
                                @toggle="modalIsOpen = false"
                            >
                                <p>
                                    Error deleting from MyFunds list. 
                                </p>
                            </rbc-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Button, Modal, Icon } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
    name: "MyFunds",
    components: {
        'rbc-button': Button,
        'rbc-modal': Modal,
        'rbc-icon': Icon
        
    },
    data() {
        return {
            baseClass: 'v-icon',
            modalIsOpen: false,
            error: false
        }
    },
    computed: {
        ...mapState({
            myFunds: state => state.funds.myFunds,
            fundName: state => state.funds.fundName
        })
    },
    methods: {
        ...mapActions(['deleteMyFund']),
        deleteFundModal(indexToDelete) {
            try {
                this.deleteMyFund(indexToDelete);
                if(this.myFunds.includes(this.fundName)) {
                    throw 'Error deleting'
                }
            } 
            catch(e) {
                console.log(e);
                this.error = true;
            } 
            finally {
                (this.modalIsOpen = !this.modalIsOpen);
            }
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