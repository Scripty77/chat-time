import { useState } from "react";
import { SideProfile } from "../components/side-profile";

interface Message {
  avatar: string | undefined;
  id: number;
  user: {
    name: string;
    avatar: string;
    color: string;
  };
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const messages: Message[] = [
    {
      id: 1,
      user: {
        name: "María",
        avatar: "/placeholder.svg",
        color: "text-pink-400",
      },
      content: "¡Hola a todos! ¿Cómo están?",
      timestamp: "12:30",
      isCurrentUser: false,
      avatar: undefined
    },
    {
      id: 2,
      user: {
        name: "Carlos",
        avatar: "/placeholder.svg",
        color: "text-blue-400",
      },
      content: "Todo bien por aquí, trabajando en un nuevo proyecto",
      timestamp: "12:32",
      isCurrentUser: false,
      avatar: undefined
    },
    {
      id: 3,
      user: {
        name: "Ana",
        avatar: "/placeholder.svg",
        color: "text-green-400",
      },
      content: "¿Alguien quiere jugar algo más tarde?",
      timestamp: "12:35",
      isCurrentUser: false,
      avatar: undefined
    },
    {
      id: 4,
      user: {
        name: "Tú",
        avatar: "/placeholder.svg",
        color: "text-indigo-400",
      },
      content: "¡Yo me apunto! ¿A qué hora?",
      timestamp: "12:40",
      isCurrentUser: true,
      avatar: undefined
    },
    {
      id: 5,
      user: {
        name: "Ana",
        avatar: "/placeholder.svg",
        color: "text-green-400",
      },
      content: "¿Qué tal a las 8pm?",
      timestamp: "12:42",
      isCurrentUser: false,
      avatar: undefined
    },
    {
      id: 6,
      user: {
        name: "Luis",
        avatar: "/placeholder.svg",
        color: "text-yellow-400",
      },
      content: "Yo también me uno. Podemos jugar ese nuevo juego que salió la semana pasada.",
      timestamp: "12:45",
      isCurrentUser: false,
      avatar: undefined
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Aquí podrías enviar el mensaje al servidor
      setMessage("");
    }
  };
  return (
    <><SideProfile></SideProfile>
    <div className="flex flex-col min-h-screen">
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {messages.map((msg) => (
                  <div
                      key={msg.id}
                      className={`flex items-start group mb-4 ${msg.isCurrentUser ? "justify-end" : ""}`}
                  >
                      {!msg.isCurrentUser && (
                          <img
                              src={msg.avatar}
                              alt={msg.user.name}
                              className="w-10 h-10 rounded-full mr-3 mt-0.5" />
                      )}

                      <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.isCurrentUser
                                  ? "bg-indigo-600 text-white"
                                  : "bg-gray-700 text-gray-100"}`}
                      >
                          {!msg.isCurrentUser && (
                              <div className="flex items-center mb-1">
                                  <span className={`font-medium ${msg.user.color}`}>
                                      {msg.user.name}
                                  </span>
                                  <span className="text-xs text-gray-400 ml-2">
                                      {msg.timestamp}
                                  </span>
                              </div>
                          )}

                          <p className="text-gray-100">{msg.content}</p>

                          {msg.isCurrentUser && (
                              <div className="flex justify-end">
                                  <span className="text-xs text-gray-300 mt-1">
                                      {msg.timestamp}
                                  </span>
                              </div>
                          )}
                      </div>

                      {msg.isCurrentUser && (
                          <img
                              src={msg.avatar}
                              alt={msg.user.name}
                              className="w-10 h-10 rounded-full ml-3 mt-0.5" />
                      )}
                  </div>
              ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex items-center">
                  <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 bg-gray-700 text-gray-100 rounded-l-md py-3 px-4 focus:outline-none" />
                  <button
                      type="submit"
                      className="bg-indigo-600 text-white rounded-r-md p-3 hover:bg-indigo-700"
                  >
                      <svg width="21" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
          </form>
      </div></>
  );
}