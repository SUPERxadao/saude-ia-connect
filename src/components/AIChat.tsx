import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou seu assistente de saúde com IA. Como posso ajudá-lo hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulated AI response - will be replaced with Lovable AI
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "Esta é uma resposta simulada. Em breve, conectaremos com a IA real para fornecer respostas personalizadas sobre saúde.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="bg-gradient-primary rounded-full p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="bg-secondary rounded-full p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="bg-gradient-primary rounded-full p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua pergunta sobre saúde..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-gradient-primary"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AIChat;
