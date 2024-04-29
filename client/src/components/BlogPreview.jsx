/* eslint-disable react/prop-types */
// src/components/BlogPreview.js
import { Link } from "react-router-dom"

const BlogPreview = ({ blog }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-4">
          {blog.content.substring(0, 150)}...
        </p>
        <Link
          to={`/blog/${blog.id}`}
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg transition hover:bg-blue-600"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  )
}

export default BlogPreview
