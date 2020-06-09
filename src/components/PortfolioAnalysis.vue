<template>
    <div class="row">
      <div class="col-md-6 mb-3">
        <h2 class="my-2">Pportfolio analysis</h2>
        <div class="well">
          <ul class="list-highlight" v-for="asset in assetMix" :key="asset.id">
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
import { mapState } from "vuex";

export default {
    name: "PortfolioAnalysis",
    components: {
    },
    computed: {
    ...mapState({
      assetMix: state => state.funds.assetMix
    })
    },
    methods: {
      formatAssetKey(key) {
        let newKey = key;
        if (newKey === 'Cdn Equity') {
          newKey = 'Canadian Equity';
        }
        else if (newKey === 'Int. Equity') {
          newKey = 'International Equity';
        }
        return newKey;
      }
    }
}
</script>

<style scoped>
</style>>