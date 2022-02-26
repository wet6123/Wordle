<script>
	import { fade, fly } from 'svelte/transition';
	import KeyItem from './components/KeyItem.svelte';
	import Keys from './components/Keys.svelte';


	let key = "";
	let largeKey;
	let keyCode;
	let keys = ["ABCDE"];
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

	function checker(event){

	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<div >
		<div class = "tiles">
			<Keys {keys}/>
		</div>
	</div>
</main>

<style>
	.tiles {
		display: flex;
		justify-content: center;
	}
</style>