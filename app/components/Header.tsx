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
`;

const Logo = styled.h1`
  font-family: 'Billabong', cursive;
  font-size: 2.5rem;
  color: #262626;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #efefef;
  border-radius: 8px;
  padding: 5px 10px;
  width: 250px;
  max-width: 100%;
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
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: #262626;
  transition: color 0.3s;

  &:hover {
    color: #8e8e8e;
  }
`;
