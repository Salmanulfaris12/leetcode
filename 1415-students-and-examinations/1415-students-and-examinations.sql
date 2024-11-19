/* Write your T-SQL query statement below */
select stud.student_id ,stud.student_name ,sub.subject_name ,count(exam.subject_name) as attended_exams 
from Students as stud cross join Subjects as sub left join Examinations as exam
on stud.student_id=exam.student_id and sub.subject_name=exam.subject_name  
group by stud.student_id,stud.student_name,sub.subject_name order by stud.student_id , sub.subject_name