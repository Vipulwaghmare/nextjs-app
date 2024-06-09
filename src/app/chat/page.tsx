"use client";
import { useChatContext } from "@/context/ChatProvider";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { sendMessage } = useChatContext();
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          sendMessage(input);
        }}
      >
        Send
      </button>
    </div>
  );
}
