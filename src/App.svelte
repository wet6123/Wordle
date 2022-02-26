<script>
	let key = "";
	let largeKey;
	let keyCode;
	let keys = [""];
	let cnt = 0;

	function handleKeydown(event) {
		key = event.key;
		largeKey = key;
		keyCode = event.keyCode;

		if(keyCode == 13){//input "Enter" => add new line
			if(keys[keys.length -1].length == 5){
				keys[keys.length] = "";
				cnt = 0;
			}
			else{
				alert("Not enough  letters");
			}
		}
		else if(keyCode == 8 && cnt > 0){//keyCode 8 = 'Backspace'
			cnt--;
			keys[keys.length -1] = keys[keys.length -1].slice(0, -1)
			// console.log(keys[keys.length -1])
		}
		else if((keyCode < 91 && keyCode > 64) && cnt < 5){
			cnt++;
			keys[keys.length -1] = keys[keys.length -1] + largeKey
			// console.log(keys[keys.length -1])
		}
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<div >
		{#each keys as key}
		<div class = "tiles">
			<div class="tile">{key.charAt(0).toUpperCase()}</div>
			<div class="tile">{key.charAt(1).toUpperCase()}</div>
			<div class="tile">{key.charAt(2).toUpperCase()}</div>
			<div class="tile">{key.charAt(3).toUpperCase()}</div>
			<div class="tile">{key.charAt(4).toUpperCase()}</div>
		</div>
		{:else}
		<div class="tile">Empty arr error</div>
		{/each}
		<div>{cnt}</div>
	</div>
</main>

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