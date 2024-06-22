// Import the getPosts function from your data module or API service
import { getPosts } from '@/lib/data' // Adjust the path based on your project structure
import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'

export const metadata = {
  title: 'Blog Page',
  description: 'Blog description'
}

const BlogPage = async () => {
  // Fetch the list of posts
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
