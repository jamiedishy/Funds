<template>
        <div class="row">
            <div class="col-md-6 mb-3">
            <h2 class="my-2">Details</h2>
            <rbc-card>
                <div slot="header">
                    <h3>Details</h3>
                </div>
                <div>
                <ul class="list-divider-condensed">
                    <li class="list-divider-item">Series: {{oneFund.series}}</li>
                    <li class="list-divider-item">NAV $: {{recentDailyNav(oneFund.dailyNav)}}</li>
                    <li class="list-divider-item">Inception date: {{formatDate(oneFund.inceptionDate)}}</li>
                    <li class="list-divider-item">MER %: asset/annual cost = MER, {{JSON.stringify(oneFund.adjustedMER) === 'null' ? 'N/A' : oneFund.adjustedMER}}</li>
                    <li class="list-divider-item">Capital gains distribution: Annually</li>
                    <li class="list-divider-item">Fund category (CIFSC): to update</li>
                    <li class="list-divider-item">Minimum investment $: to update</li>
                    <li class="list-divider-item">Subsequent investment $: to update</li>
                    <li class="list-divider-item">Sales status: {{JSON.stringify(oneFund.isActive) === 'true' ? 'Open': 'Closed'}}</li>
                </ul>
                </div>
            </rbc-card>
            </div>
            <div class="col-md-12">
                <hr class="my-2">
            </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Card } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
    name: "PortfolioAnalysis",
    components: {
        'rbc-card': Card
    },
    props: ["rbcFundCode"],
    computed: {
    ...mapGetters(["oneFund"])
    },
    methods: {
      ...mapActions(["getFund"]),

      formatDate(date) {
        const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let updatedDate = date.split('-');
        updatedDate.unshift(updatedDate.pop());
        return monthNames[parseInt(updatedDate[2], 10)] + " " + updatedDate[1];
      },

      recentDailyNav(dnav) {
        var lastKey = (lastKey=Object.keys(dnav))[lastKey.length-1];
        var lastVal = (lastVal=Object.values(dnav))[lastVal.length-1];
        return lastVal + " as of " + lastKey;
      }
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
</style>>