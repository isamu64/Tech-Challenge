--Table

DROP TABLE IF EXISTS "members";


CREATE TABLE IF NOT EXISTS "members" (
    "id" SERIAL,
    "name" TEXT NOT NULL
);


--Data

INSERT INTO "members" ("name") VALUES
('Eleftheria'),
('Gennadios'),
('Lysimachos');