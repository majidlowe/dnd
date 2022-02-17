CREATE TABLE if not exists characters
(
    id        SERIAL PRIMARY KEY NOT NULL,
    name      VARCHAR(255),
    race      VARCHAR(255),
    hitPoints INT
)