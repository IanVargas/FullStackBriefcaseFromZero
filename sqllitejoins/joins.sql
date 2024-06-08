
CREATE TABLE Authors(
author_id int Not NULL PRIMARY KEY,
author_name varchar(30)
);

CREATE TABLE Books(
book_id Int NOT NULL PRIMARY KEY,
book_name varchar(30),
author_id int,
FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE Customers(
customer_id int NOT NULL PRIMARY KEY,
customer_name varchar(30),
email varchar(30)
);

CREATE TABLE Rents(
rent_id int NOT NULL PRIMARY KEY,
book_id int,
customer_id int,
state varchar(30),
FOREIGN KEY (book_id) REFERENCES Books(book_id),
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);