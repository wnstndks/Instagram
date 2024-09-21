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
    <div className="bg-white border rounded-lg mb-8 flex flex-col items-center">
      <div className="flex items-center p-4">
        <Image
          src={userImage}
          alt={user}
          width={32}
          height={32}
          className="rounded-full mr-3"
        />
        <span className="font-semibold">{user}</span>
      </div>
      <Image
        src="/public/images/cat.jpg"
        alt={caption}
        width={600}
        height={600}
        className="w-full"
      />
      <div className="p-4 text-center">
        <div className="flex items-center mb-2">
          <button onClick={handleLike} style={{'margin':'10px','fontSize':'20px'}}>❤️</button>
          <span className="font-semibold">{likes} likes</span>
        </div>
        <p>
          <span className="font-semibold mr-2">{user}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}
