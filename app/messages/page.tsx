import Link from "next/link";

const messages = [
  { id: 1, user: "john_doe", lastMessage: "Hey, how are you?" },
  { id: 2, user: "jane_smith", lastMessage: "Are we still meeting tomorrow?" },
  {
    id: 3,
    user: "travel_enthusiast",
    lastMessage: "I just got back from my trip!",
  },
];

export default function Messages() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="border-b p-4 hover:bg-gray-100">
            <div className="font-semibold">{message.user}</div>
            <Link href={`/messages/${message.id}`}>
              <div className="text-gray-600">{message.lastMessage}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
