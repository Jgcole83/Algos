let hash = (key, size) => {
  let hashCode = 0;
  for (let i = 0; i < key.length; i++) {
    hashCode += hashCode + key.charCodeAt(i);
  }
  return hashCode % size;
}
class Hashtable {
  constructor(size = 0) {
    this.size = size;
    this.buckets = Array(this.size)
    for (let i = 0; i < this.buckets.length; i++) {
        this.buckets[i] = new Map();
        }  
    }
    insert(key, value) {
        let index = hash(key, this.size);
        this.buckets[index].set(key, value);
 
    }
        remove(key) {
        let index = hash(key, this.size);
        let deleted = this.buckets[index].get(key);
        this.buckets[index].delete(key);    
        return  deleted;      
    }

        search(key) {
        let index = hash(key, this.size);
        return this.buckets[index].get(key);
        }
};

const glossary = new Hashtable(3);
glossary.insert('semordnilap', 'Words that form different words when reversed');
console.log(glossary.search('semordnilap'));
console.log(glossary.remove('semordnilap'));
console.log(glossary.search('semordnilap'));
