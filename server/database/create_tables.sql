CREATE TABLE Users
(
    userId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    fullName VARCHAR(100),
    email VARCHAR(100),
    telephone VARCHAR(20),
    profileUrl VARCHAR(255),
    [password] VARCHAR(255),
    [role] BIT DEFAULT 0,
    isActive BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0,
)
GO

CREATE TABLE Categories
(
    categoryId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    categoryName VARCHAR(100)
)
GO

CREATE TABLE Products
(
    productID INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    imageUrl VARCHAR(255),
    productName VARCHAR(100),
    price SMALLMONEY,
    [description] TEXT,
    inStock BIT DEFAULT 1 ,-- 1 as true and 0 as false
    categoryId INT NOT NULL FOREIGN KEY REFERENCES categories(categoryId)
)
GO

CREATE TABLE Orders
(
    OrderId INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    OrderDate DATETIME NOT NULL DEFAULT getdate(),
    UserId INT NOT NULL FOREIGN KEY REFERENCES Users(userId),
    TotalAmount decimal(12, 2) NULL DEFAULT 0,
)
GO


CREATE TABLE Order_Product
(
    Order_Product_Id INT IDENTITY(1,1) NOT NULL,
    OrderId INT NOT NULL FOREIGN KEY REFERENCES Orders(OrderId),
    ProductId INT NOT NULL FOREIGN KEY REFERENCES Products(productID),
    UnitPrice DECIMAL(12, 2) NOT NULL,
    Quantity INT NOT NULL DEFAULT 1,
)
GO