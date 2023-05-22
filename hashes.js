const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['a','b','c']
}

const info = (cohort) => {
  return `${cohort.id} ${cohort.name} ${cohort.students.length} students in this cohort`
}

console.log(info(cohort))