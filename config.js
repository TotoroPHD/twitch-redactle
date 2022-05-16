var channel = "TotoroPHD"

// Choose input mode, either directly from chat or with a command before.
var inputMode = "chat" // chat or command

// Choose custom input command : !customCommand input
var inputCommand = "word"

// Choose accent mode. If true, then accent must be correct. If false, accents won't matter. 
var accentMode = true

// The correct answer to be found
var answer = "San Francisco"

// Here are the words that will be displayed at the beginning 
var whitelist = ["est", "un", "du", "de", "des", "c", "à", "a", "et", "l", "le", "la", "les" ]

// Text to be displayed below the answer/title
var texte = `
The Beatles [ðə ˈbiːtəlz]3 est un quatuor musical britannique originaire de Liverpool, en Angleterre. Le noyau du groupe se forme avec les Quarrymen fondés par John Lennon en 1957, il adopte son nouveau nom en 1960 et, à partir de 1962, prend sa configuration définitive, composé de John Lennon, Paul McCartney, George Harrison et, le dernier à se joindre, Ringo Starr. Il est considéré comme le groupe le plus populaire et influent de l’histoire du rock. En dix ans d’existence et seulement sept ans d’enregistrement (de 1962 à 1969)a, les Beatles ont enregistré douze albums originaux et composé près de 200 chansons majoritairement écrites par le tandem Lennon/McCartney, dont le succès dans l’histoire de l’industrie discographique reste inégalé.

Après avoir débuté sous le signe du skiffle des années 1950, les Beatles ont rapidement fait évoluer leur style, se nourrissant de nombreuses sources pour inventer leur propre langage musical. Leurs expérimentations techniques et musicales, leur popularité mondiale et leur conscience politique grandissante au fil de leur carrière, ont étendu l’influence des Beatles au-delà de la musique, jusqu’aux révolutions sociales et culturelles de leur époque.

Au tout début des années 1960, Lennon, McCartney et Harrison deviennent populaires dans les clubs de Liverpool et de Hambourg en reprenant des standards du rock 'n' roll, mais Lennon et McCartney se sont également associés dès leur rencontre en 1957 pour écrire des chansons originales par dizaines, affinant progressivement leur technique.

En 1961, Brian Epstein devient leur manager, et les présente à des maisons de disques, sans succès dans un premier temps. L’année suivante, ils recrutent le batteur Richard Starkey, dit Ringo Starr, après avoir signé un contrat avec le label Parlophone dont le directeur artistique est George Martin, qui produit leur premier succès, Love Me Do, et occupera une place prépondérante à leurs côtés jusqu’à la fin du groupe. Ce titre lance leur carrière au Royaume-Uni à la fin 1962.

Après l’essor de la Beatlemania au Royaume-Uni et ensuite en Europe, les Beatles connaissent le succès en Amérique du Nord à partir de 1964, puis rapidement dans le monde entier. À partir de l’album Rubber Soul, en 1965, le groupe expérimente davantage et produit des albums aujourd'hui classiques à commencer par Revolver (1966), puis après avoir définitivement arrêté tournées et concerts pour entrer dans leur période appelée « les années studio », Sgt. Pepper's Lonely Hearts Club Band (1967), The Beatles (l’« Album blanc ») (1968) et Abbey Road (1969). Après leur séparation en 1970, les quatre membres poursuivent une carrière solo, et tous rencontrent le succès, particulièrement dans les années immédiates suivant la fin du groupe.

Paul McCartney et Ringo Starr sont les deux Beatles encore en vie, après l’assassinat de John Lennon en décembre 1980 et la mort de George Harrison en novembre 2001.

Les Beatles demeurent les artistes ayant vendu le plus grand nombre de disques au monde. Ce chiffre était estimé par EMI dans les années 1980 à plus d’un milliard de CD et vinyles vendus à travers la planète, et il a continué à augmenter durant les décennies suivantes, atteignant un chiffre supérieur à deux milliardsb,4.

Tenant une place de premier plan dans la « bande-son » des années 1960, les chansons des Beatles sont toujours jouées et reprises dans le monde entier, et leurs mélodies ont été adaptées à de nombreux genres musicaux, dont le jazz, la salsa, le reggae ou la musique classique.


Sommaire
1	Biographie
1.1	Formation et débuts sur scène (1957–1962)
1.2	La Beatlemania (1963–1966)
1.3	Années studio (1967–1968)
1.4	Séparation (1969–1970)
1.5	Post-séparation
2	Style musical et influences
2.1	Influences
2.2	Genres musicaux abordés
3	Héritage
3.1	Influence sur son époque
3.2	Reprises et adaptations
3.3	Historiographie
3.4	Dans la culture populaire
3.5	Tourisme, monuments et lieux dédiés
3.6	Autres hommages
3.7	Produits dérivés
3.8	Cursus universitaire
4	Records établis
4.1	Albums
4.2	Singles
4.3	Prestations
5	Membres
5.1	Les Fab Four
5.2	Anciens membres
5.3	Musiciens additionnels
5.4	Le « cinquième Beatle »
6	Discographie
6.1	Albums studio
6.2	EP avec chansons inédites
6.3	Singles britanniques
6.4	Divers
6.5	Compilations notables et albums post-séparation
7	Filmographie
7.1	Films officiels
7.2	Documentaires notables
7.3	Autres
8	Notes et références
8.1	Notes
8.2	Références
8.3	Sources
9	Liens externes
Biographie
Formation et débuts sur scène (1957–1962)
Des Quarrymen aux Beatles
Article détaillé : The Quarrymen.

« Mendips », la maison d’enfance de John Lennon au 251 Menlove Avenue, à Liverpool.
« Rien ne m’a vraiment touché jusqu’au jour où j'ai entendu Elvis. S’il n'y avait pas eu Elvis, il n'y aurait pas eu les Beatles5. »

— John Lennon

John Lennon est un adolescent de Liverpool élevé par sa tante « Mimi » — Mary Elizabeth Smith de son vrai nom6. Son père, Alfred Lennon (dit « Alf »), marin, a rapidement délaissé sa mère Julia Stanley ainsi que son enfant, John. Julia, qui n'a pas les moyens d’élever John seule, le confie à sa sœur Mimi. John joue de l’harmonica à partir de 19477 et dès qu’il découvre Elvis et le rock 'n' roll, John veut devenir musicien. Il apprend de sa mère les rudiments du banjo, grâce auxquels il transpose les accords sur une guitare empruntée d’un copain8. Il se voit offrir par sa mère sa première guitare en 19579.

Aussitôt, en mars 1957, alors âgé de seize ans, il forme un groupe de skiffle avec quelques amis de son lycée, le Quarry Bank High School. Initialement nommé The Blackjacks, le groupe change de nom après la découverte d’un autre groupe local se nommant déjà ainsi, et devient The Quarrymen10. Le 6 juillet 1957, Lennon et les Quarrymen donnent un concert pour la fête paroissiale de l’église St. Peter11. À la fin du concert, Ivan Vaughan, un ami commun, présente Paul McCartney à Lennon. McCartney prend alors une guitare et joue Twenty Flight Rock d’Eddie Cochran devant Lennon, un peu éméché, mais néanmoins très impressionné. Quelques jours plus tard, Pete Shotton, autre membre des Quarrymen, propose à Paul de se joindre au groupe. Celui-ci, qui n'a alors que quinze ans, accepte.

En février 1958, McCartney invite son ami George Harrison à un concert des Quarrymen. Celui-ci joue de la guitare et est déjà doté d’une solide expérience. Lennon lui fait passer une audition pour rejoindre le groupe, et est impressionné par ses talents, mais il estime qu’il est trop jeune ; il n'a alors que quatorze ans. Sur l’insistance de McCartney, George Harrison intègre le groupe comme guitariste soliste au mois de mars12. En janvier 1959, les amis de lycée de Lennon ont tous quitté le groupe pour se consacrer à leurs études au Liverpool College of Art13.

À trois – guitaristes et chanteurs – au sein d’une formation à géométrie variable qui s’appelle tour à tour « Japage 3 »14, « The Rainbows » et « Johnny and the Moondogs »15, avec ou sans batteur16, ils se produisent dans des clubs de Liverpool. Ils jouent notamment au Jaracanda, un coffee-shop dirigé par Allan Williams, qui sert d’agent au groupe débutant. Ils se produisent également au Casbah, dirigé par Mona Best, la mère de leur futur batteur Pete Best. D’autres portes s’ouvrent ensuite, dont le Cavern Jazz Club, alors que le rock 'n' roll et le Merseybeat, les styles des groupes de Liverpool, deviennent populaires dans la ville.


maison du 20 Forthlin Road, où vécut Paul McCartney avec son père et son frère.
Autodidactes, influencés par le rock 'n' roll et le blues noir américain, ils jouent les morceaux de rock du moment « à l’oreille », sans partitions. Toutefois, John Lennon et Paul McCartney s’associent déjà pour écrire ensemble des chansons, assis face à face avec leurs guitares dans une parfaite symétrie (McCartney étant gaucher), affinant peu à peu leur technique. Quelques-unes d’entre elles, comme One After 909, ressortiront sur les albums des Beatles des années plus tard11. Ils partagent également un drame qui les rapproche : Paul McCartney a perdu sa mère Mary, décédée des suites d’un cancer du sein en 1956, tandis que la mère de John, Julia, est tuée en étant happée par une voiture, conduite par un policier possiblement ivre en juillet 195815,17.

Un ami peintre de John Lennon, Stuart Sutcliffe, rejoint le groupe en janvier 1960. Alors qu’il a vendu un de ses tableaux, Lennon l’encourage à s’acheter une guitare basse. Sutcliffe suggère d’adopter le nom de « Beatals », en hommage au groupe accompagnant le rocker Buddy Holly, The Crickets (« les criquets »)18, ainsi qu’au film l'Équipée sauvage avec Marlon Brando, où il est question d’un gang du nom de « Beetles ». Ils utilisent ce nom jusqu’en mai, où ils adoptent celui de « Silver Beatles »c et, du 20 au 28 mai, accompagnent le chanteur pop de Liverpool Johnny Gentle pour une tournée en Écosse. Les membres du groupe se donnent pour l’occasion des noms de scène : Paul Ramond, Carl Harrison (en honneur de Carl Perkins), Stuart de Staël (pour Nicolas de Staël) et Johnny Lennon. Tommy Moore est recruté pour jouer de la batterie19. En août 1960, ils adoptent définitivement le mot-valise « Beatles », formé à partir de beat (« rythme ») et beetle (« scarabées »), avant d’honorer leur premier contrat dans un club de Hambourg20. Le 17 du même mois, cinq jours avant de partir pour l’Allemagne, ils auditionnent et engagent Pete Best comme batteur11.

Séjours à Hambourg
Articles détaillés : Les Beatles à Hambourg et The Beatles' First !.

L’Indra, un club de Hambourg où les Beatles jouèrent à leurs débuts.
Bruno Koschmider, propriétaire de l’Indra Club et du Kaiserkeller, deux clubs du quartier de Sankt Pauli à Hambourg, engage les Beatles sur les indications de leur agent Allan Williams21. Celui-ci conduit le groupe jusqu’à la cité hanséatique avec sa camionnette, pour honorer un contrat de trois mois et demi22. Pour satisfaire le public des clubs hambourgeois, les Beatles élargissent leur répertoire, donnent des concerts physiquement éprouvants, et, sauf pour Pete Best, recourent aux amphétamines pour rester éveillés. Les jeunes gens sont par ailleurs logés dans des conditions difficiles, voire quasiment insalubres.

En novembre 1960, lorsque Koschmider apprend que les Beatles se sont produits dans un club rival, le Top Ten Club (en), il met fin à leur contrat et dénonce Harrison aux autorités allemandes23 ; en effet, celui-ci a menti sur son âge, et se fait expulser en Angleterre à la fin novembre24. McCartney et Best, qui tentent de récupérer leurs effets dans leur ancienne chambre peu éclairée, enflamment un préservatif accroché à un mur pour y faire de la lumière. Furieux, Koschmider les accuse d’avoir tenté d’incendier le logis, ils passent la nuit en prison et le lendemain se font également expulser 25,26. Lennon reste en Allemagne jusqu’en décembre, en compagnie de Sutcliffe26. Les Beatles effectuent en tout cinq séjours à Hambourg : d’août à novembre 1960, de mars à juillet 1961, d’avril à mai 1962, puis en novembre et en décembre 196211. Entre leurs différents voyages en Allemagne, ils continuent à se produire à Liverpool et dans ses environs, se constituant un solide noyau de fans, mais restent inconnus au-delà du « Merseyside ». En décembre 1961, ils ne jouent que devant dix-huit personnes à Aldershot, dans la lointaine banlieue de Londres27.

Stuart Sutcliffe, bassiste du groupe depuis le début de l’année 1960, maîtrise mal son instrument : il se produit généralement dos au public afin que cela ne se remarque pas et « joue » même parfois sans que son instrument soit branché à un ampli27. Tombé amoureux de la photographe Astrid Kirchherr, qui prend les premières photos du groupe28, il décide de rester à Hambourg lorsque ses camarades regagnent l’Angleterre début juillet 196129. Après le départ de Sutcliffe, Paul McCartney, jusque-là guitariste au même titre que John Lennon et George Harrison, devient le bassiste du groupe, ses deux camarades n'étant pas enthousiastes pour tenir ce rôle. Sutcliffe meurt à 21 ans le 10 avril 1962 d’une congestion cérébrale11, trois jours avant que les Beatles ne posent à nouveau le pied sur le sol allemand pour un nouvel engagement de sept semaines au Star-Club.

D'autres groupes de Liverpool se produisent à Hambourg, notamment Rory Storm and The Hurricanes, dont le batteur se nomme Ringo Starr. Les Beatles envient sa notoriété et apprécient sa compagnie. Les deux groupes partagent l’affiche de très nombreuses fois à Liverpool27, et se retrouvent au Kaiserkeller du côté de la Reeperbahn pendant plus d’un mois en octobre et novembre 196015. Selon Paul McCartney, l’intérêt pour le groupe dans sa ville natale naît à leur retour de leur seconde résidence à Hambourg où ils ont acquis une solide expérience sur scène et élargi leur répertoire. Lors d’un concert, le 17 décembre 1961, au Litherland Town Hall de Liverpool, salle municipale qui servait deux jours par semaine de dancing aux jeunes30, au moment où le groupe se met à jouer, le plancher de danse se vide et l'assistance, abasourdie, se presse à la scène pour les écouter et les regarder31. C’est à cette époque qu’ils adoptent une coupe de cheveux caractéristique, la moptop, qui se différencie de la banane ou des cheveux des rockers, gominés et peignés en arrière. Astrid Kirchherr (sous l’influence des existentialistes ou des étudiants en Beaux-Arts de cette ville32) aurait été à l’origine de cette coupe de cheveux en bol lors de leur séjour à Hambourg. Elle aurait coiffé ainsi Sutcliffe, son amoureux. John Lennon et Paul McCartney l’ont ensuite adoptée, lors d’un court séjour à Paris en octobre 196133 effectuée par Jürgen Vollmer, un ami photographe de Hambourg, devenu l’assistant de William Klein34. Harrison suivra le pas mais Best, bien qu'il tente le coup, préfère garder sa coiffure gominée35.

C’est aussi à Hambourg qu’ils décrochent leur premier contrat d’enregistrement, chez Polydor, en tant qu’accompagnateurs du chanteur et guitariste Tony Sheridane,36. Le 45 tours My Bonnie / The Saints crédité à « Tony Sheridan and The Beat Brothers » est publié en Allemagne en octobre 1961 mais publié en Angleterre le 5 janvier 1962 cette fois au nom de « Tony Sheridan and the Beatles »37. Cry for a Shadow est la première chanson originale du groupe à être publiée lorsqu’elle apparaît, en janvier 1962, sur le super 45 tours français de Sheridan intitulé Mister Twist38. Les huit chansons tirées de ces séances seront compilées en 1964 sur le disque allemand The Beatles' First !39 et du même coup éditées en singles un peu partout dans le monde.


Square en hommage au groupe à Hambourg.
« J'ai grandi à Hambourg, pas à Liverpool », dira plus tard John Lennon. Évoquant cette période des débuts, il racontera aussi : « Quand les Beatles déprimaient et se disaient : « On n'ira jamais nulle part, on joue pour des cachets merdiques, on est dans des loges merdiques », je disais : « Où va-t-on, les potes ? », et eux : « Au sommet, Johnny ! », et moi : « C’est où ça ? », et eux : « Au plus top du plus pop ! » (to the toppermost of the poppermost), et moi « Exact ! » Et on se sentait mieux5. » Par ailleurs, nostalgique de cette époque « cuir », on entend aussi John Lennon expliquer dans le disque Anthology 1 : « Ce que nous avons fait de meilleur n'a jamais été enregistré. Nous étions des performers, nous jouions du pur rock (straight rock) dans les salles de danse (dance halls), à Liverpool et à Hambourg, et ce que nous produisions était fantastique. Il n'y avait personne pour nous égaler en Grande-Bretagne (There was nobody to touch us in Britain)40. »

En 2008, Hambourg a dédié une place de la ville en hommage au groupe41.
`