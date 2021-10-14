use test

CREATE TABLE IF NOT EXISTS ITEMS (
    ItemID serial PRIMARY KEY,
    Name varchar(255),
    Volume int,
    Owner varchar(255)
);

INSERT INTO ITEMS (Name, Volume, Owner) VALUES ('pen', 3, 'Bob');
INSERT INTO ITEMS (Name, Volume, Owner) VALUES ('book', 1, 'John');
INSERT INTO ITEMS (Name, Volume, Owner) VALUES ('pen', 3, 'Jully');
