import { Chat } from "./chat";

export default async function Page() {
  return (
    <main className="space-y-8 p-8">
      <h1 className="text-2xl">OpenAI Integration</h1>
      <Chat />
    </main>
  );
}
