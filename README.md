# Urho Matti v3.0

Digital version of Urho Matti v3.0 songbook

## Datamodel:

db.json
```
songs: [
    {
        id: 102, (song number)
        title: "Finlandia-hymni", (song title)
        category: "Juhlavat",
        melody: "Säv. Jean Sibelius, san. V.A. Koskenniemi" (melody for the song)
        lyrics: [
            "/* Usein lauletaan vain säkeistöt 1, 4, 5 ja 7 */",
            ":,: Gaudeamus igitur, iuvenes dum sumus! :,:",
            ... (lyrics for the song, one element is one line)
        ]
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
        image: "/images/example/juhlava.png" (url of the image for the category)
    }
]
```
