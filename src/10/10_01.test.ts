import {
  addNewBooksToUser, addNewCompany,
  moveUserToOtherHouse, removeBook,
  updateBook, upDateCompany, upDateCompany2,
  upgradeUserLaptop,
  UserWithBooks,
  UserWithLaptopType, WithCompaniesType
} from "./10";


// 01. создайте в отдельном файле функцию, чтобы тесты прошли:
test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    }
  }
  const newLaptopUser = upgradeUserLaptop(user, "Macbook")

  expect(user.laptop.title).toBe("Lenovo");
  expect(newLaptopUser.laptop.title).toBe("Macbook");
  expect(user.laptop).not.toBe(newLaptopUser.laptop);
  expect(user).not.toBe(newLaptopUser);
  expect(user.address).toBe(newLaptopUser.address);
});

test("upgrade house", () => {
  let user: UserWithLaptopType & UserWithBooks = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    books: ['css', 'html', 'js', 'react']
  }
  const newLaptopUser = moveUserToOtherHouse(user, 32)

  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.books).toBe(newLaptopUser.books);
  expect(user).not.toBe(newLaptopUser);
  expect(user.address).not.toBe(newLaptopUser.address);
});
test("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBooks = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    books: ['css', 'html', 'js', 'react']
  }
  const newLaptopUser = addNewBooksToUser(user, ['ts', 'rest api'])

  expect(user).not.toBe(newLaptopUser);
  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.address).toBe(newLaptopUser.address);
  expect(user.books).not.toBe(newLaptopUser.books);
  expect(newLaptopUser.books[4]).toBe('ts');
  expect(newLaptopUser.books[5]).toBe('rest api');
  expect(user.books.length).toBe(4);
});

test("update books", () => {
  let user: UserWithLaptopType & UserWithBooks = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    books: ['css', 'html', 'js', 'react']
  }
  const newLaptopUser = updateBook(user, 'js','ts')

  expect(user).not.toBe(newLaptopUser);
  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.address).toBe(newLaptopUser.address);
  expect(user.books).not.toBe(newLaptopUser.books);
  expect(newLaptopUser.books[2]).toBe('ts');
  expect(user.books.length).toBe(4);
});

test("remove books", () => {
  let user: UserWithLaptopType & UserWithBooks = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    books: ['css', 'html', 'js', 'react']
  }
  const newLaptopUser = removeBook(user, 'js')

  expect(user).not.toBe(newLaptopUser);
  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.address).toBe(newLaptopUser.address);
  expect(user.books).not.toBe(newLaptopUser.books);
  expect(newLaptopUser.books[2]).toBe('react');
  expect(user.books.length).toBe(4);
});
test("add new company", () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}]
  }
  const newLaptopUser = addNewCompany(user, 'Google')

  expect(user).not.toBe(newLaptopUser);
  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.address).toBe(newLaptopUser.address);
  expect(newLaptopUser.companies.length).toBe(3);
  expect(newLaptopUser.companies[2].title).toBe('Google');
});

test("upDate company", () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },
    companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}]
  }
  const newLaptopUser = upDateCompany(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

  expect(user).not.toBe(newLaptopUser);
  expect(user.laptop).toBe(newLaptopUser.laptop);
  expect(user.address).toBe(newLaptopUser.address);
  expect(user.companies).not.toBe(newLaptopUser.companies);
  expect(newLaptopUser.companies.length).toBe(2);
  expect(newLaptopUser.companies[0].title).toBe('EPAM');
});

test("update company", () => {
  let user: UserWithLaptopType = {
    name: 'Katrin',
    hair: 50,
    address: {
      city: 'Minsk',
      house: 89
    },
    laptop: {
      title: 'Lenovo'
    },

  }
  let companies = {
    'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'It-incubator'}],
    'Kate': [{id: 1, title: 'fb'}]
  }
  const newCompanies = upDateCompany2(companies, 'Kate', 1, 'Incubator') as any

  expect(companies).not.toBe(newCompanies);
  expect(companies['Kate']).not.toBe(newCompanies['Kate']);
  expect(newCompanies['Kate'][0].title).toBe('Incubator');

});


