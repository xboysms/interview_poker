# interview_poker

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

// RUN
