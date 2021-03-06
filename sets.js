// https://www.youtube.com/watch?v=t2CEgPsws3U
// ES6 Set

const set = new Set()
set.add(1)
set.add(2);
set.add(3)
set.add(1)
set.add("fcc")
//set.forEach(value=>console.log(value))
console.log("has 1?", set.has(1))
set.delete(1)
console.log(Array.from(set))
set.clear()
console.log(Array.from(set))


// Custom Set Implementation

class MySet{
  constructor(){
    this.collection = []
  }
  has(element){
    return this.collection.indexOf(element) != -1;
  }
  add(element){
    if(!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
  remove(element){
    if(this.has(element)) {
      let index = this.collection.indexOf(element)
      delete this.collection.splice(index, 1);
      return true;
    }
    return false;
  }
  
  values(){
    return this.collection;
  }
  
  size(){
    return this.collection.length
  }
  
  union(set2){
    let resultSet = new MySet();
    let thisValue = this.values();
    let set2Value = set2.values();
    thisValue.forEach(e=>resultSet.add(e))
    set2Value.forEach(e=>resultSet.add(e))
    return resultSet;
  }
  
  intersection(set2){
    let results = new MySet();
    this.values().forEach(e=>{
      if(set2.has(e)){
        results.add(e)
      }
    })
    return results;
  }
  difference(set2){
    let results = new MySet();
    this.values().forEach(e=>{
      if(!set2.has(e)){
        results.add(e)
      }
    })
    return results;
  }
}

const mSet = new MySet()

mSet.add(1)
mSet.add(1)
mSet.add(2)
mSet.add(3)
mSet.remove(1)

const mSet2 = new MySet()

mSet2.add("rocks")
mSet2.add("fcc")

console.log("union mSet and mSet2", mSet.union(mSet2).values())

const mSet3 = new MySet()

mSet3.add(2)
mSet3.add("fcc")

console.log("diff mSet2 and mSet3", mSet2.intersection(mSet3).values())
console.log("intersection mSet and mSet3", mSet.intersection(mSet3).values())
console.log("diff mSet and mSet3", mSet.difference(mSet3).values())
