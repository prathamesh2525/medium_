import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import BlogListPage from "./pages/BlogListPage"
import CreateBlogPage from "./pages/CreateBlogPage"
import Navbar from "./components/Navbar"
import About from "./pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/create" element={<CreateBlogPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
