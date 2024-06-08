/*SELECT Books.book_name,Authors.author_name
FROM Books as books
INNER JOIN Authors as authors
ON books.author_id = authors.author_id 
*/


/*SELECT book_name FROM Books WHERE author_id IS NULL;*/


/*SELECT Books.book_name , Authors.author_name
FROM Books as Books
RIGHT JOIN Authors as Authors
ON Authors.author_id = Books.author_id
WHERE (Books.author_id IS NULL)
*/

/*SELECT Books.book_name,Rents.rent_id
FROM Books AS Books
INNER JOIN Rents AS Rents
ON Books.book_id = Rents.rent_id*/


/*
SELECT Books.book_name 
FROM Books as Books 
LEFT JOIN Rents as Rents
on Books.book_id = Rents.book_id
where Rents.book_id IS NULL*/

/*SELECT Customers.customer_name
FROM Customers AS Customers
LEFT JOIN Rents AS Rents
ON Customers.customer_id = Rents.customer_id
WHERE Rents.customer_id IS NULL*/

SELECT Books.book_name, Rents.state
FROM Books AS Books
INNER JOIN Rents AS Rents
ON Books.book_id - Rents.rent_id
AND Rents.state = "Overdue"
