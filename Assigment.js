class Stack {
    constructor(){;
        this.data = []
    }
    push(item) {
        this.data.push(item);
    }
    pop(){
        return this.data.pop();
    }
}

class Queue {
    constructor () {
        this.data = [];
    }
    enqueue (item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
}
let myStack = new Stack ();
let myQueue = new  Queue();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
let stackResult = [];
stackResult.push(myStack.pop())
stackResult.push(myStack.pop())
stackResult.push(myStack.pop())
stackResult.push(myStack.pop())
console.log(stackResult);

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

let queueResult = [];
queueResult.push(myQueue.dequeue());
queueResult.push(myQueue.dequeue());
queueResult.push(myQueue.dequeue());
queueResult.push(myQueue.dequeue());
console.log(queueResult);




