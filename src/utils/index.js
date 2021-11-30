//create Fns to add movie and list movie
//use 'exports.' so that you don't have to module exports at the end of the file. it is also neater and shorter.
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