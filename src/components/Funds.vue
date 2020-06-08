/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div class="container">
        <div class="row">
             <rbc-header />
            <div class="col-md-12 mb-5">
                <div class="row mb-3">
                    <div class="col-sm-8 mt-1">
                        <template v-if="filtered.length === funds.length">
                            <p class="h3 header-alt">Showing {{funds.length}} mutual funds</p>
                        </template>
                        <template v-else>
                            <p class="h3 header-alt">Showing {{filtered.length}} of {{funds.length}} mutual funds</p>
                        </template>
                    </div>
                    <div class="col-sm-4">
                     <rbc-input 
                        type="text" 
                        v-model="search" 
                        placeholder="Search by fund code or fund name"
                        class="text-right"
                        label="Search fund" 
                        @input="filterFunds"
                    /> 
                    </div>
                </div>

                <rbc-tab flush>
                    <rbc-tab-content name="Overview">
                        <table class="table table-striped table-compact">
							<thead>
								<tr>
									<th>
										Code
									</th>
									<th>
										Fund name
									</th>
									<th>
										Series
									</th>
									<th>
										Asset type
									</th>
									<th>
										Risk
									</th>
                                    <th>
										Mgmt fee
									</th>
                                    <th>
										MER
									</th>
                                    <th>
										Inception date
									</th>
								</tr>
							</thead>
							<tbody>
								<tr :key="fund.id" v-for="fund in filtered">
                                        <td class="text-nowrap">
                                            <router-link :to="{ name: 'fund-show', params: { rbcFundCode: fund.rbcFundCode } }">
                                                {{"RBF" + fund.rbcFundCode}}
                                            </router-link>
                                        </td>
                                    <td>
                                        {{fund.fundName}}
									</td>	
                                    <td class="text-nowrap">
                                        {{fund.series}}
									</td>
                                    <td>
                                        {{fund.assetClass}}
									</td>
                                    <td class="text-nowrap">
                                        Risk?
									</td>
                                    <td class="text-nowrap">
                                        {{(fund.managementFees * 100).toFixed(2) + "%"}}
									</td>
                                    <td>
                                        {{(fund.MER * 100).toFixed(2) + "%"}}
									</td>
                                    <td class="text-nowrap">
                                        {{fund.inceptionDate}}
									</td>
								</tr>
							</tbody>
						</table>
                    </rbc-tab-content>
                </rbc-tab>
            </div>
        </div>
    </div>
</template>

<script>
// maps vuex to our component
import { mapActions, mapState } from 'vuex';
import { Tab, TabContent } from 'rbc-wm-framework-vuejs/dist/wm/components';
import { Input } from 'rbc-wm-framework-vuejs/dist/wm/components';
import Header from './Header';

export default {
    name: 'Funds',
    components: {
        'rbc-tab': Tab,
        'rbc-tab-content': TabContent,
        'rbc-input': Input,
        'rbc-header': Header
    },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState({
            filtered: state => state.funds.filtered,
            funds: state => state.funds.funds
        })
    },
    methods: {
        ...mapActions(['fetchFunds', 'filterFunds'])
    },
    created() {
        this.fetchFunds();
        this.filterFunds(this.search);
    }
}
</script>

<style scoped>

</style>