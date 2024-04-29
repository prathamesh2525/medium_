/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import remarkGfm from "remark-gfm"

const Blog = () => {
  const { id } = useParams()
  const [markdownContent, setMarkdownContent] = useState(`# An h1 header

  Paragraphs are separated by a blank line.
  
  2nd paragraph.
  
  *Italic*, bold, and monospace.
  
  Itemized lists look like:

  - this one
  - that one
  - the other one
  
  Note that — not considering the asterisk — the actual text content starts at 4-columns in.
  
  > Block quotes are
  > written like so.
  > They can span multiple paragraphs,
  > if you like.
  
  Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all in chapters 12–14"). Three dots … will be converted to an ellipsis.
  
  Unicode is supported. ☺
  
  ## An h2 header
  
  Here's a numbered list:
  
  1. first item
  2. second item
  3. third item
  
  Note again how the actual text starts at 4 columns in (4 characters from the left side).
  
  Here's a code sample:
  
  `)

  //   useEffect(() => {
  //     // Fetch the Markdown content for the blog with the given id
  //     // For demonstration purposes, using static Markdown content
  //     const fetchMarkdownContent = async () => {
  //       // Here you would fetch the Markdown content from your backend or any other source
  //       // For now, using static Markdown content
  //       const markdownContentResponse = await fetch(`/api/blog/${id}`)
  //       const markdownContentData = await markdownContentResponse.text()
  //       setMarkdownContent(markdownContentData)
  //     }

  //     fetchMarkdownContent()
  //   }, [id])

  // Ensure proper Markdown formatting
  const formattedMarkdownContent = markdownContent.trim().startsWith("#")
    ? markdownContent.trim()
    : `# ${markdownContent.trim()}`

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 mt-16">
      {/* Render the Markdown content using ReactMarkdown */}
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold mb-2" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold mb-2" {...props} />
          ),
          // Add more custom components for other Markdown elements as needed
        }}
        remarkPlugins={[remarkGfm]}
      >
        {formattedMarkdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default Blog
