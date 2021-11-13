import {StudentsType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentsType

beforeEach(() => {
  student = {
    id: 1,
    name: 'Kate',
    age: 30,
    isActive: false,
    address: {
      street: 'Lobanka',
      city: {
        country: 'Belarus',
        title: 'Minsk'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'React'
      }
    ]
  }
})

test.skip("new tech skill be added", () => {
 addSkill(student, 'JS');
 expect(student.technologies.length).toBe(3)
 expect(student.technologies[2].id).toBeDefined()
 expect(student.technologies[2].title).toBe('JS')
})

test.skip("student should be active", () => {

 makeStudentActive(student);

 expect(student.isActive).toBe(true)

})
test('does student lives in city?', () => {

  const result1 = doesStudentLiveIn(student, 'Minsk');
  const result2 = doesStudentLiveIn(student, 'Moscow');

  expect(result1).toBe(true)
  expect(result2).toBe(false)
})