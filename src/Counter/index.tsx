import { useState } from "preact/hooks";

export function Counter({ name }: any) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="border p-4 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-2">{name}</h1>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
