'use client';

import { useState } from 'react';
import styled from 'styled-components';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // 이미지 미리보기
  const [postSubmitted, setPostSubmitted] = useState(false); // 게시물 제출 여부

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FormData로 서버에 보내는 부분 생략 가능
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    // 실제 서버 전송 로직 생략
    setPostSubmitted(true); // 게시물 제출 상태 true로 변경
  };

  // 이미지 선택 시 미리보기 설정
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
    }
  };

  return (
    <Container>
      <h1>글 작성</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">내용</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="image">이미지 업로드</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </FormGroup>

        {/* 이미지 미리보기 */}
        {imagePreview && (
          <ImagePreview>
            <p>이미지 미리보기:</p>
            <img src={imagePreview} alt="미리보기 이미지" />
          </ImagePreview>
        )}

        <button type="submit">게시물 작성</button>
      </form>

      {/* 게시물 미리보기 */}
      {postSubmitted && (
        <PostPreview>
          <h2>제출된 게시물</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          {imagePreview && <img src={imagePreview} alt="게시물 이미지" />}
        </PostPreview>
      )}
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const PostPreview = styled.div`
  margin-top: 2rem;
  background-color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  h2 {
    margin-bottom: 0.5rem;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

