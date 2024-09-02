import React from "react";
import Details from "@/components/RComponents/Details";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex">
        <h1 className="font-bold text-2xl ">
          Things I need to learn for the first month
        </h1>
      </div>
      <Details />
    </main>
  );
}
