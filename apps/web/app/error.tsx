"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="text-xl">Something went wrong!</h2>
      <p className="text-red-500">{error.message}</p>
      <button className="shadow py-1 px-2" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
