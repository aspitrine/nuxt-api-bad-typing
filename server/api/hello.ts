import {prisma} from './../prisma'
export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  return users
})
