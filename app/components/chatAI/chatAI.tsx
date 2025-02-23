"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { X } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ChatAIProps {
  onClose: () => void;
}

const ChatAI = ({ onClose }: ChatAIProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/huggingface", { message: input });
      const aiMessage: Message = { text: response.data.reply, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Gagal mendapatkan respon dari AI.", sender: "ai" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white shadow-lg border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-blue-700 text-white">
        <span>Chat AI</span>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <div className="p-4 h-64 overflow-y-auto" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded-md ${msg.sender === "user" ? "bg-blue-200 text-right" : "bg-gray-200"}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="p-2 my-1 bg-gray-200">Loading...</div>}
      </div>
      <div className="flex p-4 border-t">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Ketik pesan..." />
        <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-700 text-white rounded">Kirim</button>
      </div>
    </div>
  );
};

export default ChatAI;
