CREATE FUNCTION getNthHighestSalary(@N INT)
RETURNS INT
AS
BEGIN
    DECLARE @Result INT;

    IF @N <= 0 -- Ensure only valid N values are processed
    BEGIN
        RETURN NULL;
    END

    SELECT @Result = (
        SELECT DISTINCT salary
        FROM Employee
        ORDER BY salary DESC
        OFFSET @N - 1 ROWS
        FETCH NEXT 1 ROW ONLY
    );

    RETURN @Result;
END;
