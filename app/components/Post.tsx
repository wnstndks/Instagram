'use client';

import Image from 'next/image'
import { useState } from 'react'

interface PostProps {
  user: string;
  userImage: string;
  imageUrl: string;
  likes: number;
  caption: string;
}

export default function Post({ user, userImage, imageUrl, likes: initialLikes, caption }: PostProps) {
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
    <div className="bg-white border rounded-lg mb-8">
      <div className="flex items-center p-4">
        <Image src={userImage} alt={user} width={32} height={32} className="rounded-full mr-3" />
        <span className="font-semibold">{user}</span>
      </div>
      <Image src={imageUrl} alt={caption} width={600} height={600} className="w-full" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <button onClick={handleLike}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <span className="font-semibold">{likes} likes</span>
        </div>
        <p><span className="font-semibold mr-2">{user}</span>{caption}</p>
      </div>
    </div>
  )
}