<template>
    <div class="container">
        <div class="row mb-2">
                <div class="col-sm-8 mt-1">
                    <!-- <span class="h3 header-alt">Showing {{funds.length}} mutual funds</span> -->
                </div>
                <div class="col-sm-4">
                    <rbc-input 
                       class="text-right"
                       label="Search fund" 
                       placeholder="Search by fund code or fund name"
                    ></rbc-input>
                </div>
        </div>
    </div>
</template>

<script>
import {Input} from 'rbc-wm-framework-vuejs/dist/wm/components';
export default {
    name: "Search",
    components: {
        'rbc-input': Input
    },
    props: ["funds"]   
}
</script>

<style scoped>

</style>