namespace SpriteKind {
    export const background = SpriteKind.create()
    export const SelectablePlayer = SpriteKind.create()
    export const SelectablePlayer2 = SpriteKind.create()
    export const finish = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles15, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    game.setGameOverMessage(true, "PLayer 1 WINS!")
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles13, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles7, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    setSpeed(60, sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bilvalg == 1) {
        let Fart = 0
        game.showLongText("Team Ferrari", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level2`)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player))
        controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), Fart, Fart)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        setSpeed(100, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    } else {
        CharacterSelectionBox.setPosition(McLaren.x, McLaren.y)
        game.showLongText("Team Mclaren", DialogLayout.Bottom)
        sprites.destroy(Ferrari)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
            . 6 8 b b b 8 b b b b 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player2))
        tiles.setCurrentTilemap(tilemap`level2`)
        controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), fart_2, fart_2)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        setSpeed(100, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.SelectablePlayer)
    sprites.destroyAllSpritesOfKind(SpriteKind.background)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles0, function (sprite, location) {
    setSpeed(60, sprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    CharacterSelectionBox.setPosition(Ferrari.x, Ferrari.y)
    Bilvalg = 0 + 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles7, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles13, function (sprite, location) {
    setSpeed(40, sprite)
})
info.onCountdownEnd(function () {
    game.setGameOverScoringType(game.ScoringType.LowScore)
    console.log(info.highScore())
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    setSpeed(65, sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles15, function (sprite, location) {
    setSpeed(40, sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    CharacterSelectionBox.setPosition(McLaren.x, McLaren.y)
    Bilvalg = 0 - 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    setSpeed(100, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.chestOpen, function (sprite, location) {
    setSpeed(150, sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    setSpeed(50, sprite)
})
function setSpeed (num: number, mySprite: Sprite) {
    controller.moveSprite(mySprite, num, num)
}
scene.onOverlapTile(SpriteKind.Player2, sprites.builtin.forestTiles5, function (sprite, location) {
    setSpeed(40, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.hazardLava1, function (sprite, location) {
    setSpeed(50, sprite)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    if (Bilvalg == 1) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
            . 6 8 b b b 8 b b b b 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player2))
        game.showLongText("Team Mclaren", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
        setSpeed(100, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
        tiles.setCurrentTilemap(tilemap`level2`)
        controller.player2.moveSprite(McLaren, fart_2, fart_2)
    } else {
        game.showLongText("Team Ferrari", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level2`)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player2))
        controller.player2.moveSprite(Ferrari, fart_2, fart_2)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
        setSpeed(100, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    setSpeed(150, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.castle.tilePath5, function (sprite, location) {
    setSpeed(100, sprite)
})
scene.onOverlapTile(SpriteKind.Player2, sprites.dungeon.floorLight0, function (sprite, location) {
    game.setGameOverMessage(true, "Player 2 WINS!")
    game.setGameOverScoringType(game.ScoringType.LowScore)
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    setSpeed(65, sprite)
})
let fart_2 = 0
let CharacterSelectionBox: Sprite = null
let McLaren: Sprite = null
let Ferrari: Sprite = null
let Bilvalg = 0
let mySprite2 = 0
let mySprite = 0
Bilvalg = 0
Ferrari = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.SelectablePlayer)
Ferrari.right = 50
McLaren = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b c c f 8 8 f b c c f . 
    . . . . b b f . . . . b b f . . 
    `, SpriteKind.SelectablePlayer)
McLaren.left = 100
scene.setBackgroundColor(7)
let Text_sprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
    7 7 5 5 5 5 5 5 5 5 5 5 5 5 7 7 
    7 7 7 5 5 5 5 5 5 5 5 5 5 7 7 7 
    7 7 7 7 5 5 5 5 5 5 5 5 7 7 7 7 
    7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 7 
    7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 5 5 5 5 7 7 7 7 7 7 
    7 7 7 5 5 5 5 5 5 5 5 5 5 7 7 7 
    7 7 7 5 5 5 5 5 5 5 5 5 5 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.background)
Text_sprite.sayText("Vælg dit hold: Tryk på A")
Text_sprite.setPosition(75, 35)
CharacterSelectionBox = sprites.create(img`
    ffffffffffffffffffff
    f222222222222222222f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f2................2f
    f222222222222222222f
    ffffffffffffffffffff
    `, SpriteKind.background)
CharacterSelectionBox.setPosition(Ferrari.x, Ferrari.y)
McLaren.sayText("Mclaren")
Ferrari.sayText("Ferrari")
game.onUpdateInterval(100, function () {
    info.player1.changeScoreBy(1)
})
