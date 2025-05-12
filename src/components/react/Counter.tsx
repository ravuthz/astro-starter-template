import { $counter } from "@/stores/couter";
import { useEffect, useState } from "react";

function Counter() {
  const [store, setStore] = useState({ count: $counter.get() });

  useEffect(() => {
    const unbindListener = $counter.subscribe((count) => {
      setStore({ count });
    });

    return () => {
      if (typeof unbindListener == "function") {
        unbindListener();
      }
    };
  }, []);

  const onClick = () => {
    $counter.set($counter.get() + 1);
  };

  return (
    <div>
      <h1>ReactCounter {store.count}</h1>
      <button className="btn btn-primary" type="button" onClick={onClick}>
        {" + "}
      </button>
    </div>
  );
}

export default Counter;
