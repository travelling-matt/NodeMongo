//pull in connection file and modules from index.js
const connection = require("./db/connection");
const { addMovie, listMovies, updateMovie } = require("./utils");

//instead of using "add" etcin coding
const command = process.argv[2];

const app = async () => {
    if (command === "add"){
        const newMovie = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        };
        await connection(addMovie, newMovie);
    } else if (command === "add multi"){
        const newMovie1 = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        };
        const newMovie2 = {
            title: process.argv[6],
            actor: process.argv[7],
            rating: process.argv[8]
        };
        await connection(addMovie, newMovie1);
        await connection(addMovie, newMovie2);
    } else if (command === "update movie"){
        const currentMovie = {
            oldtitle: process.argv[3],
            newtitle: process.argv[4]
        };
        await connection(updateMovie, currentMovie);
    }     
    else if (command === "list"){
        await connection(listMovies);
    } else {
        console.log("Incorrect Input")
    }
};

app();

//from npm mongodb documentation
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);

