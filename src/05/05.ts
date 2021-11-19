export type ManType = {
  name: string
  age: number
}

const people: Array<ManType>= [
  {name: "Andrew Ivanov", age: 33},
  {name: "Vanya Petrov", age: 30},
  {name: "Maks Pupkin", age: 25}
]
const dimychTransformator = (man :ManType) => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  })

 let devs = people.map(dimychTransformator);
 let devs2 = people.map(man => ({
   stack: ["css", "html", "js", "tdd", "react"],
   firstName: man.name.split(" ")[0],
   lastName: man.name.split(" ")[1],
 }));

 const messages = people.map(man => `Hello ${man.name.split(" " )[0]}. Welcome in IT-Incubator`);


 export const createGreetingMessage = (people: Array<ManType>) =>  people.map(man => `Hello ${man.name.split(" " )[0]}. Welcome in IT-Incubator`);