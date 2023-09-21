// Ex. 1

function verticalText(text) {
    for (let panda = 0; panda < text.length; panda++) {
        console.log(text[panda])
    }
}

verticalText("Frontend");

// Ex. 2

function incrementText(text) {
    let result = "";
    for (let panda = 0; panda < text.length; panda++) {
        result += text[panda];
        console.log(result);
    }
}

incrementText("Backend");


// Ex. 3

function incrementTextBackwards(text) {
    let result = "";
    let initialIndice = text.length - 1;
    for (let panda = initialIndice; panda >= 0; panda--) {
        result = text[panda] + result;
        console.log(result);
    }
}

incrementTextBackwards("Fullstack");

// Ex. 4

function padEnd(text, numRepeat, textRepeat) {
    let result = text;
    for (let panda = 0; panda < numRepeat; panda++) {
        result += textRepeat;
    }
    return result;
}

console.log(padEnd("Kenzie", 5, "foo"));
console.log(padEnd("Fix", 8, "*"));


// Ex. 5

function subString(text, stratPosition, endPosition) {
    let result = "";
    for (let panda = 0; panda < text.length; panda++) {
        if ( panda > stratPosition && panda < endPosition) { 
            result += text[panda];
        }
    }
    return result;
}

console.log(padEnd("Mozilla", 0, 4));
console.log(padEnd("Chrome", 3, 5));


// Ex. 6

function stringRepeater(text, numRepeat) {
    let result = "";
    for (let panda = 0; panda < numRepeat; panda++) {
        result += text;
    }
    return result;
}

console.log(stringRepeater("Because I'm happy.", 6));


// Ex. 7

function stringCentralizer(text, numRepeat, textRepeat) {
    let result = ` ${text} `;
    for (let panda = 0; panda < numRepeat; panda++) {
        result = textRepeat + result + textRepeat;
    }
    return result;
}

console.log(stringCentralizer("JavaScript", 8, "="));