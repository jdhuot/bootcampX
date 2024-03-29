
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query('SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort \
FROM assistance_requests \
JOIN teachers ON teachers.id = assistance_requests.teacher_id \
JOIN students ON students.id = student_id \
JOIN cohorts ON cohorts.id = cohort_id \
WHERE cohorts.name = $1 \
ORDER BY teachers.name;',[process.argv[2]])
.then(res => {
  res.rows.forEach((teacher) => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
  });
})
.catch(err => console.error('query error', err.stack));