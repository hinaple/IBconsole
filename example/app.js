const ibc = new IBConsole({
    size: 500, //the width of the console
    openKey: "F9" //press F9 to open the console
});

const LOGS = [
    "hello",
    "world",
    "IBConsole",
    "this is a log,\nand this is a new line.",
    "ping\nping\nping\nping\nping",
    "pong",
    "random log, random line.",
    "i love cats,\ndogs, and hamsters."
];

function pickRandomStr() {
    return LOGS[Math.floor(Math.random() * LOGS.length)]
}

document.getElementById("logger").addEventListener("click", () => {
    ibc.log(pickRandomStr());
});

document.getElementById("objLogger").addEventListener("click", () => {
    ibc.log({
        firstKey: "value",
        secondKey: 42,
        foo: [
            "bar", "bar2", "bar3"
        ],
        child: {
            child: "hello",
            foo: 42
        }
    });
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