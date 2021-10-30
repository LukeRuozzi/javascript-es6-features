const url = 'https://mocki.io/v1/3a7db235-4903-47e0-8c98-bcdd40af45f6';

// model
/* [
	{
		"userId": 1,
		"firstName": "John",
		"lastName": "Doe"
	},
	{
		"userId": 2,
		"firstName": "Kia",
		"lastName": "Boolingbroke"
	},
	{
		"userId": 3,
		"firstName": "Michael",
		"lastName": "Moore"
	}
] */

// 1. var, let, const
let pippo = 1;
if (true) {
  let pippo = 2;
}
console.log('--->  1. var, let, const');
console.log(pippo);

// 2. fetch, promise
loadDataPromise = function load() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log('--->  2. fetch, promise');
      console.log('with promise: ', data);
    })
    .catch((err) => {
      console.log('fetch promise error: ', err);
    });
};
loadDataPromise();

// 3. fetch, await, async
loadDataAsync = async function load() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log('--->  3. fetch, await, async');
    console.log('with promise await: ', data);
  } catch (err) {
    console.log('fetch promise await error: ', err);
  }
};
loadDataAsync();

// 4. arrow functions
sum = function (a, b) {
  return a + b;
};
console.log('--->  4. arrow functions');
console.log(sum(6, 2));

sum = (a, b) => a + b;

console.log(sum(6, 2));

loadDataPromise = () => {
  fetch(url).then((resp) =>
    resp.json().then((data) => console.log('with promise: ', data))
  );
};

// 5. filter
loadDataFilter = async function load() {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log('--->  5. filter');
  console.log(data.filter((u) => u.firstName.indexOf('i') !== -1));
};
loadDataFilter();

// 6. map
loadDataMap = async function load() {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log('--->  6. map');
  const newData = data.map((u) => ({
    name: u.firstName,
    length: u.firstName.length,
  }));
  console.log(newData);
};
loadDataMap();

// 7. sort
loadDataSort = async function load() {
  const resp = await fetch(url);
  const data = await resp.json();
  const newData = data.sort((a, b) => {
    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  console.log('--->  7. sort');
  console.log(newData);
};
loadDataSort();

// 8. reduce
loadDataSort = async function load() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log('--->  8. reduce');

  const oddSum = numbers.reduce((sum, current, currentIndex, nums) => {
    const currentValue = currentIndex % 2 === 0 ? current : 0;
    return sum + currentValue;
  }, 0);
  console.log(oddSum);
};
loadDataSort();

// 9. destructuring
const myObj = {
  id: 'A234DFDF',
  firstName: 'Mike',
  lastName: 'Kensington',
  age: 33,
  city: 'Miami',
  birth: {
    date: '1980/11/22',
    place: 'Milano',
  },
  cars: [
    {
      plate: '122',
      model: 'Ford Focus',
    },
    {
      plate: '456',
      model: 'Tesla Model Y',
    },
  ],
};
console.log('--->  9. destructuring');
console.log(myObj);
const { birth, firstName } = myObj;
console.log('name: ', firstName, '  ---> birth: ', birth);

// 10. spread operator
const numbers = [1, 2, 3];
console.log('--->  10. spread operator');
const newNumbers = [...numbers, 4];
console.log(newNumbers);
console.log(numbers);
const newMyObj = { ...myObj, foo: true };
console.log(newMyObj);
