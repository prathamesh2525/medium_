import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { sign, verify } from "hono/jwt"
import { userRouter } from "./user"
import { blogRouter } from "./blog"

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>()

app.use("/api/v1/blog/*", async (c, next) => {
  const jwtToken = c.req.header("Authorization")?.split(" ")[1]

  if (!jwtToken) {
    c.status(401)
    return c.json({ error: "unauthorized" })
  }

  const payload = await verify(jwtToken, c.env.JWT_SECRET)
  if (!payload) {
    c.status(401)
    return c.json({ error: "unauthorized" })
  }
  c.set("userId", payload.id)
  await next()
})

app.route("/api/v1/user", userRouter)

app.route("/api/v1/blog", blogRouter)

export default app
