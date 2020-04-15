const Node = (value) => {
  return {
    value,
    next: null,
    previous: null,
  }
}


const Lil = () => {
  return {
    head: null,
    tail: null,

    addToStart: function(value) {
      const newNode = Node(value);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;

        return;
      }

      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    },

    addToEnd: function(value) {
      const newNode = Node(value);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;

        return;
      }

      newNode.previous = this.tail;
      this.tail.next = newNode;

      this.tail = newNode;
    },

    removeFromStart: function() {
      const toBeRemoved = this.head.value;
      this.head = this.head.next;
      this.head.previous = null;

      return toBeRemoved;
    },

    removeFromEnd: function() {
      const toBeRemoved = this.tail.value;
      const newTail = this.tail.previous; 
      newTail.next = null;
      this.tail = newTail;

      return toBeRemoved;
    },

    getAt: function(i) {
      if (this.head === null) {
        return null;
      }

      let count = 0;
      let current = this.head;

      while (count < i) {
        current = current.next;
        count++;
      }

      return current.value;
    },

    removeAt: function(i) {
      if (this.head === null) {
        return null;
      }

      let count = 0;
      let current = this.head;

      while (count < i) {
        current = current.next;
        count++;
      }

      const toBeRemoved = current.value;
      // current.next = current.next.next;
      const previous = current.previous;
      const next = current.next;
      
      previous.next = next;
      next.previous = previous;

      return toBeRemoved;
    },
  }
}


module.exports = {
  Lil,
  Node,
}
