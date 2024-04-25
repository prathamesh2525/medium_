import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>()

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id")
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  return c.json(post)
})

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const posts = await prisma.post.findMany({})

  return c.json(posts)
})

blogRouter.post("/", async (c) => {
  const userId = c.get("userId")

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  try {
    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    })
    return c.json({
      message: "blog added successfully",
      id: res.id,
    })
  } catch (error) {
    c.status(403)
    return c.json({ error })
  }
})

blogRouter.put("/", async (c) => {
  const userId = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  })

  return c.text("updated post")
})
