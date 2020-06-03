<template>
    <div class="row">
            <div class="col-md-6 mb-3">
                <h2 class="my-2">Top Holdings</h2>
            <rbc-tab flush>
                    <rbc-tab-content name="Top 10 underlying investments">
                <table class="table table-striped table-compact">
                    <thead>
                        <tr>
                            <th>
                                Holdings
                            </th>
                            <th>
                                Assets
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="obj.id" v-for="obj in oneFund.topHoldings">
                            <td class="text-nowrap">
                                {{ obj.key }} 
                            </td>
                            <td>
                                {{ obj.value }}
                            </td>	
                        </tr>
                    </tbody>
                </table>
                    </rbc-tab-content>
                </rbc-tab>
                </div>
                <div class="col-md-12">
                <hr class="my-2">
            </div>
  
    </div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Tab, TabContent } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
    name: "PortfolioAnalysis",
    components: {
        'rbc-tab': Tab,
        'rbc-tab-content': TabContent
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
</style>>