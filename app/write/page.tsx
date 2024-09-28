'use client';

import { useState } from 'react';

export default function Write() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FormData 객체 생성 (파일과 다른 데이터 전송)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch('/api/write', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log('게시물 작성 완료:', data);
        // 성공적으로 제출된 경우, 다른 페이지로 이동하거나 알림 표시
      } else {
        console.error('게시물 작성 실패');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>글 작성</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="title" style={labelStyle}>제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="description" style={labelStyle}>내용</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={textareaStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="image" style={labelStyle}>이미지 업로드</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            style={inputStyle}
          />
        </div>

        <button type="submit" style={submitButtonStyle}>게시물 작성</button>
      </form>
    </div>
  );
}

// 스타일 정의
const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '1rem',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
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
  minHeight: '8rem',
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: '#4299e1',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  border: 'none',
  cursor: 'pointer',
};
