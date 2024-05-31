
create TABLE Products (
id INT NOT NULL PRIMARY KEY,   
product_code varchar(30),
product_name varchar(30),
product_price varchar(30),
product_arrival TIMESTAMP,
product_brand varchar(30)
);

CREATE TABLE Purchases (
    id INT NOT NULL PRIMARY KEY,
    product_id INT,
    purchased_amount INT,
    purchased_total varchar(30),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);



CREATE TABLE Receipt(
id INT NOT NULL PRIMARY KEY,
receipt_date TIMESTAMP,
receipt_email VARCHAR,
receipt_amount varchar(30)
);

CREATE TABLE Receipt_Purchases (
    id INT NOT NULL PRIMARY KEY,
    purchased_id INT,
    receipt_id INT,
    FOREIGN KEY (purchased_id) REFERENCES Purchases(id),
    FOREIGN KEY (receipt_id) REFERENCES Receipt(id)
);

insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (1, '#bba4b5', 'Veal - Tenderloin, Untrimmed', '$5.08', '5.2.2024', 'simply right famotidine');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (2, '#9af005', 'Green Scrubbie Pad H.duty', '$7.29', '12.3.2024', 'Potassium Chloride');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (3, '#82dabb', 'Pasta - Penne, Lisce, Dry', '$0.44', '23.5.2023', 'triamcinolone acetonide');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (4, '#d53ad4', 'Ecolab Crystal Fusion', '$2.60', '10.12.2023', 'Hydromorphone Hydrochloride');
insert into Products (id, product_code, product_name, product_price, product_arrival, product_brand) values (5, '#c00e45', 'Apples - Sliced / Wedge', '$7.45', '4.12.2023', 'Iodine Formula Filled Swab');

insert into Purchases (id, product_id, purchased_amount, purchased_total) values (1, 4, 4, '$47.49');
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (2, 1, 1, '$300.05');
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (3, 3, 8, '$45.18');
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (4, 1, 9, '$515.32');
insert into Purchases (id, product_id, purchased_amount, purchased_total) values (5, 2, 2, '$759.34');

insert into Receipt (id, receipt_date, receipt_email, receipt_amount) values (1, '6/14/2023', 'jgittus0@amazon.de', '$2.16');
insert into Receipt (id, receipt_date, receipt_email, receipt_amount) values (2, '6/20/2023', 'sranns1@squarespace.com', '$9.32');
insert into Receipt (id, receipt_date, receipt_email, receipt_amount) values (3, '3/26/2024', 'rlachaize2@gnu.org', '$2.90');
insert into Receipt (id, receipt_date, receipt_email, receipt_amount) values (4, '12/14/2023', 'ateather3@umich.edu', '$8.85');
insert into Receipt (id, receipt_date, receipt_email, receipt_amount) values (5, '6/3/2023', 'gcasolla4@tinypic.com', '$8.19');

insert into Receipt_Purchases (id, purchased_id,receipt_id) values (1, 2, 2);
insert into Receipt_Purchases (id, purchased_id,receipt_id) values (2, 2, 3);
insert into Receipt_Purchases (id, purchased_id, receipt_id) values (3, 5, 1);
insert into Receipt_Purchases (id, purchased_id, receipt_id) values (4, 1, 2);
insert into Receipt_Purchases (id, purchased_id, receipt_id) values (5, 4, 3);

drop TABLE Receipt_Purchases


