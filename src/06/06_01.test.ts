import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType>= []

beforeEach( () => {
  people= [
    {name: "Andrew Ivanov", age: 33},
    {name: "Vanya Petrov", age: 30},
    {name: "Maks Pupkin", age: 25}
  ]
})

test('Should get of greeting messages', () => {
  const messages = createGreetingMessage(people);

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe("Hello Andrew. Welcome in IT-Incubator")
  expect(messages[1]).toBe("Hello Vanya. Welcome in IT-Incubator")
  expect(messages[2]).toBe("Hello Maks. Welcome in IT-Incubator")
})