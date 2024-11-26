/* Write your T-SQL query statement below */
select name as Employee from Employee m  where 
salary >(select salary from Employee   where id=m.managerId )