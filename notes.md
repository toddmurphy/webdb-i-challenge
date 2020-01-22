//queries answers from directions

//find all customers with postal code 1010. Returns 3 records.
SELECT \* FROM Customers
WHERE PostalCode = '1010';

//find the phone number for the supplier with the id 11. Should be (010) 9984510
SELECT Phone
FROM Suppliers
WHERE SupplierId = '11';

//list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top
SELECT \* FROM Orders
ORDER BY OrderDate DESC
LIMIT 10;

//find all customers that live in London, Madrid, or Brazil. Returns 18 records
SELECT \* FROM Customers
WHERE Country = 'Brazil'
OR City = 'London'
OR City = 'Madrid'

//add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is "1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');

//update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers
SET PostalCode = '11122'
WHERE CustomerID = 92;
