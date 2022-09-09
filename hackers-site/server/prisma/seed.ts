import { PrismaClient, NewsList, Comment } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const seedNewsList: NewsList[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seedNews.json'), 'utf8'));

async function NewsListSeed() {
  console.log(`Start seeding ...`);
  await Promise.all(
    seedNewsList.map((data) => {
      return prisma.newsList.upsert({
        where: { id: data.id },
        create: data,
        update: {},
      });
    }),
  );
  console.log(`Seeding finished.`);
}

NewsListSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const seedCommentsItem: Comment[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seedComments.json'), 'utf8'));
async function CommentsListSeed() {
  console.log(`Start seeding ...`);
  await Promise.all(
    seedCommentsItem.map((data) => {
      return prisma.comment.upsert({
        where: { id: data.id },
        create: data,
        update: {},
      });
    }),
  );
  console.log(`Seeding finished.`);
}

CommentsListSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
