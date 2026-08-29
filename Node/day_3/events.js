const EVENTEMITTER = require("events")

const emitter = new EVENTEMITTER()

emitter.on("greet", (args) => {  // create an event listener for the "greet" event
    console.log(`Hello ${args.name}, you are ${args.age} years old!`)
})

emitter.emit("greet", { name: "John Doe", age: 30 })  // emit the "greet" event with name and age