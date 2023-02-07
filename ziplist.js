function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 2, 3, 4, 5];
const list2 = ['a', 'b', 'c', 'd', 'e'];
console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
