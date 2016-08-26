/*global Phaser LD36*/

var LD36 = {
    
};

window.onload = function ()
{
    var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'gameContainer');

    game.state.add('boot', LD36.Boot);
    game.state.add('preload', LD36.Preload);
    game.state.add('game', LD36.Game);
    
    game.state.start('boot');
};