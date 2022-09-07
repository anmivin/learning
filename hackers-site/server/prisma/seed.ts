import { PrismaClient, Prisma, newsitem, newslist } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const seedNewsList: newslist[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'seed.json'), 'utf8'));

async function NewsList() {
  console.log(`Start seeding ...`);
  await Promise.all(
    seedNewsList.map((data) => {
      return prisma.newslist.upsert({
        where: { id: data.id },
        create: data,
        update: {},
      });
    }),
  );
  console.log(`Seeding finished.`);
}

NewsList()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const seedCommentsItem: newsitem[] = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'test.json'), 'utf8'));
async function CommentsList() {
  console.log(`Start seeding ...`);
  await Promise.all(
    seedCommentsItem.map((data) => {
      return prisma.newsitem.upsert({
        where: { id: data.id },
        create: data,
        update: {},
      });
    }),
  );
  console.log(`Seeding finished.`);
}

CommentsList()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
