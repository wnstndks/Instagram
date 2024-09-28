'use client';

import { useState } from 'react';

export default function EditProfile() {
  const [username, setUsername] = useState('john_doe');
  const [bio, setBio] = useState('안녕하세요! 여행을 좋아하는 사람입니다.');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, bio, image });
    // 여기에 프로필 정보를 서버로 제출하는 로직을 추가할 수 있습니다.
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>프로필 편집</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>프로필 사진</label>
          <input type="file" onChange={handleImageChange} style={inputStyle} />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>사용자명</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            placeholder="사용자명을 입력하세요"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>소개</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={textareaStyle}
            placeholder="자기소개를 입력하세요"
          />
        </div>

        <button type="submit" style={submitButtonStyle}>
          저장하기
        </button>
      </form>
    </div>
  );
}

// 스타일 정의
const containerStyle: React.CSSProperties = {
  maxWidth: '1024px', // 최대 너비 설정
  margin: '2rem auto', // 상단 여백 및 중앙 정렬
  padding: '1rem', // 내부 여백
};

const headerStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const formGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #cbd5e0',
};

const textareaStyle: React.CSSProperties = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #cbd5e0',
  minHeight: '5rem',
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: '#4299e1', // 파란색 배경
  color: 'white', // 흰색 글자
  padding: '0.5rem 1rem', // 패딩
  borderRadius: '0.25rem', // 모서리 둥글게
  border: 'none', // 테두리 제거
  cursor: 'pointer', // 커서 포인터
};
