"use client";

import Image from "next/image";
import { useState } from "react";

interface PostProps {
  user: string;
  userImage: string;
  imageUrl: string;
  likes: number;
  caption: string;
}

export default function Post({
  user,
  userImage,
  imageUrl,
  likes: initialLikes,
  caption,
}: PostProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      marginBottom: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: '50%', // 가로 크기 60%
      padding: '0 16px', // 양쪽 패딩 추가
      boxSizing: 'border-box', // 패딩을 포함한 전체 크기 계산
      marginTop:'30px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px'
      }}>
        <Image
          src={userImage}
          alt={user}
          width={32}
          height={32}
          style={{
            borderRadius: '50%',
            marginRight: '16px'
          }}
        />
        <span style={{ fontWeight: '600' }}>{user}</span>
      </div>
      <Image
        src={imageUrl}
        alt={caption}
        width={600}
        height={600}
        style={{ width: '70%' }}
      />
      <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          justifyContent: 'center'
        }}>
          <button onClick={handleLike} style={{ margin: '10px', fontSize: '20px' }}>❤️</button>
          <span style={{ fontWeight: '600' }}>{likes} likes</span>
        </div>
        <p>
          <span style={{
            fontWeight: '600',
            marginRight: '8px'
          }}>{user}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}
