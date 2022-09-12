-- CreateTable
CREATE TABLE "NewsList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "points" INTEGER,
    "user" TEXT,
    "time" INTEGER NOT NULL,
    "time_ago" TEXT NOT NULL,
    "comments_count" INTEGER,
    "type" TEXT NOT NULL,
    "url" TEXT,
    "domain" TEXT,

    CONSTRAINT "NewsList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "user" TEXT,
    "time" INTEGER NOT NULL,
    "time_ago" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "comments_count" INTEGER,
    "level" INTEGER,
    "url" TEXT,
    "domain" TEXT,
    "parentId" INTEGER,
    "newsId" INTEGER,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "NewsList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
