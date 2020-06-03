<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-5">
                <header>
                    <h1>{{ oneFund.fundName }}</h1>
                    <h3>Fund code: RBF{{ oneFund.rbcFundCode }}</h3>
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

                <details-card :rbcFundCode="rbcFundCode" />

                <port-analysis :rbcFundCode="rbcFundCode" />
                
                <top-holdings :rbcFundCode="rbcFundCode" />

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapGetters(["oneFund"])
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