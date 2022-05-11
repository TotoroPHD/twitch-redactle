# A Redactle like game for Twitch

Based on Redactle by John Turner https://twitter.com/RedactleGame

PUB FR: Retrouvez-moi un vendredi sur deux sur twitch pour des jeux / quiz sur https://twitch.tv/totorophd

# How to make it work :
Just download the code as ZIP and unzip somewhere on your computer. Keep config.js and game.html at the same place.
Edit config.js file and : 
- Put your channel name on var channel
- Put the answer to find with var answer
- Put the text to help find the answer in the var texte, between the two ticks (`)

Then add the game.html as a browser source in OBS.

Some stuff can be configured in the style.css file : 

Font, line space, font colors... 

You can set the game mode as : 
 - chat : Every solo word input in chat is computed
 - command : Use customCommand input to compute a word. 
 
# twitch-redactle

UPDATE 12/05/2022 :
- Separating answer and text
- light green background when occurences > 0
- you can now type the correct full answer

![image](https://user-images.githubusercontent.com/64203596/167640407-f63c72ba-c251-4712-b5b8-f7cd7ad7c4bb.png)
