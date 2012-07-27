KVAK TV
=======

A web-based, interactive documentary set in Kivalina, Alaska
------------------------------------------------------------

Dit is een ontwerp voor KVAK TV site, welke gerealiseerd zal worden door
Multimove webworks

Omdat een dynamische site als deze zich moeilijk laat ontwerpen in Photoshop
heb ik ervoor gekozen dit te doen in HTML/CSS/JavaScript

De site zal ontwikkeld worden met het Multimove CMS. Waarschijnlijk is een
deel van de code van het ontwerp bruikbaar: zie ook het commentaar in de broncode.

Technisch detail: de Google Maps integratie werkt niet als index.html lokaal geopend
wordt: de bestanden moeten op een server staan. Ze zijn iig te raadplegen op
http://fb.schr.fr/kvak/

Mochten er nog vragen zijn neem dan gerust contact met mij op.
Nu volgens details die van belang zijn voor de implementatie.

Het integreren van Google Maps in de navigatiestructuur
-------------------------------------------------------

De google Maps integratie speelt een belangrijke rol in het ontwerp.
Bezoekers kunnen over de kaart scrollen en vervolgens klikken op één
van de interface elementen om bv een video te zien of een about pagina

In de mockup wordt het nieuwe pagina element getoond (via JavaScript),
zonder dat de pagina herladen wordt, en blijft de kaart op zijn plek staan.

Deze aanpak heeft belangrijke nadelen: afzonderlijke pagina’s met eigen url’s
zijn beter voor Google en bieden de mogelijkheid te linken naar specifieke
video’s.

Ik neem ook aan het het Multi Move CMS gemaakt is om afzonderlijke pagina’s
te genereren.

Indien er echter voor wordt gekozen om de navigatie op te bouwen uit
individuele pagina’s, dan is het belangrijk een oplossing te vinden hoe de
staat van de Google Map bewaardt kan blijven tussen pagina’s in:
bijvoorbeeld door het zoomniveau en center-punt door te geven in een cookie
of als POST/GET parameter

Pagina’s
--------

Hier volgt een beschrijving van de verschillende pagina’s per pad.

Door op de desbetreffende knoppen in het ontwerp te klikken ziet u
de bijbehorende visuele voorstelling.

/

home pagina (Het KVAK logotype vormt een link hierheen)
alle video-thumbnails worden geplot op de kaart
als de site meer gebruikt wordt zullen video’s overlappen:
het is de bedoeling dat de nieuwste video’s dan bovenaan komen

/channel/isolation
/channel/being-young
/channel/tradition
/channel/relocation

Bij het upladen kan voor een specifiek channel gekozen worden
om de video mee te categoriseren. Door de link van de channel te kiezen
(linksboven onder het logotype) worden op de kaart alleen de films
getoond die bij deze channel horen.

tevens verander de ui van kleur

/video/videoid

Een individuele video. Hier komt de bezoeker terecht na op een thumbnail
geklikt te hebben. 

Het heeft het karakter van een popup over de kaart waar
gekozen kan worden voor full-screen en doorgeklikt kan worden naar de volgende
en vorige video in de channel.

/about

Een simpel scherm met introductie van het project.

/login

Login mogelijkheid voor de gebruikers
(gezien het beperkte aantal gebruikers is het goed als die in de backend aangemaakt kunnen worden,
er hoeft geen speciale interface om je registreren te komen)

/upload

De gebruikers, de plaatselijke jongeren, kunnen hier hun film uploaden.
Via een marker kunnen ze een geolocatie opgeven.

Creators en Actors voegen nieuwe personages toe aan de database:
op dit moment wordt met deze metadata nog niets gedaan behalve dat deze weergegeven
wordt bij de film, maar op termijn kunnen hier ook views bij komen.
Het zou mooi zijn als bij het opgegeven van namen er een type-ahead functie komt
die eerder opgegeven namen suggereert.

Bij When geef je een datum toe via een date picker

Idealiter kan de gebruiker de upload beginnen en tegelijkertijd de metadata invullen
(cf bv Vimeo).
