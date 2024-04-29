// src/pages/BlogListPage.js
import BlogList from "../components/BlogList"
import Layout from "../components/Layout"

const BlogListPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Beauty of Nature",
      content: `
        One of the greatest joys in life is to immerse oneself in the beauty of nature. Whether it's the tranquil serenity of a forest, the mesmerizing dance of waves on the beach, or the breathtaking sight of a mountain peak, nature has a way of captivating our senses and soothing our souls.
  
        Every journey into nature is a unique experience, filled with wonder and discovery. From the delicate petals of a wildflower to the majestic flight of an eagle, there is always something new to marvel at.
  
        In today's fast-paced world, it's more important than ever to take the time to reconnect with nature. Whether it's a leisurely stroll through a local park or an adventurous hike through rugged terrain, spending time outdoors can rejuvenate the body, mind, and spirit.
  
        So let's lace up our hiking boots, pack our bags, and embark on a journey into the heart of nature. Let's explore the beauty that surrounds us and rediscover the wonders of the natural world.
      `,
    },
    {
      id: 2,
      title: "The Art of Mindfulness: Finding Peace in the Present Moment",
      content: `
        Mindfulness is the practice of being fully present in the moment, without judgment or attachment. It is the art of cultivating awareness and acceptance of our thoughts, feelings, and sensations as they arise.
  
        In today's fast-paced world, where distractions abound and stress levels are high, mindfulness offers a path to inner peace and tranquility. By learning to observe our thoughts and emotions with curiosity and compassion, we can develop greater clarity, resilience, and emotional well-being.
  
        The practice of mindfulness is simple but profound. It can be as simple as paying attention to the sensations of breathing, or as complex as engaging in deep introspection and self-inquiry. Whatever form it takes, mindfulness invites us to slow down, tune in, and connect with the richness of the present moment.
  
        So let's take a moment to pause, to breathe, and to be fully present. Let's embrace the art of mindfulness and discover the peace and joy that await us in the here and now.
      `,
    },
  ]
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p className="text-gray-600">Check out our latest articles</p>
      </div>
      <BlogList blogs={blogs} />
    </Layout>
  )
}

export default BlogListPage
