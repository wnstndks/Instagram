import Post from './Post'
import cat from '../public/img/cat.jpg'
import dog from '../public/img/dog.jpg'
import rabbit from '../public/img/rabbit.jpg'

export default function Feed() {
  const posts = [
    { id: 1, user: 'john_doe', userImage: cat, imageUrl: cat, likes: 42, caption: 'Beautiful sunset at the beach!' },
    { id: 2, user: 'jane_smith', userImage: dog, imageUrl: dog, likes: 28, caption: 'Delicious homemade pasta!' },
    { id: 3, user: 'travel_enthusiast', userImage: rabbit, imageUrl: rabbit, likes: 56, caption: 'Exploring the mountains!' },
  ]

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}