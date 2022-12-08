### Beskriv lite olika lösningar du gjort.

Jag valde att skapa en ny messageController istället för att lägga dom funktionerna i userController. För mig är det
enklare att ha dom i två filer för att inte ha för mycket kod i varje fil.

### Beskriv något som var besvärligt att få till.

Det har varit krångligt att få ihop de automatiska testerna i Backend. Jag hade mycket problem med att få det globala
id:t som jag gjorde att gå igenom. Men det visade dig att jag hade en felstavning och glömt en .send, efter det gick
testerna igenom.

Det har även vart svårt att lokalisera sig i filerna när man har vart fler och arbetat, hur man namnger filer,
funktioner osv. För mig har det varit otydligt att läsa.

På Frontend har jag haft problem med att css har läckt över i andra filer, även om jag använt mig av module. Men såg att
jag hade glömt att skriva en . framför tex .button.

### Beskriv om du fått byta lösning och varför i sådana fall.

Jag har inte behövt ändra några lösningar i projektet. Det jag har påbörjat har jag avslutat. Sen kn de va så att någon
annan har arbetat vidare med tex frontend. Men i backend har jag inte behövt ändra något som jag jobbat med.

### Beskriv hur du felsökt ditt program när det uppstått problem.

Jag har använt mig av Insomnia för att se att Backend gör det jag förväntar mig med tex CRUD. Även i consolen har jag
använt mig av Logger för att felsöka.

### Utvärdera din inlämning

* #### Vad gick bra

Projektet i sig har gått rätt bra. För min del så är jag nöjd med att jag känner mig säkrare på backend men även att jag
har fått till testerna på både Backend och Frontend. Jag har även skapat grunden i Client och det har varit en bra
repetition på React även om min css har varit lite ringrostig. Men jag har fått till några view som är responsiva vilket
jag är nöjd med då det va länge sen jag satt med det.

* #### Vad gick dåligt

Ingenting har gått dåligt. Men det har varit svårt med alla commit, pull och push. I början va det svårt att arbeta
flera eller att man stod i fel bransh. Det har varit många konflikter och kod som har försvunnit på vägen.

* #### Vad har du lärt dig

Jag har lärt mig att använda GitHub desktop mer och hur man använder sig av olika branshes när man arbetar i grupp. Har
även lärt mig att hur det fungerar på samma stt i cosolen men de oliak kommandona.

### Vilka möjligheter ser du med de kunskaper du fått under kursen.

Jag har fått en inblick i hur det är att jobba i ett projekt ihop med andra. Sen är det alltid bra att bygga ett
fullstack (MERN - MongoDB, Express, React.JS, Node.JS) projekt. Det ökar förståelsen för min programmering i framtiden.

### Motivera varför du valt en specifik lösning.

Precis som i förra inlämningen valde jag att skapa ett globalt id i backend testerna, istället för att hård koda
testerna. För att det ska vara enklare att se om testerna går igenom om tex databasen är tom från början.

### Lämna förslag på förbättringar av din kod.

Jag har följt koden som vi fått ut av Lars. Men jag behöver lära mig mer om TypeScript.

### Lämna exempel på lösningar du valde att inte implementera

Eftersom jag började skapa frontend så skapade jag en enkel design. Sen tog jag över att jobba med tester istället, så
Aram tog över frontend. Hade jag fortsatt hade jag nog valt att lägga till tex en ta bort knapp för att ta bort ett
meddelande.

### Lämna förslag på förbättringar av din UI/UX design eller reflektera över den.

Våran UX/UI känns helt okej, den ska rikta sig mer mot yngre åldrar och jag tycker att den passar bra. Sen kan man
såklart utveckla det med mer animationer och roligare css. Hade jag arbetat ensam hade jag tänkt på ett annat sätt. Men
nu ville vi skapa något enkelt.