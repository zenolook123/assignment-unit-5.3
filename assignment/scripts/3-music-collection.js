console.log('***** Music Collection *****')

let collection = []
// - Create a variable `collection` that starts as an empty array.


function addToCollection(title, artist, yearPublished){
    let newAddition = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
}
collection.push(newAddition)
console.log(newAddition)
}
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object


addToCollection('Innerspeaker', 'Tame Impala', '2010')
addToCollection('Show Me How (Single)', 'Men I Trust', '2018')
addToCollection('Musas(feat. Los Macorinos)', 'Natalia Lafourcade', '2017')
addToCollection('Superclean, Vol. 1 - EP', 'The Marias', '2017')
addToCollection('Seychelles', 'Masayoshi Takanaka', '1976')
addToCollection('SAVAGE MODE 2 [CHOPPED NOT SLOPPED]', '21 Savage & Metro Boomin', '2020')
addToCollection('Lonerism', 'Tame Impala', '2012')
console.log(collection)
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.  (idk if I did this right, I guess I just don't understand)
//   - After all are added, console.log the `collection` array.

function showCollection(array) {
    console.log("Number of albums:", array.length);
    for (let album of array) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

showCollection(collection)
// - Test the `showCollection` function.


function findByArtist(artist) {
    let matchedResult = [];
  
    for (let album of collection) {
      if (album.artist === artist) {
        matchedResult.push(album);
      }
    }
  
    return matchedResult;
  }
  
  console.log(findByArtist('Tame Impala'))
  console.log(findByArtist('Mac DeMarco'))
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!

