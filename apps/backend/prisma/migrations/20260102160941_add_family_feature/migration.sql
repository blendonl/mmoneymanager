-- CreateEnum
CREATE TYPE "family_member_role" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "family_invitation_status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "transaction_scope" AS ENUM ('PERSONAL', 'FAMILY');

-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "family_id" TEXT,
ADD COLUMN     "scope" "transaction_scope" NOT NULL DEFAULT 'PERSONAL';

-- CreateTable
CREATE TABLE "family" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "family_member" (
    "id" TEXT NOT NULL,
    "family_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "family_member_role" NOT NULL DEFAULT 'MEMBER',
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "family_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "family_invitation" (
    "id" TEXT NOT NULL,
    "family_id" TEXT NOT NULL,
    "inviter_id" TEXT NOT NULL,
    "invitee_id" TEXT,
    "invitee_email" TEXT NOT NULL,
    "status" "family_invitation_status" NOT NULL DEFAULT 'PENDING',
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "family_invitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "family_member_user_id_idx" ON "family_member"("user_id");

-- CreateIndex
CREATE INDEX "family_member_family_id_idx" ON "family_member"("family_id");

-- CreateIndex
CREATE UNIQUE INDEX "family_member_family_id_user_id_key" ON "family_member"("family_id", "user_id");

-- CreateIndex
CREATE INDEX "family_invitation_family_id_idx" ON "family_invitation"("family_id");

-- CreateIndex
CREATE INDEX "family_invitation_invitee_email_idx" ON "family_invitation"("invitee_email");

-- CreateIndex
CREATE INDEX "family_invitation_invitee_id_idx" ON "family_invitation"("invitee_id");

-- CreateIndex
CREATE INDEX "transaction_user_id_idx" ON "transaction"("user_id");

-- CreateIndex
CREATE INDEX "transaction_family_id_idx" ON "transaction"("family_id");

-- CreateIndex
CREATE INDEX "transaction_scope_idx" ON "transaction"("scope");

-- AddForeignKey
ALTER TABLE "family_member" ADD CONSTRAINT "family_member_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_member" ADD CONSTRAINT "family_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_invitation" ADD CONSTRAINT "family_invitation_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_invitation" ADD CONSTRAINT "family_invitation_inviter_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "family_invitation" ADD CONSTRAINT "family_invitation_invitee_id_fkey" FOREIGN KEY ("invitee_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE SET NULL ON UPDATE CASCADE;
