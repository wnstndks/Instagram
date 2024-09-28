import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description } = req.body;
    console.log('제목:', title, '내용:', description);

    // 이미지 처리 로직 추가 가능

    res.status(200).json({ message: '게시물 작성 완료' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
