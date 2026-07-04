-- CreateTable
CREATE TABLE "guestbook_messages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guestbook_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "guestbook_messages_createdAt_idx" ON "guestbook_messages"("createdAt");
