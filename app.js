
TINT = 0x0000ff
TIME = 3000
RADIUS = 90
SIZE = 110
WIDTH = 700
HEIGHT = 400

var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game', { create: create })

function create() {
	game.stage.backgroundColor = TINT
	game.stage.disableVisibilityChange = true

	circle = game.add.graphics(0, 0)
	circle.beginFill(0xFFFFFF)
	circle.drawCircle(RADIUS + 16, (HEIGHT / 2), RADIUS)

	rect = game.add.graphics(0, 0)
	rect.beginFill(TINT)
	rect.drawRect((WIDTH / 2) - (SIZE / 2), (HEIGHT / 2) - (SIZE / 2), SIZE, SIZE)

	game.add.tween(circle).to({ x: WIDTH - RADIUS * 2 - 32 }, TIME, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true).start()
}

