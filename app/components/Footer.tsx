'use client';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      {/* Footer 왼쪽 - 저작권 정보 */}
      <div style={footerLeftStyle}>
        <p>&copy; {new Date().getFullYear()} MyInstagramClone. All Rights Reserved.</p>
      </div>

      {/* Footer 중앙 - 주요 링크 */}
      <div style={footerCenterStyle}>
        <a href="/about" style={footerLinkStyle}>About Us</a>
        <a href="/contact" style={footerLinkStyle}>Contact</a>
        <a href="/privacy" style={footerLinkStyle}>Privacy Policy</a>
        <a href="/terms" style={footerLinkStyle}>Terms of Service</a>
      </div>

      {/* Footer 오른쪽 - 소셜 미디어 아이콘 */}
      {/* <div style={footerRightStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg ...></svg> 
        </a>
        ...
      </div> */} 
    </footer>
  );
}

// 스타일 정의
const footerStyle: React.CSSProperties = {
  backgroundColor: '#2d3748', // Dark gray background
  color: 'white', // White text
  padding: '16px', // Padding for the footer
  display: 'flex', // Flexbox for layout
  justifyContent: 'space-between', // Space between items
  alignItems: 'center', // Center align items vertically
  marginTop: '32px', // Top margin for spacing
  width: '100%', // Full width
};

const footerLeftStyle: React.CSSProperties = {
  flex: 1, // Left section takes available space
};

const footerCenterStyle: React.CSSProperties = {
  display: 'flex', // Flexbox for center links
  gap: '16px', // Space between links
  flex: 1, // Center section takes available space
  justifyContent: 'center', // Center align links
};

const footerLinkStyle: React.CSSProperties = {
  color: 'white', // Link color
  transition: 'color 0.2s', // Transition for hover effect
};

// 호버 시 링크 색상 변경을 위한 추가 스타일
const footerLinkHoverStyle: React.CSSProperties = {
  color: '#a0aec0', // Light gray on hover
};