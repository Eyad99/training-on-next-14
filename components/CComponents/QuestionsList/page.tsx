"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { qsList } from "./questions";

const QuestionsList = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:w-[50%]">
      {qsList?.map((list) => {
        return (
          <AccordionItem value={`item-${list.id}`} key={`item-${list.id}`}>
            <AccordionTrigger>{list?.title}</AccordionTrigger>
            <AccordionContent>
              {typeof list.description === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: list.description }} />
              ) : (
                React.createElement(list.description)
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default QuestionsList;
