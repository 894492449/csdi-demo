<template>
    <div id="app">
        <TableComponent :tableColumn="tableColumn" :tableData="tableData" />
        <Pagination :currentPage="currentPage" :pageSize="pageSize" :total="total" :handlePageChange="handlePageChange" />
    </div>
</template>

<script>
import TableComponent from './components/TableComponent';
import Pagination from './components/Pagination';

export default {
    name: 'app',
    data () {
        return {
            tableColumn: [],
            tableData: [],
            pageSize: 10,
            total: 10,
            currentPage: 1
        };
    },
    components: {
        TableComponent,
        Pagination
    },
    methods: {
        // 页码改变时请求
        handlePageChange (index) {
            this.currentPage = index;
            this.$http.get('/api/tableData', {
                params: {
                    currentPage: index,
                    pageSize: 10
                }
            }).then(res => {
                this.tableColumn = res.body.tableColumn;
                this.tableData = res.body.tableData;
                this.total = res.body.total;
            });
        }
    },
    created () {
        this.$http.get('/api/tableData', {
            params: {
                currentPage: this.currentPage,
                pageSize: 10
            }
        }).then((res) => {
            this.tableColumn = res.body.tableColumn;
            this.tableData = res.body.tableData;
            this.total = res.body.total;
        });
    }
};
</script>

<style>
#app {
    width: 1000px;
    margin: 0 auto
}
</style>
