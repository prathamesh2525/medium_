// src/pages/CreateBlogPage.js

import CreateBlogForm from "../components/CreateBlogForm"
import Layout from "../components/Layout"

const CreateBlogPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">Create New Blog</h1>
        <CreateBlogForm />
      </div>
    </Layout>
  )
}

export default CreateBlogPage
