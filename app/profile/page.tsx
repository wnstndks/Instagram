'use client';

import Image from 'next/image';
import cat from '../public/img/image.png';

export default function Profile() {
  return (
    <div style={containerStyle}>
      {/* 프로필 헤더 */}
      <div style={profileHeaderStyle}>
        <Image
          src={cat} // 프로필 이미지 경로
          alt="User Profile"
          width={100}
          height={100}
          style={imageStyle}
        />
        <div style={infoStyle}>
          <h1 style={nameStyle}>john_doe</h1>
          <p style={bioStyle}>안녕하세요! 여행을 좋아하는 사람입니다.</p>
          <button style={editButtonStyle}>프로필 편집</button>
        </div>
      </div>

      {/* 팔로워 및 팔로잉 */}
      <div style={followersStyle}>
        <div style={followerCountStyle}>
          <span style={countStyle}>120</span>
          <span style={labelStyle}>게시물</span>
        </div>
        <div style={followerCountStyle}>
          <span style={countStyle}>500</span>
          <span style={labelStyle}>팔로워</span>
        </div>
        <div style={followerCountStyle}>
          <span style={countStyle}>180</span>
          <span style={labelStyle}>팔로잉</span>
        </div>
      </div>

      {/* 게시물 그리드 */}
      <div style={gridStyle}>
        {/* 게시물 리스트 */}
        <div style={postStyle}></div>
        <div style={postStyle}></div>
        <div style={postStyle}></div>
        <div style={postStyle}></div>
        <div style={postStyle}></div>
        <div style={postStyle}></div>
      </div>
    </div>
  );
}

// 스타일 정의
const containerStyle: React.CSSProperties = {
  maxWidth: '1024px', // 최대 너비 설정
  margin: '2rem auto', // 상단 여백 및 중앙 정렬
  padding: '1rem', // 내부 여백
};

const profileHeaderStyle: React.CSSProperties = {
  display: 'flex', // Flexbox 사용
  alignItems: 'center', // 세로 정렬
  marginBottom: '2rem', // 하단 여백
};

const imageStyle: React.CSSProperties = {
  borderRadius: '50%', // 원형 이미지
};

const infoStyle: React.CSSProperties = {
  marginLeft: '1.5rem', // 이미지와의 간격
};

const nameStyle: React.CSSProperties = {
  fontSize: '1.5rem', // 이름 크기
  fontWeight: 'bold', // 볼드 처리
};

const bioStyle: React.CSSProperties = {
  color: '#718096', // 회색 텍스트
};

const editButtonStyle: React.CSSProperties = {
  marginTop: '0.5rem', // 상단 여백
  backgroundColor: '#4299e1', // 파란색 배경
  color: 'white', // 흰색 글자
  padding: '0.5rem 1rem', // 패딩
  borderRadius: '0.25rem', // 모서리 둥글게
  border: 'none', // 테두리 제거
  cursor: 'pointer', // 커서 포인터
};

const followersStyle: React.CSSProperties = {
  display: 'flex', // Flexbox 사용
  justifyContent: 'space-between', // 간격 분배
  marginBottom: '2rem', // 하단 여백
};

const followerCountStyle: React.CSSProperties = {
  textAlign: 'center', // 중앙 정렬
};

const countStyle: React.CSSProperties = {
  display: 'block', // 블록 요소
  fontWeight: 'bold', // 볼드 처리
  fontSize: '1.25rem', // 글자 크기
};

const labelStyle: React.CSSProperties = {
  color: '#718096', // 회색 텍스트
};

const gridStyle: React.CSSProperties = {
  display: 'grid', // 그리드 사용
  gridTemplateColumns: 'repeat(3, 1fr)', // 3열 설정
  gap: '1rem', // 간격
};

const postStyle: React.CSSProperties = {
  width: '100%', // 너비 100%
  height: '10rem', // 높이 설정
  backgroundColor: '#edf2f7', // 연한 회색 배경
};
