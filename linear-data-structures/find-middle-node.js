const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = linkedList => {
    fastPointer = linkedList.head;
    findTheMiddlePointer = linkedList.head;
    while (fastPointer !== null) {
        fastPointer = fastPointer.next;
        if (fastPointer !== null) {
            fastPointer = fastPointer.next;
            findTheMiddlePointer = findTheMiddlePointer.next;
        }
    }
    return findTheMiddlePointer;
};

// Test your function yourself:
console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;