function getRandomNumber(): number {
    return Math.floor(Math.random() * 50000) + 1;
  }
  
  export const arrIncludesClassic = (arr: number[], number: number): boolean => {
    return arr.includes(number);
  };
    
  export  const searchLog = (arr: number[], target: number): boolean => {
    if (arr.length < 1) {
      return false
    }
  
    if (arr.length===1 && arr[0]===target){
      return true
    }
    const mid = Math.floor(arr.length / 2)
  
    if (arr[mid] === target) return true
  
    const newArr = arr[mid] < target 
      ? arr.slice(mid) 
      : arr.slice(0, mid)
    
    return searchLog(newArr, target) 
  }
  
  class Node {
    index: number
    value: number
    next: Node | null
  
    
    constructor(index: number, value: number) {
      this.index = index
      this.value = value
      this.next = null
    }
  }
  
  
  class LinkedList{
    head: Node | null
  
    constructor() {
      this.head = null
    }
  
    addNode(index: number, data: number) {
      const newNode = new Node(index, data);
  
      if (this.head) newNode.next = this.head;
  
      this.head = newNode;
    }
  
    find(value: number): number | boolean {
      let currentNode = this.head;
  
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return currentNode.index;
        }
  
        currentNode = currentNode.next;
      }
  
      return false;
    }
  }
  
  const listUnsorted = new LinkedList();
  const listSorted = new LinkedList();
  const arrUnsorted: number[] = [];
  
  for (let i = 0; i < 50000; i++) {
    listUnsorted.addNode(i,getRandomNumber());
    
    arrUnsorted.push(getRandomNumber());
  }
  
  const arrSorted = [...arrUnsorted].sort((a, b) => a - b)
  
  export { listUnsorted, arrUnsorted, arrSorted }
  
  
  const valuesOflist: number[] = []
  
  
  const printValuesList = (head: Node | null) => {
    let current = head
    while(current !== null){
      valuesOflist.push(current.value)
      current = current.next
    }
  }
  printValuesList(listUnsorted.head)
  const sortedValues = valuesOflist.sort((a, b) => a - b);
  
  for (let i = 0; i < 50000; i++){
    listSorted.addNode(i,sortedValues[i])
  }
  