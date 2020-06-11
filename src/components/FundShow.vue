<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-5">
                <header>
                    <!-- <h1>{{getFundById(rbcFundCode)}}</h1> -->
                    <h1>{{ fundName }}</h1>
                    <h3>Fund code: RBF{{ rbcFundCode }}</h3>
                    <div class="row">
                    <div class="col-md-4">
                    <router-link :to="{ name: 'funds' }">
					<rbc-button 
                        class="mb-2"
                        color="primary"
                        outline>
                        Back
                    </rbc-button>
                    </router-link>
                    </div>
                    <div class="col-md-4">

                        <rbc-button 
                            id="modalToggleButton"
                            @click="addFundModal()"
                            class="mb-2"
                            color="primary"
                            outline>
                            Add to My Fund
                        </rbc-button>
                        <rbc-modal
                            id="basicModal"
                            :active="modalIsOpen"
                            title="Added!"
                            :show-button="false"
                            @toggle="modalIsOpen = false"
                        >
                            <p>
                                You have successfully added RBF{{rbcFundCode}} to your MyFund list. 
                            </p>
                        </rbc-modal>
                        
                    </div>
                    <div class="col-md-4">
                        <router-link :to="{ name: 'my-funds' }">
                        <rbc-button 
                            class="mb-2"
                            color="primary"
                            outline>
                            Go to my funds
                        </rbc-button>
                        </router-link>
                    </div>
                    </div>
                    <hr class="my-2">
                </header>

                <details-card />

                <port-analysis />
                
                <top-holdings />

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Button, Modal } from 'rbc-wm-framework-vuejs/dist/wm/components';
import PortfolioAnalysis from './PortfolioAnalysis';
import TopHoldings from './TopHoldings';
import Details from './Details';

export default {
    name: "FundShow",
    components: {
        'rbc-button': Button,
        'port-analysis': PortfolioAnalysis,
        'top-holdings': TopHoldings,
        'details-card': Details,
        'rbc-modal': Modal
    },
    data() {
        return {
            modalIsOpen: false
        }
    },
    props: ["rbcFundCode"],
    computed: {
        ...mapState({
            fundName: state => state.funds.fundName
        })
    },
    methods: {
      ...mapActions(["getFund", "addMyFund"]),
      
      addFundModal() { 
          this.addMyFund() + (this.modalIsOpen = !this.modalIsOpen); 
        }
     },
    created() {
        this.getFund(this.rbcFundCode);
    }
}
</script>

<style scoped>
</style>