<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-5">
                <header>
                    <!-- <h1>{{getFundById(rbcFundCode)}}</h1> -->
                    <h1>{{ fundName }}</h1>
                    <h3>Fund code: RBF{{ rbcFundCode }}</h3>
                    <router-link :to="{ name: 'funds' }">
					<rbc-button 
                        class="mb-2"
                        color="primary"
                        outline>
                        Back
                    </rbc-button>
                    </router-link>
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
import { Button } from 'rbc-wm-framework-vuejs/dist/wm/components';
import PortfolioAnalysis from './PortfolioAnalysis';
import TopHoldings from './TopHoldings';
import Details from './Details';

export default {
    name: "FundShow",
    components: {
        'rbc-button': Button,
        'port-analysis': PortfolioAnalysis,
        'top-holdings': TopHoldings,
        'details-card': Details
    },
    props: ["rbcFundCode"],
    computed: {
        ...mapState({
            fundName: state => state.funds.fundName,
            fundCode: state => state.funds.fundCode
        })
    },
    methods: {
      ...mapActions(["getFund"])
     },
    created() {
      this.fund = this.getFund(this.rbcFundCode);
    },
    data() {
      return {
        fund: {}
      }
    }
}
</script>

<style scoped>
</style>