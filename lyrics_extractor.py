import textract
import re
import json

text = textract.process('urhomatti3-normikirja.pdf', method='pdfminer')

d = text.decode('utf-8')

category = ["Juhlavat", "Joulu", "<3", "Rock", "Tupsulaulut", "Sitsit", "<40 vol. %", ">40 vol. %", "Undefined", "Tuhmeliinit!", "Älä laula!"]

stop_words = ["säv", "san", "suom", "trad"]

def findAll():
    match = re.findall(r'[0-9]{3,4}[.].*?[\\\n$]', d, re.M)

    songs = []

    for m in match:
        songs.append({
            "id": re.search(r'[0-9]{3,4}', m).group(0),
            "title": m
        })
    #return json.dumps(str(songs))
    return findSongs(songs)

def findSongs(songs):
    print('findSongs')
    for i in range(0, len(songs)):
        if i != len(songs)-1:
            t1 = d.find(songs[i]["title"]) + len(songs[i]["title"])
            t2 = d.find(songs[i+1]["title"])
            songs[i]["lyrics"] = d[t1:t2].splitlines()
    
    return getCategory(songs)

def getCategory(songs):

    print("getCategory")

    for i in range(len(songs)):
        if len(songs[i]["id"]) > 3:
            songs[i]["categoryId"] = category[int(songs[i]["id"][:2])-1]
        else:
            songs[i]["categoryId"] = category[int(songs[i]["id"][0])-1]
    ## return songs
    return getMelody(songs)

def getMelody(songs):
    print("getMelody")
    for song in range(len(songs)):

        f1 = ""
        f2 = ""
        for i in range(2):
            if "lyrics" in songs[song]:
                if i == 0:
                    if re.search(r"[a-zA-Z]", songs[song]["lyrics"][0]):
                        f1 = songs[song]["lyrics"][0]
                elif i == 1:
                    if re.search(r"^$",songs[song]["lyrics"][0]):
                        f2 = songs[song]["lyrics"][1]
        
        if f1 and not f2:
            songs[song]["melody"] = songs[song]["lyrics"][0]
            del songs[song]["lyrics"][0]
            del songs[song]["lyrics"][0]
        else:
            songs[song]["melody"] = ""
    return replaceStopWords(songs)

def replaceStopWords(songs):
    for song in range(len(songs)):
        if "lyrics" in songs[song]:
            for i in range(len(songs[song]["lyrics"])):
                for stop in category:
                    if stop in songs[song]["lyrics"][i]:
                        songs[song]["lyrics"][i] =  ""
    
    return changeIds(songs)

def changeIds(songs):
    for i in range(len(songs)):
        songs[i]["id"] = int(songs[i]["id"])
        songs[i]["title"] = songs[i]["title"].split(". ", 1)[1]
    
    return {"songs": songs}


f = open('lyrics.json', 'w')

f.write(json.dumps(findAll()))

f.close()