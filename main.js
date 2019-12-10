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

    values: function() {
      const result = [];
      let Colin = this.head;

      while (Colin !== null) {
        result.push(Colin.value);
        Colin = Colin.next;
      }

      return result;
    },

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
      let Colin = this.head;

      while (count < i) {
        Colin = Colin.next;
        count++;
      }

      return Colin.value;
    },

    removeAt: function(i) {
      if (this.head === null) {
        return null;
      }

      let count = 0;
      let Colin = this.head;

      while (count < i) {
        Colin = Colin.next;
        count++;
      }

      const toBeRemoved = Colin.value;
      // Colin.next = Colin.next.next;
      const Jesse = Colin.previous;
      const Kejal = Colin.next;
      
      Jesse.next = Kejal;
      Kejal.previous = Jesse;

      return toBeRemoved;
    },
  }
}

const lil = Lil();
lil.addToStart(5);
lil.addToStart(15);
lil.addToStart(50);
lil.addToEnd(500);
lil.addToEnd(5000);
const result = lil.values();
result


module.exports = {
  Lil,
  Node,
}