# Urho Matti 3.0

Digital version of Urho Matti 3.0 songbook.
Urho Matti 3.0 is the newest songbook for Finnish engineering student organizations in Turku. The book was published in December 2019 along with the digital version.

A PWA App developed with React. The song and category data is fetched from a json file and no backend functionality is needed. The datamodel for the json file can be found below.

### Getting started

To run the project locally run the following commands in the root directory of the project:

- ```npm install```, this will install the required packages for the project.
- ```npm start```, this will start the project and open the app in your browser at address ```localhost:3000```.

### Layouts

Layouts folder contains the initial layouts for the app. These layouts were created while initially designing the app appearance and functionality.

### Workflows

The release.yml file sets up AWS actions so that when the repository is updated S3 gets builded.

### Lyrics Extractor

The lyrics_extractor.py is the script that was used for exporting song lyrics from the book print pdf.

## Datamodel:

db.json
```
songs: [
    {
        id: 102, (song number)
        title: "Finlandia-hymni", (song title)
        lyrics: [
            "/* Usein lauletaan vain säkeistöt 1, 4, 5 ja 7 */",
            ":,: Gaudeamus igitur, iuvenes dum sumus! :,:",
            ... (lyrics for the song, one element is one line)
        ]
        categoryId: "Juhlavat",
        melody: "Säv. Jean Sibelius, san. V.A. Koskenniemi" (melody for the song)
    },
    { 
        id: 103,
        ...
],
categories: [
    {
        id: 1, (first number of the songs)
        title: "Juhlavat", (category title)
        description: "Sisältää perinteitä kunnioittavia lauluja", (description for the category)
        image: "juhlavat" (filename of the image for the category)
    }
]
```
