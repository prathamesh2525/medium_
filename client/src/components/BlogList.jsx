/* eslint-disable react/prop-types */
// src/components/BlogList.js
import BlogPreview from "./BlogPreview"

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogPreview key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList
