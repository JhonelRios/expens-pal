CREATE TABLE `expenses_types` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(50) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `expenses_types_name_unique` ON `expenses_types` (`name`);