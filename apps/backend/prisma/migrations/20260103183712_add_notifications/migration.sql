-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('FAMILY_INVITATION_SENT', 'FAMILY_INVITATION_RECEIVED', 'FAMILY_INVITATION_ACCEPTED', 'FAMILY_INVITATION_DECLINED', 'FAMILY_MEMBER_JOINED', 'FAMILY_MEMBER_LEFT', 'FAMILY_TRANSACTION_CREATED', 'TRANSACTION_MILESTONE_BUDGET_ALERT', 'TRANSACTION_MILESTONE_SPENDING_LIMIT', 'RECEIPT_PROCESSING_COMPLETE');

-- CreateEnum
CREATE TYPE "notification_delivery_method" AS ENUM ('PUSH', 'IN_APP', 'TOAST');

-- CreateEnum
CREATE TYPE "notification_priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "notification_type" NOT NULL,
    "priority" "notification_priority" NOT NULL DEFAULT 'MEDIUM',
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "data" JSONB,
    "deliveryMethods" "notification_delivery_method"[],
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "read_at" TIMESTAMP(3),
    "is_interacted" BOOLEAN NOT NULL DEFAULT false,
    "interacted_at" TIMESTAMP(3),
    "action_url" TEXT,
    "family_id" TEXT,
    "transaction_id" TEXT,
    "invitation_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_preference" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "enable_push_notifications" BOOLEAN NOT NULL DEFAULT true,
    "enable_in_app_notifications" BOOLEAN NOT NULL DEFAULT true,
    "enable_toast_notifications" BOOLEAN NOT NULL DEFAULT true,
    "quiet_hours_enabled" BOOLEAN NOT NULL DEFAULT false,
    "quiet_hours_start" TIMESTAMP(3),
    "quiet_hours_end" TIMESTAMP(3),
    "type_preferences" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_token" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expo_push_token" TEXT NOT NULL,
    "platform" TEXT,
    "device_id" TEXT,
    "device_name" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_used" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notification_user_id_idx" ON "notification"("user_id");

-- CreateIndex
CREATE INDEX "notification_user_id_is_read_idx" ON "notification"("user_id", "is_read");

-- CreateIndex
CREATE INDEX "notification_family_id_idx" ON "notification"("family_id");

-- CreateIndex
CREATE INDEX "notification_type_idx" ON "notification"("type");

-- CreateIndex
CREATE INDEX "notification_created_at_idx" ON "notification"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "notification_preference_user_id_key" ON "notification_preference"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "device_token_expo_push_token_key" ON "device_token"("expo_push_token");

-- CreateIndex
CREATE INDEX "device_token_user_id_idx" ON "device_token"("user_id");

-- CreateIndex
CREATE INDEX "device_token_expo_push_token_idx" ON "device_token"("expo_push_token");

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_preference" ADD CONSTRAINT "notification_preference_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_token" ADD CONSTRAINT "device_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
