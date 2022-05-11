# twitch-redactle

UPDATE 12/05/2022 :
- Separating answer and text
- light green background when occurences > 0
- you can now type the correct full answer


A Redactle like game for Twitch

Based on Redactle by John Turner https://twitter.com/RedactleGame

Just download the code as ZIP and unzip somewhere on your computer. Keep config.js and game.html at the same place.

Simply add the game.html file in OBS as a browser source. 

Some stuff can be configured in the style.css file : 

Font, line space, font colors... 

In config file, first put your channel name, then paste the text you want your chat to find between the two `

You can set the game mode as : 
 - chat : Every solo word input in chat is computed
 - command : Use customCommand input to compute a word. 

First line must be the answer.

![image](https://user-images.githubusercontent.com/64203596/167640407-f63c72ba-c251-4712-b5b8-f7cd7ad7c4bb.png)
