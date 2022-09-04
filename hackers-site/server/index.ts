import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import fastifyCors from "@fastify/cors";
const prisma = new PrismaClient();

const server = fastify({ logger: true });
server.register(fastifyCors, {});
server.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server listening at ", 5000);
});

server.get("/", async (req, res) => {
  const posts = await prisma.newslist.findMany({ orderBy: { time: "desc" } });
  return posts;
});

server.get("/news/:id", async (req, res) => {
  const { id } = req.params as { id: string };
  const items = await prisma.newsitem.findUnique({
    where: { id: Number(id) },
    include: {
      comments: {
        include: {
          comments: {
            include: {
              comments: {
                include: {
                  comments: {
                    include: {
                      comments: {
                        include: {
                          comments: {
                            include: {
                              comments: {
                                include: {
                                  comments: {
                                    include: {
                                      comments: true,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return items;
});
