export type PropsType = {
  name: string
  lessons: Array<{title: string}>
  homework: number
}
let props : PropsType
beforeEach(() => {
  props= {
    name: 'Kate',
    lessons:   [{title: '1'}, {title: '2'}, {title: '3'}],
    homework: 3
  }


})

// 01. создайте в отдельном файле функцию, чтобы тесты прошли:
test("Destruction", () => {
  const {name, lessons, ...restProps} = props;
  const [ls1, ...restLessons] = props.lessons;

  expect(ls1.title).toBe('1');
  expect(restLessons.length).toBe(2);

  expect(name).toBe('Kate');
  expect(restProps.homework).toBe(3);
});



