import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const theNewsList: Prisma.newslistCreateInput[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "seed.json"), "utf8")
);

async function theList() {
  console.log(`Start seeding ...`);
  await Promise.all(
    theNewsList.map((data) => {
      return prisma.newslist.create({
        data,
      });
    })
  );
  console.log(`Seeding finished.`);
}

theList()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const theCommentsItem: Prisma.newsitemCreateInput[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "test.json"), "utf8")
);
async function theCommentsList() {
  console.log(`Start seeding ...`);
  await Promise.all(
    theCommentsItem.map((data) => {
      return prisma.newsitem.create({
        data,
      });
    })
  );
  console.log(`Seeding finished.`);
}

theCommentsList()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/* const theCommentsItem: Prisma.newsitemCreateInput[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "test.json"), "utf8")
);

async function theCommentsList() {
  console.log(`Start seeding ...`);
  for (const item of theCommentsItem) {
    const user = await prisma.newsitem.create({
      data: item,
    });
  }
  console.log(`Seeding finished.`);
}

theCommentsList()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
 */
