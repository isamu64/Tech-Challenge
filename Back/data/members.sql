--Table

DROP TABLE IF EXISTS "members";


CREATE TABLE IF NOT EXISTS "members" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);


--Data

INSERT INTO "members" ("id", "name") VALUES
(1, 'Eleftheria'),
(2, 'Gennadios'),
(3, 'Lysimachos');