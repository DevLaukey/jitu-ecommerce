SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[intlist_to_tbl] (@list  nvarchar(MAX),
                                @delim nvarchar(10))
   RETURNS @tbl TABLE (listpos int NOT NULL IDENTITY(1,1),
    n int NULL) AS
BEGIN
    DECLARE @pos       int = 1,
           @nextpos   int = 1,
           @valuelen  int,
           @delimlen  int = datalength(@delim) / 2

    WHILE @nextpos > 0
   BEGIN
        SELECT @nextpos = charindex(@delim COLLATE Czech_BIN2, @list, @pos)
        SELECT @valuelen = CASE WHEN @nextpos > 0 THEN @nextpos
                              ELSE len(@list) + 1
                         END - @pos
        INSERT @tbl
            (n)
        VALUES
            (convert(int, nullif(substring(@list, @pos, @valuelen), '')))
        SELECT @pos = @nextpos + @delimlen
    END
    RETURN
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[strlist_to_tbl] (@list  nvarchar(MAX),
                                @delim nvarchar(10))
   RETURNS @tbl TABLE (listpos int NOT NULL IDENTITY(1,1),
    str varchar(4000) NOT NULL,
    nstr nvarchar(4000) NOT NULL) AS
BEGIN
    DECLARE @pos       int = 1,
           @nextpos   int = 1,
           @valuelen  int,
           @nstr      nvarchar(4000),
           @delimlen  int = datalength(@delim) / 2

    WHILE @nextpos > 0
   BEGIN
        SELECT @nextpos = charindex(@delim COLLATE Czech_BIN2, @list, @pos)
        SELECT @valuelen = CASE WHEN @nextpos > 0 THEN @nextpos
                              ELSE len(@list) + 1
                         END - @pos
        SELECT @nstr = ltrim(rtrim(substring(@list, @pos, @valuelen)))
        INSERT @tbl
            (str, nstr)
        VALUES
            (@nstr, @nstr)
        SELECT @pos = @nextpos + @delimlen
    END
    RETURN
END
GO
