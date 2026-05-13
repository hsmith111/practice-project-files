const Stack = require('../Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'First page';
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = action => {
    console.log(action);
    console.log(`Current Page: ${currentPage}`);
    console.log(`Previous Page: ${backPages.peek()}`);
    console.log(`Next Page: ${nextPages.peek()}`);
}

const newPage = page => {
    backPages.push(currentPage);
    currentPage = page;
    while (!nextPages.isEmpty()) {
        nextPages.pop();
    }
    showCurrentPage('New: ');
}

const backPage = () => {
    nextPages.push(currentPage);
    currentPage = backPages.pop();
    showCurrentPage('Back: ');
}

const nextPage = () => {
    backPages.push(currentPage);
    currentPage = nextPages.pop();
    showCurrentPage('Next: ');
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;
showCurrentPage('Default: ');
while (finish === false) {
    let instructions = baseInfo;
    if (!backPages.isEmpty()) {
        instructions = `${instructions}, ${backInfo}`;
        showBack = true;
    } else {
        showBack = false;
    }
    if (!nextPages.isEmpty()) {
        instructions = `${instructions}, ${nextInfo}`;
        showNext = true;
    } else {
        showNext = false;
    }
    instructions = `${instructions}, ${quitInfo}`
    console.log(instructions);
    // ------------------------------
    // User Interface Part 2
    // ------------------------------
    const answer = prompt(question);
    const lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q') {
        newPage(answer);
    } else if (lowerCaseAnswer === 'b') {
        if (showBack === true) {
            backPage();
        } else {
            console.log('Cannot show previous page. Stack is empty.');
        }
    } else if (lowerCaseAnswer === 'n') {
        if (showNext === true) {
            nextPage();
        } else {
            console.log('Cannot show next page. Stack is empty.');
        }
    } else if (lowerCaseAnswer === 'q') {
        finish = true;
    }
}