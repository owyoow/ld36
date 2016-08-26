/*global Phaser LD36*/

LD36.Preload = function (game)
{
    
};

LD36.Preload.prototype = {
    
    preload: function ()
    {
        // load the images for the game
        
        // used for framerate display
        this.time.advancedTiming = true;
        
        // start the arcade physics engine
        this.physics.startSystem(Phaser.Physics.ARCADE);
    },
    
    create: function ()
    {
        this.state.start('game');
    }
};