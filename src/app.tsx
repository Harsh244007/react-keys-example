import { useState } from "preact/hooks";
import { Counter } from "./Counter";
export default function App() {
  const [isHarsh, setIsHarsh] = useState(true);
  const [isHarsh2, setIsHarsh2] = useState(true);

  return (
    <div className="flex justify-between gap-6 items-center mt-8">
      <div className="flex gap-2 flex-col items-center my-8">
        <h2>Counter Without Key</h2>
        {isHarsh ? <Counter name="Harsh" /> : <Counter name="Patel" />}
        <button
          className="mt-4 px-4 py-2 border border-gray-500 text-gray-100 rounded hover:text-gray-700"
          onClick={() => setIsHarsh((prevIsHarsh) => !prevIsHarsh)}
        >
          Toggle
        </button>

        <p>See counter </p>
      </div>

      <div className="flex gap-2 flex-col items-center my-8">
        <h2>Counter With Key</h2>
        {isHarsh2 ? (
          <Counter key="harsh" name="Harsh" />
        ) : (
          <Counter key="patel" name="Patel" />
        )}
        <button
          className="mt-4 px-4 py-2 border border-gray-500 text-gray-100 rounded hover:text-gray-700"
          onClick={() => setIsHarsh2((prevIsHarsh) => !prevIsHarsh)}
        >
          Toggle
        </button>
        <p>See counter</p>
      </div>
    </div>
  );
}
