'use client';

import Link from "next/link";
import { useState } from "react";

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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '32px', padding: '16px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center', color: '#333' }}>
        Messages
      </h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {messages.map((message) => (
          <Link href={`/messages/${message.id}`} key={message.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <li
              style={{
                borderBottom: '1px solid #e5e5e5',
                padding: '16px',
                cursor: 'pointer',
                backgroundColor: hoveredId === message.id ? '#f7f7f7' : 'white',
                boxShadow: hoveredId === message.id ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                borderRadius: '8px',
                transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s',
                transform: hoveredId === message.id ? 'scale(1.02)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredId(message.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ fontWeight: '600', fontSize: '18px', color: '#111' }}>{message.user}</div>
              <div style={{ color: '#6b7280', marginTop: '4px', fontSize: '14px' }}>{message.lastMessage}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
