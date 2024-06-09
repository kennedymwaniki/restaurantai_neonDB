ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DEFAULT NOW();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DEFAULT NOW();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET NOT NULL;