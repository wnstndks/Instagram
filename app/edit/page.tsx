"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";

export default function EditProfile() {
  const [username, setUsername] = useState("john_doe");
  const [bio, setBio] = useState("안녕하세요! 여행을 좋아하는 사람입니다.");
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
    <div className="edit-profile-container">
      <h1 className="title">프로필 편집</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="profile-picture-container">
          <div className="profile-picture">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Profile"
                className="image-preview"
              />
            ) : (
              <div className="camera-icon-container">
                <Camera size={32} className="camera-icon" />
              </div>
            )}
          </div>
          <label htmlFor="profile-upload" className="upload-label">
            프로필 사진 변경
          </label>
          <input
            id="profile-upload"
            type="file"
            onChange={handleImageChange}
            className="upload-input"
            accept="image/*"
          />
        </div>

        <div className="form-group">
          <label htmlFor="username" className="label">
            사용자명
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="사용자명을 입력하세요"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio" className="label">
            소개
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textarea"
            placeholder="자기소개를 입력하세요"
          />
        </div>

        <button type="submit" className="submit-button">
          저장하기
        </button>
      </form>

      <style jsx>{`
        .edit-profile-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .title {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .profile-picture-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .profile-picture {
          width: 96px;
          height: 96px;
          background-color: #e2e2e2;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .camera-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .camera-icon {
          color: #888;
        }
        .upload-label {
          color: #007bff;
          cursor: pointer;
          font-weight: 500;
        }
        .upload-input {
          display: none;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .label {
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
        .input,
        .textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          width: 100%;
        }
        .input {
          height: 36px;
        }
        .textarea {
          height: 100px;
          resize: none;
        }
        .submit-button {
          padding: 10px 15px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
