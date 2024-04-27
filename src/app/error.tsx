"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      {/* <button onClick={() => reset()}>refresh</button> */}
      Error
    </>
  );
}
