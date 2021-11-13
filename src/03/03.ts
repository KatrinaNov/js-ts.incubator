import {StudentsType} from "../02/02";
import {CityType, GovernmentType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
}

export const addSkill = (student: StudentsType, skill: string) => {
  student.technologies
    .push({
      id: new Date().getTime(),
      title: skill
  })
}
export function makeStudentActive(st: StudentsType) {
  st.isActive = true
}
export function doesStudentLiveIn(st: StudentsType, city: string) {
  return st.address.city.title === city
}
export function addMoneyToBudget(building: GovernmentType, budget: number) {
  building.budget += budget;
}
export function repairHouse(houseType: HouseType) {
  houseType.repaired = true
}
export const toFireStaff = (building: GovernmentType, staffCountToFire: number) => {
  building.staffCount -= staffCountToFire
}
export const toHireStaff = (building: GovernmentType, staffCountToHire: number) => {
  building.staffCount += staffCountToHire
}
export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens! All of ${city.citizensNumber} people.`
}