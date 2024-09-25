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
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Message not found</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '16px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Chat with {message.user}
      </h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {message.chat.map((line, index) => (
          <li
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#f1f1f1' : '#e9e9e9', // 짝수, 홀수 행 색상 구분
              padding: '10px',
              margin: '8px 0',
              borderRadius: '4px',
            }}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
