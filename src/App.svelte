<script>
	import { fade, fly } from 'svelte/transition';
	import Tiles from './components/Tiles.svelte';

	let key = "";
	let largeKey;
	let keyCode;
	let tileList = ["     "];
	let cnt = 0;

	function handleKeydown(event) {
		key = event.key;
		largeKey = key;
		keyCode = event.keyCode;

		if(keyCode == 13){//input "Enter" => add new line
			if(tileList[tileList.length -1].length == 5){
				tileList[tileList.length] = "";
				cnt = 0;
			}
			else{
				alert("Not enough  letters");
			}
		}
		else if(keyCode == 8 && cnt > 0){//keyCode 8 = 'Backspace'
			cnt--;
			tileList[tileList.length -1] = tileList[tileList.length -1].slice(0, -1)
			// console.log(tileList[tileList.length -1])
		}
		else if((keyCode < 91 && keyCode > 64) && cnt < 5){
			cnt++;
			tileList[tileList.length -1] = tileList[tileList.length -1] + largeKey
			// console.log(tileList[tileList.length -1])
		}
	}

	// function checker(event){

	// }
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<div >
		<Tiles {tileList} />
	</div>
</main>

<style>
	
</style>