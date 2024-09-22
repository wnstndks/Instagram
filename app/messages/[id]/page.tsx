'use client';

import { useParams } from 'next/navigation';

const messages: Record<number, { user: string; chat: string[] }> = {
  1: { user: 'john_doe', chat: ['Hey, how are you?', 'I am good!'] },
  2: { user: 'jane_smith', chat: ['What\'s up?', 'Not much, you?'] },
  3: { user: 'alice_jones', chat: ['Are you coming to the party?', 'Yes!'] },
};

export default function Message() {
  const params = useParams();
  const id = parseInt(params.id as string); // id를 number로 변환
  const message = messages[id];

  if (!message) {
    return <div>Message not found</div>;
  }

  return (
    <div>
      <h1>Chat with {message.user}</h1>
      <ul>
        {message.chat.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
