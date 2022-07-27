-- Stored procedures for users

CREATE OR ALTER PROCEDURE [dbo].[insert_user]
    (
    @fullName VARCHAR(100),
    @email VARCHAR(100),
    @telephone VARCHAR(20),
    @password VARCHAR(255),
    @role bit
    )
    AS
    BEGIN
    INSERT INTO Users
        (fullName, email, telephone, [password],[role])
    VALUES(@fullName, @email, @telephone, @password, @role)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[all_users]
AS
BEGIN
    SELECT *
    FROM Users
END
GO

CREATE OR ALTER PROCEDURE [dbo].[update_user]
    (
    @fullName VARCHAR(100),
    @email VARCHAR(100),
    @telephone VARCHAR(20)
)
AS
BEGIN
    UPDATE Users SET fullName=@fullName, telephone=@telephone
WHERE email=@email
END
GO




CREATE OR ALTER PROCEDURE [dbo].[verify_exists]
    @email VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM Users
    WHERE email = @email
END
GO

CREATE or ALTER PROCEDURE [dbo].[fetchUserEmailById]
    @userid INT
AS
BEGIN
    SELECT email
    FROM Users
    WHERE userId = @userid
END
GO

CREATE or ALTER PROCEDURE [dbo].[fetchUserNameById]
    @userid INT
AS
BEGIN
    SELECT fullName
    FROM Users
    WHERE userId = @userid
END
GO


-- Stored procedures for categories

CREATE OR ALTER PROCEDURE [dbo].[all_categories]
AS
BEGIN
    SELECT *
    FROM Categories
END
GO

CREATE OR ALTER PROCEDURE [dbo].[add_category]
    @categoryName VARCHAR(100)
AS
BEGIN
    INSERT INTO categories
    VALUES(@categoryName)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[update_category]
    (
    @categoryId INT,
    @categoryName VARCHAR(100)
)
AS
BEGIN
    UPDATE Categories SET categoryName=@categoryName
WHERE categoryId=@categoryId
END
GO

CREATE OR ALTER PROCEDURE [dbo].[verify_category]
    @categoryName VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM Categories
    WHERE categoryName = (@categoryName)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[fetch_category]
    @catId INT
AS
BEGIN
    SELECT * FROM categories WHERE categoryId = @catId
END
GO
-- Stored procedures for products

CREATE OR ALTER PROCEDURE [dbo].[all_products]
AS
BEGIN
    SELECT *
    FROM Products
END
GO

CREATE OR ALTER PROCEDURE [dbo].[add_products](
    @imageUrl VARCHAR(255),
    @productName VARCHAR(100),
    @price SMALLMONEY,
    @description TEXT,
    @categoryId INT
)
AS
BEGIN
    INSERT INTO Products
        (imageUrl, productName, price, [description], categoryId )
    VALUES
        ( @imageUrl, @productName, @price , @description, @categoryId)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[update_product] (
    @proddId INT,
    @imageUrl VARCHAR(255),
    @productName VARCHAR(100),
    @price SMALLMONEY,
    @description TEXT,
    @categoryId INT
)
AS
BEGIN
    UPDATE Products SET 
        imageUrl=@imageUrl, productName=@productName, 
        price=@price, [description]=@description, 
        categoryId=@categoryId
    WHERE productID=@proddId
END
GO

CREATE OR ALTER PROCEDURE [dbo].[verify_product]
    @productName VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM Products
    WHERE productName = @productName
END
GO


-- Stored procedures for Orders

CREATE OR ALTER PROCEDURE [dbo].[all_orders]
AS
BEGIN
    SELECT *
    FROM Orders
END
GO

CREATE OR ALTER PROCEDURE [dbo].[create_order](
    @userid INT,
    @totalamount DECIMAL(12,2) = 0
)
AS
BEGIN
    INSERT INTO Orders
        (UserId, TotalAmount)
    VALUES
        (@userid,@totalamount)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[update_order](
    @userid INT,
    @orderid INT,
    @quantity INT = 0,
    @unitprice DECIMAL(12,2) = 0,
    @totalamount DECIMAL(12,2) = 0
)
AS
BEGIN
    UPDATE Orders SET TotalAmount = @totalamount
    WHERE @orderid= OrderId and userId = @userid 
END
GO

CREATE OR ALTER PROCEDURE [dbo].[verify_order]
    @orderid INT
AS
BEGIN
    SELECT *
    FROM Orders
    WHERE OrderId = @orderid
