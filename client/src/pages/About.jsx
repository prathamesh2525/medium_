const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Blogit</h1>
      <p className="text-lg mb-4">
        Blogit is a platform for sharing thoughts, ideas, and stories with the
        world. Whether you're a seasoned writer or just starting out, Blogit
        provides you with the tools you need to create and publish engaging
        content.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower individuals to express themselves freely and
        connect with others through the power of storytelling. With Blogit, you
        can reach a global audience, spark meaningful discussions, and inspire
        others with your words.
      </p>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>John Doe - Founder & CEO</li>
        <li>Jane Smith - Head of Content</li>
        <li>Michael Johnson - Lead Developer</li>
        {/* Add more team members as needed */}
      </ul>
      <p className="text-lg mb-4">
        Have questions or feedback? Feel free to reach out to us at
        contact@blogit.com. We'd love to hear from you!
      </p>
    </div>
  )
}

export default About
