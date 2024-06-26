function printPattern() {
    const rows = 3; // Number of rows for the upper half of the pattern

    // Print the upper half of the pattern
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern.trim());
    }

    // Print the lower half of the pattern
    for (let i = rows - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern.trim());
    }
}

printPattern();
