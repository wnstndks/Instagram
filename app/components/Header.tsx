'use client'

// components/Header.js
import styled from 'styled-components';
import '../styles/globals.css'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Instagram</Logo>
      <SearchBar placeholder="Search" />
      <Icons>
        <Icon>🏠</Icon>
        <Icon>💬</Icon>
        <Icon>❤️</Icon>
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
`;

const Logo = styled.h1`
  font-family: 'Billabong', cursive;
  font-size: 2rem;
`;

const SearchBar = styled.input`
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;