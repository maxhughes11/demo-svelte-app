<script lang="ts">
import type {PageData} from "./$types"
export let data: PageData
</script>

<h1 class="font-bold mb-3 text-2xl">View Shortlisted Recalls</h1>
<div>
    <table class="border">
        <th>Category</th>
        <th>Amount of Recalls</th>
        <th>Recall ID</th>
        <th>Product Name</th>
        <th>Manufacturer</th>
        <th>Recall Date</th>
        <th>Description</th>

        {#each data.feed as recall} 
            <tr>
                <td>{recall.category}</td>
                <td>{recall.unitsInCirculation}</td>
                <td>{recall.recallNumber}</td>
                <td>{recall.productName}</td>
                <td>{recall.manufacturer}</td>
                <td>{recall.dateOfAction}</td>
                <td>{recall.hazardDescription}</td>
            </tr>
        {/each}
    </table>
</div>

<style >
 th {
    padding: 5px;
}

table, th, td {
    border: 1px solid grey;
    padding: 5px;
}
</style>