END
GO

-- Order Details
CREATE OR ALTER PROCEDURE [dbo].[add_prodorder](
    @orderid INT,
    @productid INT,
    @unitprice DECIMAL(12,2),
    @quantity INT = 1
)
AS
BEGIN
    INSERT INTO Order_Product
        (OrderId, ProductId, UnitPrice, Quantity)
    VALUES
        (@orderid,@productid,@unitprice,@quantity)
END
GO

CREATE OR ALTER PROCEDURE [dbo].[all_prod_orders]
AS
BEGIN
    SELECT *
    FROM Order_Product
END
GO

CREATE OR ALTER PROCEDURE [dbo].[verify_prodOrder]
    @prodOrderId INT
AS
BEGIN
    SELECT *
    FROM Order_Product
    WHERE Order_Product_Id = @prodOrderId
END
GO


CREATE OR ALTER PROCEDURE [dbo].[order_details]
@userid INT,
@productid INT,
@quantity DECIMAL(12,2)

AS
DECLARE @orderID INT;
DECLARE @unitprice DECIMAL(12,2);
DECLARE @totalamount DECIMAL(12,2);
BEGIN

SET @unitprice = (SELECT price FROM Products WHERE productID = @productid)
SET @totalamount =(@unitprice * @quantity)

INSERT INTO Orders(UserId, TotalAmount) VALUES( @Userid, @totalamount);

SET @orderID = (select TOP 1 OrderId  from Orders ORDER BY OrderID DESC)

INSERT into Order_Product (OrderId,ProductID, UnitPrice, Quantity) VALUES(@orderID, @ProductId , @unitprice, @quantity)
END

GO

-- Pagination/Search/Filter 
CREATE OR ALTER PROCEDURE [dbo].[customer_pagination]
	@page			INT,
	@size			INT,
	@search			NVARCHAR(100) = '%'
	
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;

    set @search=  LOWER(@search)

    SELECT	* 
    FROM [dbo].[Users] 
    WHERE LOWER(fullName) LIKE '%'+@search+'%' 
    OR (email) LIKE  '%'+@search+'%' 
    ORDER BY fullName  ASC 
    OFFSET	 @skip  ROWS FETCH NEXT @size ROWS ONLY		
    
    SELECT 	
    	(SELECT COUNT(*) FROM [dbo].[Users] WHERE LOWER(fullName) LIKE '%'+ @search +'%' OR lower(email) LIKE '%'+ @search +'%') AS [Filtered],
    	(SELECT COUNT(*) FROM [dbo].[Users]) AS [Total] 
	
END
GO

CREATE OR ALTER PROCEDURE [dbo].[product_pagination]
	@page			INT = 1,
	@size			INT = 10,
	@search			NVARCHAR(100) = '%'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;

    set @search=  LOWER(@search)

    SELECT	* 
    FROM [dbo].[Products] 
    WHERE LOWER(productName) LIKE '%'+@search+'%' 
    OR ([description]) LIKE  '%'+@search+'%' 
    ORDER BY (select null)  ASC 
    OFFSET	 @skip  ROWS FETCH NEXT @size ROWS ONLY		
    
    SELECT 	
    	(SELECT COUNT(*) FROM [dbo].[Products] WHERE LOWER(productName) LIKE '%'+ @search +'%' OR ([description]) LIKE '%'+ @search +'%') AS [Filtered],
    	(SELECT COUNT(*) FROM [dbo].[Products]) AS [Total] 
	
END
GO


CREATE or ALTER PROCEDURE [dbo].[create_order](
    @userid INT,
    @id VARCHAR(100),
    @totalamount DECIMAL(12,2) = 0
)
AS
BEGIN
    INSERT INTO Orders
        (OrderId, UserId)
    VALUES
        (@id, @userid)
END
GO

create or alter  proc [dbo].[createorderdetails](
    @json NVARCHAR(1000)
)
AS
BEGIN

    INSERT INTO Order_Product
        (OrderId,ProductId,UnitPrice,Quantity)

    SELECT OrderID, ProductId, UnitPrice, Quantity
    FROM OPENJSON(@json)
    WITH(
        OrderId VARCHAR(100) '$.OrderID',
        ProductId INT '$.ProductID',
        UnitPrice DECIMAL(12, 2) '$.UnitPrice',
        Quantity INT '$.Quantity'
    ) AS jsonValues

END


select * from categories