export default function LinkedListADT() {
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
  
    let head = null;
    let length = 0;
  
    const insert = (index, value) => {
      if (index < 0 || index > length) return false;
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = head;
        head = newNode;
      } else {
        let prev = head;
        for (let i = 0; i < index - 1; i++) prev = prev.next;
        newNode.next = prev.next;
        prev.next = newNode;
      }
  
      length++;
      return true;
    };
  
    const remove = (index) => {
      if (index < 0 || index >= length || !head) return false;
  
      if (index === 0) {
        head = head.next;
      } else {
        let prev = head;
        for (let i = 0; i < index - 1; i++) prev = prev.next;
        prev.next = prev.next.next;
      }
  
      length--;
      return true;
    };
  
    const search = (value) => {
      let current = head;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.next;
        index++;
      }
      return -1;
    };
  
    const update = (index, newValue) => {
      if (index < 0 || index >= length) return false;
      let current = head;
      for (let i = 0; i < index; i++) current = current.next;
      current.value = newValue;
      return true;
    };
  
    const getArray = () => {
      const result = [];
      let current = head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    };
  
    return {
      insert,
      remove,
      update,
      search,
      getArray,
      getLength: () => length,
    };
  }
  