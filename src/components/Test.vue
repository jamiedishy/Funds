<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <DataTable 
                    :columns="dataTableTesting.columns"
                    :rows="dataTableTesting.rows.slice(0, 5)"
                    global-search>
        </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import { DataTable } from 'rbc-wm-framework-vuejs/dist/wm/components';

export default {
    name: "Test",
    components: {
        DataTable
    }
    

}
</script>

<style scoped>

</style>