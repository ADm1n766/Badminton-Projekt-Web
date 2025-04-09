#Projekt 
# Meine Anforderungen
- habe Java-Projekt
- soll im Browser vorhanden sein
- für Nutzer der HSZG
- 3 Felder
	- Doppel: 4 Spieler
	- Einzeln: 2 Spieler
- Nummerierung: Feld 1 bis Feld 3
- Buchstabenvergabe für Positionen auf Feldern (A-D)
	- eine Doppelseite A, B, andere Seite C, D
	- Einzel: eine Seite A, andere Seite B
- sollen auch Informationen zu Regeln, Spielfeld, Bild eines Spielfeldes, ... eingebaut werden
- Training von 19:00 bis 21:00
- Verbindung zum Server zwischen 18 Uhr und 22:30 mittwochs reicht aus
- Zeitbegrenzung pro Spiel
- Spieler sollen ausgelost werden
- können bis zu 20 Leute vor Ort sein und bei denen soll ausgelost werden, wer spielen darf, wer nicht (maximal 12 Leute auf 3 Feldern möglich)
- freiwillig angebbar, dass man eine Runde aussetzen darf, Time für eine Spielrunde läuft und dann kann man neu auslosen
- will Regeln, Spielfeld, vorstellen und wichtige Punkte, die man beachten kann, auf einer Regelseite
- auf Startseite, soll dann die Auslosung erfolgen, das Bild des Spielfeldes vorhanden sein, dafür brauche ich noch eins, was ich selbst erstellen will
	- Bild soll am besten als Vektorgrafik erstellt werden, Maße sollen an angegeben werden, sowie eine Beschreibung im Spielfeld und darunter anzeigbar sein und ausklappbar und wieder einklappbar

## Style
- da bin ich mir unschlüssig
- sollte im HSZG-grün (z. B. Hex-Code #006A52) sein

## Programmierung
- Wie soll die Implementierung realisiert werden?
- Hosting? Kosten des Hostings?
- soll beste Programmierungspraktiken einhalten

### Frontend
- Framework: ?
- Library:  React
- Design: ?
- UI-Komponenten: Material-UI
- - **Responsive Layout**: Flexbox/Grid für Anpassung an mobile Geräte.

### Backend
- Datenbank: 
	- **Option 1**: PostgreSQL (kostenlos, gut für Produktion).
	- **Option 2**: H2-Datenbank (für Prototypen oder kleine Nutzerzahlen).
- Java-Framework: Spring Boot (REST-API) für Skalierbarkeit und Integration mit Datenbanken.
- - **Authentifizierung**: JWT-Tokens für sichere Anmeldung der HSZG-Nutzer.

## Dokumentation
- Wie?

**Offizielle Doku vom Deutschen Badminton-Verband**
- Link dazu

**Offizielle Dokumentation zum internationalen Badminton-Verband**
- Link dazu

## Bild einbinden
(Bilder haben Copyrights, habe muss ich ein eigenes Bild erstellen
- Bild am besten in Vektorgrafik erstellen

## Hosting und Kosten
**Backend**:
- Heroku: Free Tier für Testphase (max. 550 Stunden/Monat) 13.
- AWS Elastic Beanstalk: Ab ~7 €/Monat (skalierbar).

**Frontend**: Statisches Hosting bei Netlify oder Vercel (kostenlos).

**Datenbank**: AWS RDS (PostgreSQL) ab ~10 €/Monat oder kostenlose Tier bei ElephantSQL.


# Nächste Schritte
## Prototyp erstellen:

- React-Frontend mit Mockdaten.
- Spring Boot-API für Auslosungslogik.

## SVG-Spielfeld designen: Tools wie Figma oder Inkscape.

## Testphase: Usability-Tests mit HSZG-Nutzern.


## Dependency Graphs einzeigen lassen

## Module-Bundler
- z.B. Webpack
- brauche ich?





---
Quellen: 
https://www.lok-zwickau.de/abteilungen/badminton/badmintonspielregeln
https://bonoboro.com/beitraege/badminton-regeln/
https://www.badminton.de/der-dbv/spielregeln/