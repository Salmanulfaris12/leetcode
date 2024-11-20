/* Write your T-SQL query statement below */
select name from Employee e
join(select managerId from Employee 
group by managerId having 
count(managerId)>4) m on e.id=m.managerId  