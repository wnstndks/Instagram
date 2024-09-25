import Post from './Post'
export default function Feed() {
  const posts = [
    { id: 1, user: 'john_doe', userImage: '/img/image.png', imageUrl: '/img/cat.jpg', likes: 42, caption: 'Beautiful sunset at the beach!' },
    { id: 2, user: 'jane_smith', userImage: '/img/dog.jpg', imageUrl: '/img/dog.jpg', likes: 28, caption: 'Delicious homemade pasta!' },
    { id: 3, user: 'travel_enthusiast', userImage: '/img/rabbit.jpg', imageUrl: '/img/rabbit.jpg', likes: 56, caption: 'Exploring the mountains!' },
  ]

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}