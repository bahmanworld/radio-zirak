"use client";

import React from "react";
import { PuffLoader } from "react-spinners";

export default function Home() {
  
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <PuffLoader color="white" size={20} />
    </main>
  );
}
