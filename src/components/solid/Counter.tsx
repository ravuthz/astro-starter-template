import { onCleanup, onMount } from "solid-js";
import { $counter } from "@/stores/couter";
import { createStore } from "solid-js/store";

function Counter() {
  let unbindListener: any = null;

  const [store, setStore] = createStore({ count: $counter.get() });

  onMount(() => {
    unbindListener = $counter.subscribe((value, oldValue) => {
      setStore("count", value);
    });
  });

  onCleanup(() => {
    if (typeof unbindListener == "function") {
      unbindListener();
    }
  });

  const onClick = () => {
    $counter.set($counter.get() + 1);
  };

  return (
    <div>
      <h1>SolidCounter {store.count}</h1>
      <button class="btn btn-primary" type="button" onClick={onClick}>
        {" + "}
      </button>
    </div>
  );
}

export default Counter;
