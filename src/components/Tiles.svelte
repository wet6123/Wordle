<script>
    import TileItem from "./TileItem.svelte";
    export let tileList;
</script>



{#each tileList as tile}
    <div class = "tiles">
        <TileItem {tile}/>
    </div>
{:else}
    <div class="tiles">Empty tiles error</div>
{/each}


<style>
	.tiles {
		display: flex;
		justify-content: center;
	}
</style>