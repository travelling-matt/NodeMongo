//pull in connection file and modules from index.js
const connection = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie, search, updateName } = require("./utils");
//set up yargs 'npm i yargs' in parent folder and line below
const yargs = require ("yargs");
//instead of using "add" etc in code below
const command = process.argv[2];

const app = async () => {
    if (command === "add"){
        const newMovie = {
            title: yargs.argv.title,
            actor: yargs.argv.actor,
            genre: yargs.argv.genre,
            rating: yargs.argv.rating            
    };
        await connection(addMovie, newMovie);
    } else if (command === "add multi"){
        const newMovie1 = {
            title: yargs.argv.title,
            actor: yargs.argv.actor,
            genre: yargs.argv.genre,
            rating: yargs.argv.rating
        };
        const newMovie2 = {
            title: yargs.argv.title2,
            actor: yargs.argv.actor2,
            genre: yargs.argv.genre2,
            rating: yargs.argv.rating2
        };
        await connection(addMovie, newMovie1);
        await connection(addMovie, newMovie2);
    } else if (command === "update movie"){
        const currentMovie = {
            oldtitle: yargs.argv.oldtitle,
            newtitle: yargs.argv.newtitle
        };
        await connection(updateMovie, currentMovie);
    } else if (command === "update name"){
        const replaceName = {
            oldName: yargs.argv.oldName,
            newName: yargs.argv.newName,
        };
        await connection(updateName, replaceName);
    } else if (command === "list"){
        await connection(listMovies);
    } else if (command === "delete movie"){
        const newDelete = {
            title: yargs.argv.title,
        };
        await connection(deleteMovie, newDelete);
    } else if (command === "search"){
        const newSearch = yargs.argv.search;
        await connection(search, newSearch);
    } else {
        console.log("Incorrect Input")
    }
};

app();

//from npm mongodb documentation
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);

