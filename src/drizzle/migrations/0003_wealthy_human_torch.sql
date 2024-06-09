ALTER TABLE "order_status" DROP CONSTRAINT "order_status_status_catalog_id_status_catalog_id_fk";
--> statement-breakpoint
ALTER TABLE "order_status" ALTER COLUMN "order_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "order_status" ALTER COLUMN "status_catalog_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "order_status" ADD COLUMN "created_at" timestamp DEFAULT NOW() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_status" ADD CONSTRAINT "order_status_status_catalog_id_status_catalog_id_fk" FOREIGN KEY ("status_catalog_id") REFERENCES "public"."status_catalog"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
