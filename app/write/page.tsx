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
      <Title>새 게시물</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">제목</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="제목을 입력하세요"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">내용</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="내용을 입력하세요"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">이미지 업로드</Label>
          <FileInput
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </FormGroup>

        {imagePreview && (
          <ImagePreview>
            <PreviewLabel>이미지 미리보기</PreviewLabel>
            <PreviewImage src={imagePreview} alt="미리보기 이미지" />
          </ImagePreview>
        )}

        <SubmitButton type="submit">게시하기</SubmitButton>
      </Form>

      {postSubmitted && (
        <PostPreview>
          <PreviewTitle>게시물 미리보기</PreviewTitle>
          <PreviewContent>
            <h3>{title}</h3>
            <p>{description}</p>
            {imagePreview && <PreviewImage src={imagePreview} alt="게시물 이미지" />}
          </PreviewContent>
        </PostPreview>
      )}
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #262626;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #8e8e8e;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #a8a8a8;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #a8a8a8;
  }
`;

const FileInput = styled.input`
  margin-top: 0.5rem;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const PreviewLabel = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  margin-bottom: 0.5rem;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  background-color: #0095f6;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0081d6;
  }
`;

const PostPreview = styled.div`
  margin-top: 2rem;
  background-color: #fafafa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
`;

const PreviewTitle = styled.h2`
  font-size: 18px;
  color: #262626;
  margin-bottom: 1rem;
`;

const PreviewContent = styled.div`
  h3 {
    font-size: 16px;
    color: #262626;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 14px;
    color: #262626;
    margin-bottom: 1rem;
  }
`;