export type UserType = {
  name: string
  hair: number
  address: AddressType
}
type AddressType = {
  city: string
  house: number
}
type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}
export type UserWithBooks = UserType & {
  books: Array<string>
}
export type WithCompaniesType = {
  companies: Array<{id: number, title: string}>
}

export function removeBook(user: UserWithLaptopType & UserWithBooks, book: string) {
  return {
    ...user,
    books: user.books.filter(b => b !== book)
  }
}
export function updateBook(user: UserWithLaptopType & UserWithBooks, oldBook: string, newBook: string) {
  return {
    ...user,
    books: user.books.map(b => b === oldBook ? newBook : b)
  }
}
export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooks, books: Array<string>) {
  return {
    ...user,
    books: user.books.concat(books)
  }
}
export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooks, house: number) {
  return {
    ...user,
    address: {
      ...user.address,
      house: house
    }
  }
}
export function upgradeUserLaptop(user: UserWithLaptopType, macbook: string) {
  return {
    ...user,
    laptop: {
      ...user.laptop,
      title: macbook
    }
  }
}
export function addNewCompany(user: UserWithLaptopType & WithCompaniesType, company: string) {
  return {
    ...user,
    companies: [...user.companies, {id: 3, title: company}]
  }
}
export function upDateCompany(user: WithCompaniesType, id: number, newCompany: string) {
  return {
    ...user,
    companies: user.companies.map(c => c.id === id ? {...c, title:newCompany} : c)
  }
}
export function upDateCompany2(companies: any,
                               userName: string,
                               id: number,
                               newtitle: string) {
  let companyCopy = {...companies}
  companyCopy[userName] = companyCopy[userName].map(c => c.id === id ? {...c, title: newtitle} : c)
  return companyCopy
}