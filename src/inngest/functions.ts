import { Agent, openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer.  You write readable, maintainable code. you write simple next.js and react snippets ",
      model: openai({ model: "gpt-5"}),
    });
    const { output } = await codeAgent.run(
    `Write the following snippet: ${event.data.value}`,
    );
    console.log(output);

    return { output };
  },
);