//create Fns to add movie and list movie
//use 'exports.' so that you don't have to module exports at the end of the file. it is also neater and shorter.

//add a movie
exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    } catch (error){
        console.log(error)
    }
}

//.find gets collection, .toArray moves it into an array
exports.listMovies = async (collection) => {
    try{
        const listAll = await collection.find().toArray();
        console.log(listAll)
    } catch (error){
        console.log(error);
    }
};

//update a record
exports.updateMovie = async (collection, dataObj) => {
    try{
        await collection.updateOne({'title': dataObj.oldtitle},{ $set: {'title': dataObj.newtitle} })
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error){
        console.log(error);
    }
};

//delete a record
exports.deleteMovie = async (collection, dataObj) => {
    try{
        await collection.deleteOne({'title': dataObj.title})
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error){
        console.log(error)
    }
};

//from npm mongodb documentation
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);