-- Create Database
CREATE DATABASE BookStoreDB;
GO

-- Use Database
USE BookStoreDB;
GO

-- Create Books Table
CREATE TABLE [dbo].[Books](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Books] PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO

-- Insert Sample Data
INSERT INTO Books (Title, Description) VALUES ('The Alchemist', 'A novel by Paulo Coelho');
INSERT INTO Books (Title, Description) VALUES ('Rich Dad Poor Dad', 'A finance book by Robert Kiyosaki');
GO

