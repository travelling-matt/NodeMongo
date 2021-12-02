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

//update many records. in this case update an actors name e.g. Elliot Page
exports.updateName = async (collection, dataObj) => {
    try{
        await collection.updateMany({ 'actor': dataObj.oldName }, { $set: {'actor': dataObj.newName}});
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error){
        console.log(error);
    }
};

//update many records. with variable for key and value of key pair.
//e.g.
//node src/app.js "update variable" --currentKey 'actor' --currentValue "Andrea Garfield" --newKey 'actor' --newValue "Andrew Garfield"
exports.updateByVariable = async (collection, dataObj) => {
    try{
        const listAll = await collection.find().toArray();
        console.log("original list", listAll);
        await collection.updateMany({ [dataObj.currentKey]: dataObj.currentValue }, { $set: { [dataObj.newKey]: dataObj.newValue }});
        const listAllUpdated = await collection.find().toArray();
        console.log("updated list", listAllUpdated);
    } catch (error){
        console.log(error);
    }
};

// //find one and update or create document
// //errors, 'requires atomic operators'
// exports.findAndUpdate = async (collection, dataObj) => {
//     try{
//         await collection.findOneAndUpdate({ 'title': dataObj.title }, { $set 'title': dataObj.updateTitle, 'actor': dataObj.updateActor, 'genre': dataObj.updateGenre, 'rating': dataObj.updateRating }, { upsert: true });
//         const listAll = await collection.find().toArray();
//         console.log(listAll);
//     } catch (error){
//         console.log(error);
//     }
// };

//delete a record and output remaining records to console
exports.deleteMovie = async (collection, dataObj) => {
    try{
        await collection.deleteOne({'title': dataObj.title});
        console.log(`${dataObj.title} deleted`);
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error){
        console.log(error)
    }
};

//search all fields
exports.search = async (collection, dataObj) => {
    try{
        // const result = await collection.find({'title': dataObj}).toArray();
        // console.log(result)
        const result = await collection.find( { $or: [ { 'title': dataObj }, { 'actor': dataObj }, { 'genre': dataObj}, { 'rating': dataObj} ] } ).toArray();
        console.log(result);
    } catch (error){
        console.log(error)
    }
};



//from npm mongodb documentation
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);