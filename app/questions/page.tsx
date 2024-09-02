import QuestionsList from "@/components/CComponents/QuestionsList/page";
import React from "react";

const Questions = () => {
  return (
    // <section className="bg-red-800 flex">
    //   <aside className="w-[20%] bg-slate-500">aside</aside>
    //   <section className="w-[80%] bg-zinc-900">section</section>
    // </section>
    <section className="flex justify-center">
      <QuestionsList />
    </section>
  );
};

export default Questions;
