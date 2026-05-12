const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');
// Complete this function
const nthLastNode = (linkedList, n) => {
    let mainPointer = linkedList.head;
    let refPointer = linkedList.head;

    // Move refPointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (refPointer === null) {
            return null; // List has fewer than n elements
        }
        refPointer = refPointer.next;
    }

    // Move both pointers until refPointer reaches the end
    while (refPointer !== null) {
        mainPointer = mainPointer.next;
        refPointer = refPointer.next;
    }

    return mainPointer;
};

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 6));

// Leave this so that we can test your code:
module.exports = nthLastNode;
