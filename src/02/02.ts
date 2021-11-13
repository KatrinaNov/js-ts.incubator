type LocalCityType = {
  country: string
  title: string
}
type AddressType = {
  street: string
  city: LocalCityType
}
type TechnologiesType = {
  id: number
  title: string
}
type StudentsType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechnologiesType>
}

export const student: StudentsType = {
  id: 1,
  name: 'Kate',
  age: 30,
  isActive: true,
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