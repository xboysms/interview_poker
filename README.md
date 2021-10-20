# interview_poker

**// Problem 1**

use test
Select tree_table.id, tree_table.friendly_name, tree_table.scientific_name, tree_table.owner_id, user_table.name, (select count(*) from likes_table where tree_table.id = likes_table.tree_id) as TotalLikes from tree_table  
INNER JOIN user_table ON tree_table.owner_id = user_table.id AND user_table.email = 'adam@versett.com' 

**// Problem 2**
https://jsfiddle.net/xboysms/0m9Lgqr3/8/

// GENERAL
- Update Bootstrap in

// Generate SQL DB

USE [test]
GO
/****** Object:  Table [dbo].[likes_table]    Script Date: 10/20/2021 11:55:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[likes_table](
	[tree_id] [nchar](10) NULL,
	[user_id] [nchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tree_table]    Script Date: 10/20/2021 11:55:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tree_table](
	[id] [nchar](10) NULL,
	[friendly_name] [nvarchar](200) NULL,
	[scientific_name] [nvarchar](200) NULL,
	[owner_id] [nchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_table]    Script Date: 10/20/2021 11:55:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_table](
	[id] [nchar](10) NULL,
	[email] [nvarchar](200) NULL,
	[name] [nvarchar](200) NULL
) ON [PRIMARY]
GO

// Insert Data

**1. likes_table**
USE [test]
GO

INSERT INTO [dbo].[likes_table]
           ([tree_id]
           ,[user_id])
     VALUES
           (<tree_id, nchar(10),>
           ,<user_id, nchar(10),>)
GO

**2. tree_table**
USE [test]
GO

INSERT INTO [dbo].[tree_table]
           ([id]
           ,[friendly_name]
           ,[scientific_name]
           ,[owner_id])
     VALUES
           (<id, nchar(10),>
           ,<friendly_name, nvarchar(200),>
           ,<scientific_name, nvarchar(200),>
           ,<owner_id, nchar(10),>)
GO

**3. user_table**
USE [test]
GO

INSERT INTO [dbo].[user_table]
           ([id]
           ,[email]
           ,[name])
     VALUES
           (<id, nchar(10),>
           ,<email, nvarchar(200),>
           ,<name, nvarchar(200),>)
GO

