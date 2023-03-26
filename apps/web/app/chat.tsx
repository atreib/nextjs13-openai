"use client";

import React from "react";

export function Chat() {
  const [answer, setAnswer] = React.useState<string>();

  async function onFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const question = form.question.value;

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ prompt: question }),
    });
    const data = await response.json();

    setAnswer(data?.choices?.at(0)?.text ?? "Could not process an answer");
  }

  return (
    <article>
      <form onSubmit={onFormSubmit} className="flex flex-col">
        <label htmlFor="question">Ask your question</label>
        <input
          id="question"
          name="question"
          type="text"
          defaultValue="How to be a good software engineer?"
        />
        <input type="submit" value="Send" />
      </form>
      <section>
        {answer?.split("\n").map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>
    </article>
  );
}
