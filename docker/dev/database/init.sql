use test

CREATE TABLE IF NOT EXISTS ITEMS (
    name varchar(255) PRIMARY KEY,
    count int,
    owner varchar(255)
);

INSERT INTO ITEMS (name, count, owner) VALUES ('pen', 3, 'Bob');
INSERT INTO ITEMS (name, count, owner) VALUES ('book', 1, 'John');
INSERT INTO ITEMS (name, count, owner) VALUES ('cup', 3, 'Jully');
INSERT INTO ITEMS (name, count, owner) VALUES ('card', 100, 'Mike');
INSERT INTO ITEMS (name, count, owner) VALUES ('bike', 1, 'Bob');
