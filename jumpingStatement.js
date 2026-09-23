// break    : breaks out of the loop completely
// continue : skips the current iteration and goes to the next number
// return   : exits the entire function immediately

function check(limit) {
    for (let i = 0; i <= 5; i++) {
        // Ternary operators to decide the control flow state
        const isReturn   = (i === 1) ? true : false; // Added to make return work inside the loop
        const isContinue = (i === 3) ? true : false;
        const isBreak    = (i === limit) ? true : false;

        // 1. The Return Statement (Exits function immediately)
        if (isReturn) {
            return "returned early at 1"; 
        }

        // 2. The Break Statement (Exits loop)
        if (isBreak) {
            break;
        }

        // 3. The Continue Statement (Skips printing)
        if (isContinue) {
            continue;
        }

        console.log(" " + i);
    }
    
    // This is only reached if the loop finishes or breaks without returning
    return "passed";
}

// Example usage:
console.log(check(4));
