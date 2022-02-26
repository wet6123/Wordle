<script>
    import TileItem from "./TileItem.svelte";
    export let tileList;
    export let newTile;
    export let handleKeydown;
</script>

<svelte:window on:keydown={handleKeydown}/>

{#each tileList as tile}
    <div class = "tiles">
        <TileItem {tile}/>
    </div>
{/each}


<div class = "tiles">
    <div class="tile">{newTile.charAt(0).toUpperCase()}</div>
    <div class="tile">{newTile.charAt(1).toUpperCase()}</div>
    <div class="tile">{newTile.charAt(2).toUpperCase()}</div>
    <div class="tile">{newTile.charAt(3).toUpperCase()}</div>
    <div class="tile">{newTile.charAt(4).toUpperCase()}</div>
</div>


<style>
	.tiles {
		display: flex;
		justify-content: center;
	}
    
    .tile {
        width: 50px;
        height: 50px;
        font-size: 40px;
        text-align: center;
        border: solid;
    
        margin: 10px;
    }
</style>