// 9. Write an ES6 function that takes an array  of objects with name, role, and array of hours which represents the time the person spends on the server each day. Find the person who is the most active in the community and spends most of the time in it.

export const mostActivePerson = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  return arr.reduce((mostActive, person) => {
    //mostActive will act like accumulator,it will keep on storing all the values untill the end (mostActiveHours)
    //person will be for the current person,it will calculate the total hours for each person.
    const totalHours = person.hours.reduce((sum, hours) => {
      return sum + hours;
    }, 0);

    const mostActiveHours = mostActive.hours.reduce((sum, hours) => {
      return sum + hours;
    }, 0);

    return totalHours > mostActiveHours ? person : mostActive;
  });
};

const neogCommunity = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] },
];

console.log(mostActivePerson(neogCommunity));
// Output: { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] }
