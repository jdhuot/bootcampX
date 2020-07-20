

SELECT name, id, cohort_id, email
FROM students
WHERE phone IS NULL
AND email NOT LIKE '%gmail%';