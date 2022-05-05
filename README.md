# JAVA21-AJS-slutprojekt-christian-tallner

-Kvar att göra-
Vill använda fler av funktionerna vi lärt oss men har svårt att hitta användningsområdet

Startsida


Shopsida


Cartsida
Summera alla av liknande typ i carten
Lägg till en remove from cart --> Min VG funktion


-Buggar-
--Login/Logout text på knapp fungerar inte (längre?) --> clean

--Shopping cart renderas inte när jag lägger den i Login.jsx--> cond rend i main

--Warning: Each child in a list should have a unique "key" prop --> listorna fick en key=id

--Ta bort möjlighet för att få negativa antal --> min=0 i input

--Inte kunna lägga till antal 0 i carten --> condition i products för if (formData.nrOfItems > 0){

--Varför funkar köpknappen bara 1 ggn? sen måste man ändra antal innan den fungerar igen
-> måste ske en förändring i state för att react ska rendera

--När jag trycker på knappen check out i kundvagnen så vill jag nolla allt, men får det inte att fungera. Knappens on-click verkar inte anropa den funktionen eller renderar inte sidan igen.

--När jag loggar ut/loggar in töms inte kundvagnen.


-AddOns later-
Remove items from cart
Product information page when clicked
Categories
Search
Favorites
If item out of stock, send notice when in stock again
Price deals (user deales, bundles aso) 
Styling

