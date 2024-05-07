# 29/04 - 24

Imported code from game-base

Trying to make a start screen.
I'm putting all the code that the start screen uses in the js file StartScrren since i realized i don't like changing 5 diffrent files to propperly change one thing.

# 06/05 - 24
Vill ha en knapp för single player som man trycker på med muspekaren.
Funktionen som jag använder för att få positionen på muspekaren tar hela bredden på skärmen inte bara min canvas.
Behövde göra en ohelig if-sats för att fixa problemet men det fungerar...
Det fungerar så länge canvas är så stor den kan bli eller 854px bred.

# 07-05-2024
Av att skriva in korrekta värden så fungerar knappen.

Local co-op:
Min ide när jag började detta var ändra värden för player controlls från absoluta till relativa. 
Därefter lägga till en till player.

Det fanns inga problem med att ändra player controlls och sedan lägga till en till player.
Bara det att andra spelaren inte gjorde någonting.
När jag la till kod för att rita den så kunde den gå och visas på skärmen.
Dock så kunde den inte skjuta, kolidera med fiender eller ta powerups.
När det var implimenterat så fungerade allt.

User interface för spelare 2
