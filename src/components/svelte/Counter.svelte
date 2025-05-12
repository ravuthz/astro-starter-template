<script>
	import { $counter as counter } from "@/stores/couter";
	let count = counter.get();

	counter.subscribe((value) => {
		count = value;
	});

	function onClick() {
		counter.set(counter.get()+1);
	}
</script>

<h1>SvelteCounter {count}</h1>

<button onclick={onClick} class="btn btn-primary">
	{' + '}
</button>