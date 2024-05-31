
create TABLE Products (
id INT NOT NULL PRIMARY KEY,   
product_code varchar(30),
product_name varchar(30),
product_price int,
product_arrival TIMESTAMP,
product_brand varchar(30)
);

CREATE TABLE Purchases (
    id INT NOT NULL PRIMARY KEY,
    product_id INT,
    purchased_amount INT,
    purchased_total INT,
    FOREIGN KEY (product_id) REFERENCES Products(id)
);


CREATE TABLE Employee (
id INT NOT NULL PRIMARY KEY,
employee_name varchar(30),
employee_last_name varchar(30)
);

CREATE TABLE Receipt(
id INT NOT NULL PRIMARY KEY,
receipt_date TIMESTAMP,
receipt_email VARCHAR,
receipt_amount INT,
phone_number varchar(30),
employee_id INT,
FOREIGN KEY (employee_id) REFERENCES Employee(id)
);

CREATE TABLE Receipt_Purchases (
    id INT NOT NULL PRIMARY KEY,
    purchased_id INT,
    FOREIGN KEY (purchased_id) REFERENCES Purchases(id)
);



insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (1, '#bba4b5', 'Veal - Tenderloin, Untrimmed', 1000, '5.2.2024', 'Farmville');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (2, '#9af005', 'Green Scrubbie Pad H.duty', 4500, '12.3.2024', 'stardwew');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (3, '#82dabb', 'Pasta - Penne, Lisce, Dry', 60000, '23.5.2023', 'greatvalue');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (4, '#d53ad4', 'Ecolab Crystal Fusion', 40000, '10.12.2023', 'organicinc');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (5, '#c00e45', 'Apples - Sliced / Wedge', 1500, '4.12.2023', 'Farmville');

insert into Purchases (id, product_id, purchased_amount, purchased_total) values (1, 4, 4, 20000);
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (2, 1, 1, 110000);
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (3, 3, 8, 40000);
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (4, 1, 9, 3500 );
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (5, 2, 2, 15000);

insert into Employee (id, employee_name, employee_last_name) values (1, 'Trever', 'Billborough');
insert into Employee (id, employee_name, employee_last_name) values (2, 'Pascal', 'Carstairs');
insert into Employee (id, employee_name, employee_last_name) values (3, 'Prudence', 'Hardesty');
insert into Employee (id, employee_name, employee_last_name) values (4, 'Sandi', 'Stickins');
insert into Employee (id, employee_name, employee_last_name) values (5, 'Norbert', 'Couronne');


insert into Receipt (id, receipt_date, receipt_email, receipt_amount,phone_number,employee_id) values (1, '6/14/2023', 'jgittus0@amazon.de', 180000,'+50660403106',2);
insert into Receipt (id, receipt_date, receipt_email, receipt_amount,phone_number,employee_id) values (2, '6/20/2023', 'sranns1@squarespace.com', 90000,'+50660403106',2 );
insert into Receipt (id, receipt_date, receipt_email, receipt_amount,phone_number,employee_id) values (3, '3/26/2024', 'rlachaize2@gnu.org', 54000 ,'+50684305142',5);
insert into Receipt (id, receipt_date, receipt_email, receipt_amount,phone_number,employee_id) values (4, '12/14/2023', 'ateather3@umich.edu', 1000 ,'+50624450901',1);
insert into Receipt (id, receipt_date, receipt_email, receipt_amount,phone_number,employee_id) values (5, '6/3/2023', 'gcasolla4@tinypic.com', 10000 ,'+5063029821',4);

insert into Receipt_Purchases (id, purchased_id) values (1, 2);
insert into Receipt_Purchases (id, purchased_id) values (2, 2);
insert into Receipt_Purchases (id, purchased_id) values (3, 5);
insert into Receipt_Purchases (id, purchased_id) values (4, 1);
insert into Receipt_Purchases (id, purchased_id) values (5, 4);



select * from Products

select product_name from Products where product_price > 50000

SELECT * from Purchases where product_id = 2

SELECT purchased_total from Purchases ORDER BY product_id

SELECT * from Receipt WHERE receipt_email = 'jgittus0@amazon.de'

SELECT * from Receipt ORDER BY receipt_amount DESC

SELECT * from Receipt LIMIT 1