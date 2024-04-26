// const automaticHashMap = new Map([
//   [1, "first"],
//   [2, "second"],
//   [3, "third"],
// ]);

// console.log(automaticHashMap.set(3,"another third"));
// console.log(automaticHashMap.get(1));
// console.log(automaticHashMap.has(2));
// console.log(automaticHashMap.delete(1));
// console.log(automaticHashMap.size);
// console.log(automaticHashMap.clear());
// console.log(automaticHashMap.keys());
// console.log(automaticHashMap.values());
// console.log(automaticHashMap.entries());

class HashMap {
  constructor() {
    this.stock = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const hashKey = this.hash(key);
    this.stock.push([hashKey, value]);
  }

  get(key) {
    const hashKey = this.hash(key);
    for (const element of this.stock) {
      if (element[0] === hashKey) {
        return element[1];
      }
    }
    return null;
  }
  has(key) {
    const hashKey = this.hash(key);
    for (const element of this.stock) {
      if (element[0] === hashKey) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    const hashKey = this.hash(key);
    for (let i = 0; i < this.stock.length; i++) {
      if (this.stock[i][0] === hashKey) {
        return this.stock.splice(i, 1);
      }
    }
    return null;
  }
  length() {
    return this.stock.length;
  }
  clear() {
    return (this.stock = []);
  }

  keys() {
    const keysArr = []
    for (const element of this.stock) {
      keysArr.push(element[0])
    }
    return keysArr
  }

  values() {
    const valuesArr = []
    for (const element of this.stock) {
      valuesArr.push(element[1])
    }
    return valuesArr
  }

  entries() {
    return this.stock
  }
}

const hashMap = new HashMap();
hashMap.set("Carlos", "carlasa");
hashMap.set("Santana", "santanos");
hashMap.set("Singer", "cingana");

console.log(hashMap.get("Santana"));
console.log(hashMap.has("Santana"));
// hashMap.remove("Santana");
// hashMap.clear()
console.log(hashMap.length());
console.log(hashMap);
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
