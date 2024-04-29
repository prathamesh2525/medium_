import React, { useState } from "react"
import MarkdownIt from "markdown-it"
import MdEditor from "react-markdown-editor-lite"
import "react-markdown-editor-lite/lib/index.css"

const CreateBlogForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [markdownContent, setMarkdownContent] = useState("")

  const mdParser = new MarkdownIt()

  const handleEditorChange = ({ text }) => {
    setContent(text)
    setMarkdownContent(mdParser.render(text))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send data to backend
    console.log(markdownContent)
    console.log(content)
  }

  return (
    <div className="flex  justify-center min-w-96 mt-8 h-screen">
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded border px-8 pt-6 pb-8 mb-4"
          style={{ maxWidth: "1000px", margin: "0 auto" }} // Adjust max-width and margin as needed
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <MdEditor
              value={content}
              style={{ width: "100%", minHeight: "300px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogForm
