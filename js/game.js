/*global Phaser LD36*/

LD36.Game = function (game)
{
    
};

LD36.Game.prototype = {
    
    create: function ()
    {
        
    },
    
    update: function ()
    {
        
    },
    
    render: function ()
    {
         this.game.debug.text(this.time.fps || '--', 2, 14, '#00ff00');
    },
    
    shutdown: function ()
    {
       
    }
};