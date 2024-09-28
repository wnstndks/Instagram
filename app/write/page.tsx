'use client';

import { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 게시물 제출 처리 로직 추가
    console.log({ title, description, image });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>게시물 작성</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            placeholder="제목을 입력하세요"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>설명</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={textareaStyle}
            placeholder="게시물 설명을 입력하세요"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>이미지 업로드</label>
          <input type="file" onChange={handleImageChange} style={inputStyle} />
        </div>

        <button type="submit" style={submitButtonStyle}>
          게시물 작성
        </button>
      </form>
    </div>
  );
}

// 스타일 정의
const containerStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '2rem auto',
  padding: '1rem',
  border: '1px solid #e2e8f0',
  borderRadius: '0.5rem',
};

const headerStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const formGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle: React.CSSProperties = {
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  border: '1px solid #cbd5e0',
  borderRadius: '0.25rem',
};

const textareaStyle: React.CSSProperties = {
  height: '100px',
  padding: '0.5rem',
  border: '1px solid #cbd5e0',
  borderRadius: '0.25rem',
};

const submitButtonStyle: React.CSSProperties = {
  padding: '0.75rem',
  backgroundColor: '#4299e1',
  color: 'white',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
};
