   export function StartScreen(context, game){
    
    game.background.draw(context);

    let mousePossitionX;
    let mousePossitionY;


    context.fillStyle = '#1b8a04';
    context.fillRect(130, 200, 180, 70);

            //Draw text
        context.save();
        context.fillStyle = 'white';
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';

        context.textAlign = 'left';
        context.font = `25px Arial`
        context.fillText(
            `Wellcome to [INSERT GAME NAME]`,
            220, // x
            150 // Y
        );

        context.fillText(
            `Singleplayer`,
            150, // x
            240 // Y
        );

        context.restore(); //End of draw text
        
            window.addEventListener('mousedown', (event) =>{
                mousePossitionX = event.clientX;
                mousePossitionY = event.clientY;
                let screenZeroX = (window.innerWidth - 854)/2
                let screenZeroY = (window.innerHeight - 480)/2
                if(mousePossitionX -screenZeroX >= 130 && mousePossitionX -screenZeroX <= 310 && mousePossitionY -screenZeroY >= 200 && mousePossitionY - screenZeroY <= 270){
                    game.gameType = 1
                }
                
                
   })
        
  /* if (game.keys.includes('a')){
    game.gameType = 2
   }*/
    }   
 