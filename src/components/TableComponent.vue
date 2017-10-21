<template>
	<div class="table-wrap">
		<table :style="{'width': '100%'}">
			<thead>
				<tr>
					<th v-for="(item, index) in tableColumn" :key="index">{{item}}</th>
				</tr>
			</thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td v-for="(item, index) in item" key="index">{{item}}</td>
                </tr>
            </tbody>
		</table>
	</div>
</template>

<script>

export default {
    name: 'TableComponent',
    props: {
        tableColumn: {
            type: Array
        },
        tableData: {
            type: Array
        }
    }
};
</script>

<style scoped>
.table-wrap table{
    border-collapse:collapse;
}
.table-wrap table tr{
    height: 40px
}
.table-wrap th{
    background: #D8D6D6;
    text-align: center;
}
.table-wrap td {
    background: #ECECEC;
    text-align: center;
}
</style>