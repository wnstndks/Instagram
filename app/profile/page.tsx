'use client';

import Image from 'next/image';
import cat from '../public/img/image.png';
export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      {/* 프로필 헤더 */}
      <div className="flex items-center mb-8">
        <Image
          src={cat} // 프로필 이미지 경로
          alt="User Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-bold">john_doe</h1>
          <p className="text-gray-500">안녕하세요! 여행을 좋아하는 사람입니다.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">프로필 편집</button>
        </div>
      </div>

      {/* 팔로워 및 팔로잉 */}
      <div className="flex justify-between mb-8">
        <div className="text-center">
          <span className="block font-bold text-lg">120</span>
          <span className="text-gray-500">게시물</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg">500</span>
          <span className="text-gray-500">팔로워</span>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg">180</span>
          <span className="text-gray-500">팔로잉</span>
        </div>
      </div>

      {/* 게시물 그리드 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 게시물 리스트 */}
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="w-full h-40 bg-gray-200"></div>
        <div className="w-full h-40 bg-gray-200"></div>
      </div>
    </div>
  );
}
