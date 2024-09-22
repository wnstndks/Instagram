import Post from './Post'

export default function Feed() {
  const posts = [
    { id: 1, user: 'john_doe', userImage: '/cat.jpg', imageUrl: '/images/cat.jpg', likes: 42, caption: 'Beautiful sunset at the beach!' },
    { id: 2, user: 'jane_smith', userImage: '/user2.jpg', imageUrl: '/post2.jpg', likes: 28, caption: 'Delicious homemade pasta!' },
    { id: 3, user: 'travel_enthusiast', userImage: '/user3.jpg', imageUrl: '/post3.jpg', likes: 56, caption: 'Exploring the mountains!' },
  ]

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}