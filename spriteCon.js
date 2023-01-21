class Wailmer {
	constructor(game) {

		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./jp2.png"), 0, 0, 120, 58, 7, .2);

		this.x = 300;
		this.y = 80;
		this.speed = 25;

	};

	update() {

		//this.x -= this.speed * this.game.clockTick;

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}