function mySet() {
  let collection = [];

  //this check for the presence of an element
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // return all the elements in the set
  this.values= function () {
    return collection;
  };
  //add element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    false;
  };
  // remove element from a set
  this.remove = function (element) {
    if (!this.has(element)) {
      collection.splice(collection.indexOf(element), 1);
      return true;
    }
    false;
  };
  // size of the collection
  this.size = function () {
    return collection.length;
  };
  //return union of the two sets
  this.union = function (otherSet) {
    //otherSet is an array
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    // this add all the elemets in first and other set together
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this return the the intersection of the two sets of intersection
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e); //recall that add method does not add duplicate
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this will test if the set is a subset
  this.subSet = function (otherSet) {
    let subSet = new mySet();
    let firstSet = this.values();
    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subSet(setB));
console.log(setA.union(setB).values());
console.log(setB.values());
console.log(setA.values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());

