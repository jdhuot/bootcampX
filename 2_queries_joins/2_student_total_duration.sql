


SELECT students.name, SUM(assignment_submissions.duration) AS sum_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.name = 'Ibrahim Schimmel'
GROUP BY students.name;