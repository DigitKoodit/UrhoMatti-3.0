# Urho Matti 3.0

Available on [urhomatti.fi](https://urhomatti.fi)

Digital version of Urho Matti 3.0 songbook.
Urho Matti 3.0 is the newest songbook for Finnish engineering student organizations in Turku. The book was published in December 2019 along with the digital version.

A PWA App developed with React. The application is also available [on Google Play](https://play.google.com/store/apps/details?id=fi.urhomatti.twa) The song and category data is fetched from a json file and no backend functionality is needed. The datamodel for the json file can be found below.

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

## Google Play release
In order to release a new version of the app you need to generate the application with [Bubblewrap CLI](https://github.com/GoogleChromeLabs/bubblewrap/tree/main/packages/cli).

- ```npm install -g @bubblewrap/cli```, this will install the Bubblewrap CLI from NPM
- ```bubblewrap init --manifest="https://urhomatti.fi/manifest.json"``` which will initialize the project and generate an Android project from the manifest.json file
- ```bubblewrap build``` to build the project and create APK/AAB package that can be tested and released to Google Play
- ```bubblewrap install``` to install the application on a connected device for debugging

The Google Play application is owned by [Petro Silenius](mailto:petro.silenius@gmail.com). Please contact him when you're planning to make a new relase.
