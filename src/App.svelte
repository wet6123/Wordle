<script>
	import { fade, fly } from 'svelte/transition';
	import Tiles from './components/Tiles.svelte';

	let key = "";
	let largeKey;
	let keyCode;
	let tileList = [];
	let cnt = 0;

	let newTile = "";

	function handleKeydown(event) {
		key = event.key;
		largeKey = key;
		keyCode = event.keyCode;

		if(keyCode == 13){//input "Enter" => add new line
			if(newTile.length == 5){
				tileList[tileList.length] = newTile;
				newTile = "";
				cnt = 0;
				console.log(tileList)
			}
			else{
				alert("Not enough  letters");
			}
		}
		else if(keyCode == 8 && cnt > 0){//keyCode 8 = 'Backspace'
			cnt--;
			newTile = newTile.slice(0, -1)
			console.log(newTile)
		}
		else if((keyCode < 91 && keyCode > 64) && cnt < 5){
			cnt++;
			newTile = newTile + largeKey;
			console.log(newTile)
		}
	}

	// function checker(event){

	// }
</script>

<!-- <svelte:window on:keydown={handleKeydown}/> -->

<main>
	<div >
		<Tiles {tileList} {newTile} {handleKeydown}/>
	</div>
	<div>{cnt}</div>
</main>

<style>
	
</style>