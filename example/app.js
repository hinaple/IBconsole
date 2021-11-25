const ibc = new IBConsole({
    size: 500, //the width of the console
});

const LOGS = [
    "hello",
    "world",
    "IBConsole",
    "this is a log",
    "ping",
    "pong",
    "random log",
    "i love cats"
];

function pickRandomStr() {
    return LOGS[Math.floor(Math.random() * LOGS.length)]
}

document.getElementById("logger").addEventListener("click", () => {
    ibc.log(pickRandomStr());
});

document.getElementById("errorer").addEventListener("click", () => {
    ibc.error(pickRandomStr());
});

document.getElementById("realErr").addEventListener("click", () => {
    undefinedException;
});

ibc.log("hello, world!");
ibc.error(123);

undefinedVariable;