"use client";

// components/Header.js
import styled from "styled-components";
import "../styles/globals.css";
import Link from "next/link";
import { Search } from "lucide-react"; // 검색 아이콘을 위한 패키지

export default function Header() {
  return (
    <HeaderContainer>
      <Logo><StyledLink href="/">Instagram</StyledLink></Logo>

      <SearchBarContainer>
        <SearchIcon />
        <SearchBar placeholder="Search" />
      </SearchBarContainer>

      <Icons>
        <StyledLink href="/messages">
          <Icon>💬</Icon>
        </StyledLink>
        <StyledLink href="/profile">
          <Icon>❤️</Icon>
        </StyledLink>
      </Icons>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* 그림자 추가 */
`;

const Logo = styled.h1`
  font-family: 'Billabong', cursive;
  font-size: 2.5rem;
  color: #262626;
  letter-spacing: 1px; /* 간격을 조금 조정 */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* 살짝 커지게 */
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; /* 더 밝은 색으로 변경 */
  border-radius: 25px; /* 둥근 모서리 */
  padding: 5px 15px; /* 패딩을 조금 더 넓게 */
  width: 300px; /* 검색바를 약간 넓게 */
  max-width: 100%;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1); /* 안쪽에 그림자 추가 */
`;

const SearchIcon = styled(Search)`
  color: #8e8e8e;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const SearchBar = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  width: 100%;
  color: #262626;

  &::placeholder {
    color: #8e8e8e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s, transform 0.3s ease-in-out;

  &:hover {
    color: #4B89DC; /* 링크에 호버 시 색상 변경 */
    transform: translateY(-2px); /* 살짝 위로 이동 */
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: #262626;
  transition: color 0.3s, transform 0.3s ease-in-out;

  &:hover {
    color: #ff6961; /* 아이콘에 호버 시 색상 변경 */
    transform: scale(1.2); /* 크기가 살짝 커지게 */
  }
`;
