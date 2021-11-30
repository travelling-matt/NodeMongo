//pull in connection file and modules from index.js
const connection = require("./db/connection");
const { addMovie, listMovies } = require("./utils");

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
    } else if (command === "list"){
        await connection(listMovies);
    } else {
        console.log("Incorrect Input")
    }
};

app();