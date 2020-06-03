<template>
    <div class="row">
      <div class="col-md-6 mb-3">
        <h2 class="my-2">Portfolio analysis</h2>
        <div class="well">
          <ul class="list-highlight" v-for="asset in oneFund.assetMix" :key="asset.id">
            <li>{{ formatAssetKey(asset.key) }}: {{asset.value}}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-12">
        <hr class="my-2">
      </div>
    </div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "PortfolioAnalysis",
    components: {
    },
    props: ["rbcFundCode"],
    computed: {
    ...mapGetters(["oneFund"])
    },
    methods: {
      ...mapActions(["getFund"]),

      formatAssetKey(key) {
        let newKey = key;
        console.log(newKey);
        if (newKey === 'Cdn Equity') {
          newKey = 'Canadian Equity';
        }
        else if (newKey === 'Int. Equity') {
          newKey = 'International Equity';
        }
        return newKey;
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