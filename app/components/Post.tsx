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
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #dbdbdb",
        borderRadius: "10px",
        marginBottom: "40px",
        maxWidth: "800px", // 가로 크기 고정
        margin: "30px auto", // 가운데 정렬
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 추가
        fontFamily: "'Helvetica Neue', Arial, sans-serif", // 인스타그램스러운 글꼴
      }}
    >
      {/* 상단 사용자 정보 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid #dbdbdb",
        }}
      >
        <Image
          src={userImage}
          alt={user}
          width={32}
          height={32}
          style={{
            borderRadius: "50%",
            marginRight: "12px",
          }}
        />
        <span style={{ fontWeight: "600", fontSize: "14px", color: "#262626" }}>
          {user}
        </span>
      </div>

      {/* 게시물 이미지 */}
      <Image
        src={imageUrl}
        alt={caption}
        width={600}
        height={600}
        style={{
          width: "100%",
          maxHeight: "600px",
          objectFit: "cover", // 이미지를 container에 맞게 조정
        }}
      />

      {/* 하단 인터랙션 */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <button
            onClick={handleLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginRight: "8px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                color: isLiked ? "#ed4956" : "#262626", // 좋아요 상태에 따라 색상 변경
              }}
            >
              ❤️
            </span>
          </button>
          <span
            style={{
              fontWeight: "600",
              fontSize: "14px",
              color: "#262626",
            }}
          >
            {likes} likes
          </span>
        </div>

        {/* 캡션 */}
        <p style={{ fontSize: "14px", color: "#262626" }}>
          <span style={{ fontWeight: "600", marginRight: "8px" }}>{user}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}
