<script>
    export let tile;
    let capitalLetters = tile.toUpperCase();
</script>


{#each capitalLetters as letter}
<div class="tile">
    {letter}
</div>
{/each}

<style>
    .tile {
        width: 50px;
        height: 50px;
        font-size: 40px;
        text-align: center;
        border: solid;
    
        margin: 10px;
    }
</style>
