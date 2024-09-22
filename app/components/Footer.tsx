'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      {/* <div className="max-w-4xl mx-auto px-4 flex justify-between items-center"> */}
        {/* Footer 왼쪽 - 저작권 정보 */}
        <div>
          <p>&copy; {new Date().getFullYear()} MyInstagramClone. All Rights Reserved.</p>
        </div>

        {/* Footer 중앙 - 주요 링크 */}
        <div className="flex gap-4">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
        </div>

        {/* Footer 오른쪽 - 소셜 미디어 아이콘
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M9 8H7v4h2v12h5V12h3.6l.4-4h-4V6.8c0-1.2.3-1.8 1.8-1.8H19V0h-3c-3.2 0-5 1.7-5 5v3z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M24 4.6c-.9.4-1.9.7-2.9.8a5.2 5.2 0 002.2-2.9 9.6 9.6 0 01-3.2 1.2 4.9 4.9 0 00-8.4 4.4A14 14 0 011.7 3.1a5 5 0 001.5 6.6 4.9 4.9 0 01-2.3-.6v.1a4.9 4.9 0 004 4.8 5 5 0 01-2.2.1 5 5 0 004.6 3.4A9.8 9.8 0 010 20.5a14 14 0 007.5 2.2c9 0 14-7.4 14-13.8 0-.2 0-.4-.1-.6a10 10 0 002.6-2.7z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zM12 6.6a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8zm0 1.7a3.7 3.7 0 110 7.4 3.7 3.7 0 010-7.4zm5.4-.9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
          </a>
        </div>
      </div> */}
    </footer>
  );
}
