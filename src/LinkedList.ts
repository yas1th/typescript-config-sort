import { Sorter } from "./sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  // Adding node to Linkedlist
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // return length of the linkedlist
  get length(): number {
    if (!this.head) return 0;
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // retrive the node from a particular position
  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    throw new Error("Index Out of bounds");
  }

  // compare the two nodes with respedct to data
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // swap the values of the nodes instead of the data
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHandData = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHandData;
  }

  // printing the linkedlist
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
