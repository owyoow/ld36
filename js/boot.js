/*global Phaser LD36*/

LD36.Boot = function (game)
{
    
};

LD36.Boot.prototype = {
    
    preload: function ()
    {
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
    },
    
    create: function ()
    {
        this.state.start('preload');
    }
};