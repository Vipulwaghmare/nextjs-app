"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type TSocketContext = {
  sendMessage: (msg: string) => any;
};
const ChatContext = createContext<TSocketContext | null>(null);

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const sendMessage = (msg: string) => {
    console.log(msg);
    socket?.emit("event:message", { message: msg });
  };

  useEffect(() => {
    const _socket = io("http://localhost:1000");
    const onMessageReceived = (xx: any) => {
      console.log(xx);
    };
    _socket.on("event:message", onMessageReceived);
    setSocket(_socket);
    return () => {
      _socket.off("message", onMessageReceived);
      _socket.disconnect();
      setSocket(null);
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => {
  const chatContext = useContext(ChatContext);
  if (!chatContext) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return chatContext;
};
