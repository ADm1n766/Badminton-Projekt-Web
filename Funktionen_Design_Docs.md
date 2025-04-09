# Hauptfunktionen


## Spielerverwaltung:

- Auslosung via Algorithmus: Zufällige Zuordnung von 20 Spielern zu 3 Feldern (max. 12 Spieler).
- Beispiel: Fisher-Yates-Shuffle für faire Verteilung
- Freiwilliges Aussetzen: Checkbox vor der Auslosung.

## Felddarstellung:
- Vektorgrafik (SVG): Interaktives Spielfeld mit Positionen A–D (Doppel) bzw. A–B (Einzel).
- Maße: Standard-Badmintonfeld (13,4 m × 6,1 m) mit Beschriftung
- Toggle-Funktion: Ein-/Ausklappen der Feldbeschreibung.

## Zeitmanagement:
- Training von 19:00–21:00 mit Serververbindung ab 18:00 (Mittwochs).
- Countdown pro Spiel (z. B. 21-Punkte-System, max. 30 Minuten/Spiel).

## Regelseite:
- Offizielle Regeln des Deutschen Badminton-Verbands (Link: DBV)
- Kurzzusammenfassung mit Schlagtechniken und Fehlerarten.

## Admin-Tools:
- Manuelle Anpassung der Auslosung bei Absagen.
- Statistiken zur Auslastung der Felder.


# Design & Benutzeroberfläche


## Startseite:

Hero-Bereich: SVG-Spielfeld mit Positionsbuttons (A–D).

Auslosungsbutton: Großes grünes CTA-Element ("Jetzt auslosen").

Info-Banner: Zeitanzeige für Training und Serverstatus.


## Regelseite:

Accordion-Menüs für übersichtliche Darstellung

Bilder von Schlagtechniken (z. B. Clear, Smash).


# Dokumentation

## a) Technische Dokumentation
- README.md:
    - Übersicht über Projektstruktur, Installation, Konfiguration, Deployment und Nutzung.

- API-Dokumentation:
  - Nutze Swagger für Deine REST‑API, um alle Endpunkte und deren Funktionsweise zu dokumentieren.

- In-Code-Dokumentation:
  - Verwende JavaDoc für Java-Code und JSDoc für JavaScript/TypeScript‑Code.

## b) Nicht‑technische Dokumentation
- Benutzerhandbuch:
  - Eine leicht verständliche Anleitung für Nicht‑Programmierer, in der die Bedienung der Website, die Regeln und wichtige Hinweise erläutert werden.

- Design‑Dokument:
  - Beschreibe die Designentscheidungen (Farben, Layout, Interaktionskonzepte). Visuelle Mockups können in Tools wie Figma erstellt und referenziert werden.

## API-Beschreibung (Swagger/OpenAPI).

Datenbank-Schema (ER-Diagramm).

Benutzerhandbuch:

Schritt-für-Schritt-Anleitung zur Auslosung und Feldbelegung.

FAQ (z. B. "Wie melde ich mich ab?").

Tools: MkDocs oder Docusaurus für leserfreundliche Formatierung


# Inspiration aus existierenden Projekten
- DoubleScore.java: Logik für Doppel-Spielmodus (GitHub-Repo als Referenz) 4.

- Sports Venue Apps: Dynamische Preisgestaltung und Buchungssysteme 13.

- Badminton4U: Live-Score-Anzeige und Spielerprofilideen 11.

# Systemanforderungen
Backend: Java 17+, Spring Boot 3.x.

Frontend: Node.js 18+, React 18+.

Datenbank: PostgreSQL 15+ oder H2.