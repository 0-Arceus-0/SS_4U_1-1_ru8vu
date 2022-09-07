(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.musBtn = new lib.music_btn();
	this.musBtn.setTransform(1182.4,35.5,0.6,0.6,0,0,0,43.9,43.9);

	this.edulogo = new lib.edulogo();
	this.edulogo.setTransform(-1242.7,36.4,0.75,0.75);
	new cjs.ButtonHelper(this.edulogo, 0, 1, 2, false, new lib.edulogo(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.edulogo},{t:this.musBtn}]}).wait(3));

	// obj1
	this.enterBtn = new lib.按鈕進入();
	this.enterBtn.setTransform(639.1,598.1,1.696,1.696);
	new cjs.ButtonHelper(this.enterBtn, 0, 1, 2, false, new lib.按鈕進入(), 3);

	this.titileOp = new lib.titleop();
	this.titileOp.setTransform(647.5,150.8,1,1,0,0,0,465.4,108.1);

	this.instance = new lib.title();
	this.instance.setTransform(16.4,14,0.794,0.794);

	this.titleEnd = new lib.titleend();
	this.titleEnd.setTransform(649.7,139.7,1,1,0,0,0,401.6,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titileOp},{t:this.enterBtn}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.titleEnd}]},1).wait(1));

	// obj2
	this.failX = new lib.答錯X();
	this.failX.setTransform(659.8,434.7,1,1,0,0,0,56.4,56.4);

	this.qusMc = new lib.拆解圖();
	this.qusMc.setTransform(183.3,24);

	this.star = new lib.星星燈號組正式();
	this.star.setTransform(328.9,11.6,0.862,0.862,0,0,0,5.7,4);

	this.failEff = new lib.尷尬背景();
	this.failEff.setTransform(636.4,217.6,1.717,1.297,0,0,0,376.7,177.4);

	this.qusBg = new lib.發光();

	this.instance_1 = new lib._2D阿達兔03標題pose動畫跳躍();
	this.instance_1.setTransform(977.4,589.9,1.37,1.369,0,0,0.8,68.3,127.4);

	this.replayBtn = new lib.按鈕再挑戰一次();
	this.replayBtn.setTransform(639.1,612.1,1.696,1.696);
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.按鈕再挑戰一次(), 3);

	this.instance_2 = new lib.過關結語();
	this.instance_2.setTransform(491.4,390,1,1,0,0,0,235.6,142.8);

	this.instance_3 = new lib.彩花落不停("synched",0);
	this.instance_3.setTransform(14.6,-25.9,3.858,3.858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.qusBg},{t:this.failEff},{t:this.star},{t:this.qusMc},{t:this.failX}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.replayBtn},{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_4 = new lib.bg1();
	this.instance_4.setTransform(629.6,284.4,1,1,0,0,0,754,435.6);

	this.instance_5 = new lib.bg();

	this.instance_6 = new lib.bg_ending();
	this.instance_6.setTransform(0,0,1.25,0.937);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.3,-254.5,1508,974.6);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1367,769);


(lib.bg_ending = function() {
	this.initialize(img.bg_ending);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.課本攤開 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjaBvIgsgCIDijNQCQgqCbAjIAAABIgdDVIhhAJgAhIBBQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIAGAFIAGgBIgCgHIgEAAIgDAAgABLA4QABAFACADIBFAGIACgEIgBgGIgBACQgkgIgUAAQgKAAgGACgAgiA6QABAEgFAEQADAEASgCIAPgDIgDgGIgXgBIgGAAgAh9A9IAAADQABACALgBQALgBABgCQgBgCgHAAIgQABgAg4AgIAFAAQABAAgBgGQgBgGAAABIgBgBQgtACgDAEQAMAHAGgBIAbAAgACMANIAFALIATgBQALgBgBgDQgWgGgJAAIgDAAgAgXAVQADADAdgEQAfgDABgDQg+AEgCADgABCAPQABAKACgFIAsgDQALgBAEgDQgOgCgWAAQgWAAAAABIgDgCIAAAAQgBAAAAAFgAhEgOQABAEAEAGIAcgDIABgEIgfgDIgDAAgAAGgSQgEABgBACQABACANgBQANgBABgDIgKAAIgNAAgABagdQgTAFAAABQACAEAfgDQAGgBADgDIACgFIgCgDQgGABgRAEgACxggIABADQAFAFANgBQAKgBAEgEIgXgCIgGAAIgEAAgAB/giQABAEAFAEIAZgDIADgEIgZgBIgFgBIgEABgAgUgxQgJABgBACQADACAegEQAhgDACgCQguACgMACgABMhAQgFAAAAADQABACAOgBQAQgCABgDIgMAAIgPABgACEhHIgYACIgBAEQAZACAyABIADgEQgBgGgCABIgDgBIgJAAIgmABgAAAhQQgIABAAADQACACAfgEQAhgDABgDIg7AEgABPhhQgDAAgBAEQADACAMgBIACgDQgCgCgGAAIgFgBg");
	this.shape.setTransform(26.4,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339999").s().p("Am6AMIF+gPIAqABIA0gGIAIgDIATgCIF+gUIgEAbImXAMInYAcg");
	this.shape_1.setTransform(46.3,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006666").s().p("AmcALIFlAJIl+ASIgBgDIgJADgAGyglIAOAaIAAAEIl+ASg");
	this.shape_2.setTransform(45.8,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ak/BeQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAEgBADABIACAHIgGABgAikBaQgCgDgBgFQASgGA3AMIABgCIABAGIgDAEIhFgGgAkZBcQAFgEgCgEQACgBAcACIACAGIgPADIgLAAQgHAAgCgCgAlxBaIAAgDQAWgCADADQgCACgKABIgHABQgFAAgBgCgAA7BTIAggNQAXgIAPAFQgfAPgSACIgMAAQgHAAgCgBgACZA8QAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQAvgFADACQgCADgZACIgWACIgEgBgAlHA6QgFABgMgHQACgEAtgCIABABQABgBAAAGQABAGgBAAIgFAAIgSAAIgJAAgADoAuIgDgDQABgBABAAQABgBAAAAQABgBAAAAQAAAAAAgBIAUACQARABABABIgCADIgkAEIgBgEgAhlAnQAGgBAcAHQAAADgKABIgUABIgEgLgAkKAvQABgDBBgEQgCADgfADIgaACQgGAAgBgBgAivApQgBgFABAAIADACQAAgBAWAAQAXAAAOACQgFADgKABIgtADIgBACQgBAAAAgHgAESAuIgDgDQAIgEAAgEQACgCAaACQgBADgIAEQgHADgIABIgGAAIgDAAgAA3AsQABgDAMgDIALgFIAHAAQAIAAACACQgCADgFADQgGAEgHAAIgLABQgIAAgCgCgAEPArIAAAAgAFcAiQgOgDgcAAQALgLAWADIAcAHIACACQADADgKABIgOgCgAB/AbIgDgDQALgJAZgEQATgDAMABIASgEIAAgCIAFAAQAGABABACIgCAFQgDADgGAAQgcADgHgBIgIADQgRAGgOACIgGAAIgDAAgAk3AKQACgBAfAEIgBAEIgcADQgEgGAAgEgAjxAJQABgCAEgBQAGgBARABQgBADgNABIgHABQgGAAgBgCgAEOADQgXgCgCgBQACgBAdgCQAsgBAYgCQgCACgNAEQgOADgHABIgMAAIgagBgAirABQABgBASgDQARgEAGgBIACADIgCAFQgCABgHABIgWABQgKAAgBgCgAhAgDIgBgDQADgBAHABIAYACQgEAEgLAAIgGAAQgIAAgEgDgAhzgIQADgBAHABIAYABIgCAEIgaADQgFgEgBgEgABCgDQAjgQAHABIADACQgBAFgDADQgFAFgOACIgJABQgKAAgDgDgAkSgUQABgCAKgBQALgCAwgCQgCACggADIgfADIgFgBgACfgdQAHgCAegOQApgMBNAAIgwAKQgzAJgIACQgRAIgKABIgLAAQgIAAgCgCgABUgkQADgDAPgJQANgGACAAIACACQgBADgMAIIgOAIQgGAAgCgDgAirgjQAAgDAFAAQAGgBAVAAQgBADgPACIgJAAQgGAAgBgBgAiHgnIABgEIAYgCQAagCAVABIAEABQABgBABAGIgDAEQgygBgZgCgAElgwQACgEAhAAIAHAHQAAADgDACQghgDgGgFgAj8gyQAAgDAKgBIA8gEQgCADghADIgfADIgEgBgACbg/QAogPAAgCIAFABQAGAAABACQgHAMgUACIgQABQgHAAgCgBgAinhDQABgEADAAIAAgBIAFABQAGAAACACIgCADIgGAAQgHAAgCgBgABQhDIABgEQAZgCADADQgBADgNABIgJAAQgFAAgBgBgADPhNQAPgIASgDIgLANIgKAAQgKAAgCgCgADPhNIAAAAgAEihVIgEgFQARACAPADQABAFgGACIgEAAQgLAAgIgHgAChhTQAogMAOgDQALgBABAEQAAAGgQAEIgZADIgPABQgIAAgCgCg");
	this.shape_3.setTransform(50.7,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D0D0D0","#FFFFFF"],[0,0.49],-23.4,1.6,21,-3.2).s().p("AjAhRIAGgCQCIg5CdAMIBzDKIgzAHIltAyIgbABgAh4BAIggANQADADASgCQASgCAfgPQgGgCgHAAQgLAAgOAFgAg3AzQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAABQABACAZgDQAZgDACgCIgHgBQgMAAgfADgAAQAlIADADIABAFIAkgEIACgDIADACQACABAHgBQAIgBAHgDQAIgEABgCQgagCgCABQAAAFgIAEQgBgCgRgBIgUgBQAAAAAAAAQAAABgBAAQAAABgBAAQgBABgBAAgAiPAgQgMAEgBACQADAEASgCQAHgBAGgEQAFgDACgCQgCgCgIAAIgHgBIgLAFgACHAcIAOADQAKgBgDgDIgCgCIgcgIQgWgDgLAMIAIgBQAWAAAMADgAgzAFQgZAEgLAJIADADIAJAAQAOgCARgFIAIgDQAHABAcgDQAEgBADgDIACgFQgBAAgGAAIgDgBIAAABIgSADIgHAAQgKAAgOACgAA/gIQgdABgCACQACADAXABQAYABAOAAQAHgBAOgEQANgEACgCQgYACgsABgAiRgIQAFADARgBQAOgCAFgGQADgDABgEIgDgCIgBgBQgIAAghAQgAgPgyQgeANgHACQADAEASgCQAKgBARgHQAGgDAzgJIAwgKQhNABgnAMgAhtg1QgPAIgDAEQACACAGABIAOgJQAMgHABgEIgCgCQgCAAgNAHgABQg1QAGAFAhACQADgBAAgEIgHgHQghABgCAEgAg4hFQADADAWgCQAUgCAHgMQADACARgBIALgNQgSAEgNAIQgBgCgGgBIgFAAQAAABgoAPgAiChMIgBAEQACACANgCQANgBABgDQgBgCgJAAIgSACgABNhbQAKAJANgCQAGgBgBgGQgPgDgRgBIAEAEgAAChnQgMACgoAMQADAEAWgDIAZgDQAOgDAAgGQgBgEgGAAIgFABg");
	this.shape_4.setTransform(72,13.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,31.2);


(lib.雲狀標題背景 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDCA02").s().p("AAtVEQHAFVJ7nuIhQCCQGkEpETnEIhfhVQMhD4AJq1IA8BkQGFgUjHpsQCaFLgWCaQgCASgFARQgwCqkLBhQhTHhp3iqQlKIRnVlTQj4DXjnAAQj7AAjmj/gA2zUQQtqC8gUqaQpRkGB+npQBMj1CpgtQneLxOMEJIiMAAQBBJQK8iiIgZhpQHCICFomhQFmEhGzkeQlzGImRlEQiYC7i8AAQi5AAjcizgEAh0gMOICHAAQg/oPqjCQIAYBeQmynJlbFyQlakAmmD+QFpldGCEhQEilKGtFCQNLinAUJRQI8Dph6GzQhJDaikAnQHOqdtsjsgEgnOgJIQADgSAFgRQAwiqEKhhQBTnhJ3CqQFLoRHVFTQIGnCG4HqQm/lVp6HuIBQiCQmlkpkSHEIBeBVQshj4gJK1Ig8hkQmEAUDGJsQialLAWiag");
	this.shape.setTransform(286.1,132.4);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("AmjJZIAAnNQAAgbAaAAICfAAQAcAAAAAZIAABxQAAAfgcAAIgTAAQAHAFAAAIQAAAFgFAIQgIAMgQAPIARAOIATgbQAIgKAMAAQAHAAAHADQAKAEAAAKQAAAFgDADQgXAggoAnIAqgEIgEgIQgDgGAAgDQAAgGAGgFQAGgFAGAAQAHAAAGAHQAKARAGARIACAAIANgCIAegdQgUgTgZgUQgIgHgBgLQABgIAGgFQAFgGAIAAQANAAAJAEIACABQAJgKAHgLIAEgHIgCAAQgdAAABgdIAAhqQAAgiAaAAICcAAQAjAAAAAiIAAGfQAAAfgHALQgKAPgYAAQgqAAgQgJQgLgGgDgOQAAgQAHgKQAIgIAOAAIAJACQAKACAGAAQAHAAgBgKIAAkMIhrAAQAHAFAAAIQABAFgGAGQgIAMgRAOIAOAQQAMgPALgPQAHgLANAAQAGAAAJADQAKAFAAAJQgBAFgDAEQgYAggqAoIAtgEIgEgKIgDgKQAAgIAGgFQAGgDAFAAQAIAAAHAGQAMAcAJAbQADAGAAAGQAAAJgFAEQgEAFgKAAQgKAAgEgJIgFgNIh2ANQgBACgCACQgFAFgIAAQgLAAgFgJIgEgLIh6AQQgKgBgEgEQgEgFgBgIQABgHAEgGQAEgFAHAAIAPgCQARgPAOgQQgUgQgagPQgIgJgBgJQABgKAGgEQAGgGAHAAQAKAAAIACQAKgMAIgPIAFgHIhYAAIAAE/QAAATgaABQgZgBgBgTgAhjDuQABAEADAAIBpAAIAAgaIhtAAgAlvDyIBoAAIAAgaIhoAAgAhjCdIAAAZIBtAAIAAgZQABgEgHAAIhjAAQgEABAAADgAlvC2IBoAAIAAgdIhoAAgArdJrQh9AAgpggQgHgEgFAAQgEAAgCACQgRAOgVAMQgLAIgFAAQgLAAgEgEQgKgHgHgOQgCgFAAgEQABgLAMgHQAVgKAXgRQAFgEAAgEIAAhpQABgEgFAAIgmAAQgQgBgFgIQgGgFAAgQQAAgMAHgGQAHgIANAAIA8AAQAlAAAAAiIAACDQAGAPAUAHQAlALBPAAQBLAABBgBIBfgCQALAAAHAGQAHAHAAAMQAAARgHAHQgGAHgQABgADcJFQgQgKAAgRQgBgOAJgJQAGgIAKAAQASAAATAHQA9AXAnABQAngDABgjQAEgTAAgVQgFhLg0hPQgLgRAAgKQAAgKAKgJQAJgHAQAAQAOAAAKAQIAJAKQBvhQAHgaQAAgFgCAAIlkAAQgPAAgFgHQgHgFAAgRQAAgOAHgHQAFgGAPAAIGBAAQAXAAANAIQAPAJAAAPQAAAbgKARQglA+h4BQIAQApQAQAtACA1QgFBKgTAcQgYAegwAAQhjgDg5ghgAkmJcQgFgHAAgHQAAgKAEgGQAdgOAOgPIgpAAQgeAAgBggIAAghQABgTAVAAQAXAAAAATIAAAQQAAAJAJAAIAkAAQACgNAAgQQAAgKAFgHQAHgEAKgBQAMAAAEAFQAFAEABALIgBAgQgCAVgHAQQgLAggcAWQgNAOgXABQgQgBgFgHgAicJcQgFgFAAgMIAAhtQAAgLAFgFQAEgGAQAAQANAAAFAFQAGAFAAAMIAAAbIAdAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgbQAAgPAXAAQAXAAgBAPIAAAtQABAYgbAAIgzAAIAAAqQAAAMgFAFQgHAFgMAAQgOAAgGgFgAOVI+QgRgOAAgWQAAgVARgOQARgOAXAAQAWAAASAOQAQAOAAAVQAAAWgQAOQgTAPgVAAQgXAAgRgPgAtNIJIAAjJQAAgiAigBIAAgFIAAhzQgBgtAlAAIDJAAQAnAAAAAtIAABzIgBAFQAgACAAAdIAAC7QAAAVgJAIQgKAIgVAAIgcAAIgbgBQgPgCgKgHQgJgJABgMQAAgHACgFQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIhjAAQgaAAAAgbIAAhOQAAgaAaAAIBpAAQAbAAAAAaIAABOQAAAKgEAGIANAAIAWAAQAEAAABgFIAAiIQgBgEgEAAIjcAAQgFAAAAAEIAACzQAAAWgeAAQgaAAAAgWgArAGcIAAAgQAAAKAIAAIArAAQAJAAgBgKIAAggQABgJgJAAIgrAAQgIAAAAAJgAqJD1IAAAoIA6AAIAAgFIAAgoIg2AAQgEAAAAAFgArzC0IAABkIAAAFIA5AAIAAg9QAAgcAdAAIBOAAIAAgQQAAgHgKAAIiUAAQgGAAAAAHgAOgGeIgRjbQgFg8A0AAQAxAAgFA8IgTDbQgBAbgZAAQgcAAgBgbgAudFKQgGgCgGgGQgYgWgegWIgFgFQgJgHAAgLQAAgLAJgJQAIgJAMAAQAIAAAHAEQAoAbAcAZQAIANAAAHQAAAKgGAIQgHAKgNAEQgIAAgGgEgAuGDTIgNgJQgYgUgegUIgEgFQgKgHAAgKQAAgMAKgIQAIgJALAAQAIAAAHAEQAoAXAcAYQAIANAAAHQABAJgHAJQgGAKgPADQgHAAgFgCgArEhnQgIgJAAgLQACgMAMgGQAogKAwgTQAVgJAQgIIh0AAQgNAAgIgGQgGgFAAgPQAAgNAGgIQAIgFANAAIAnAAIAAjfQAAgoApAAIBqAAIAGgbIizAAQgMAAgHgGQgFgGAAgOQAAgNAFgHQAHgFAMAAIC/AAIAFgUQAIgSAXAAQAOAAAJAFQAJAFACANIgDAPICyAAQAOAAAFAFQAFAFABAPQAAALgEAGQgHAJgOAAIi+AAIgHAbICDAAQApAAAAAoIAADfIApAAQAPAAAGAFQAGAFAAAQQAAANgFAGQgHAHgPAAIhzAAQArAVA6AUQATAGAEADQAEAHAAAJQAAAKgIAIQgJAJgMAAQgQAAgNgFQhBgXg2gdIgTgNQgEgHAAgLIABgFIhYAAIAAAFQgBALgTALQgtAdguATQgUAIgXAHQgOAEgOABQgPAAgJgLgApRjvIEJAAIAAgZIkJAAgApRkwIEJAAIAAgXIkJAAgApRluIEJAAIAAgZIkJAAgApRm/IAAAQIEJAAIAAgQQAAgGgKAAIj4AAQgHAAAAAGgACkhhQgRgBgHgMQgIgJABgWIAAhwQAAgZAbAAQAbAAAAAZIAABfQgBAMALAAIApAAQAJAAADgLQADgJgBgVQAFgRAUAAQALAAAGAFIgJgZQgGgNAAgHQAAgKAKgGQAJgGALAAQAJAAAIAIQAXA1ARAyQAEALAAALQAAANgGAGQgIAIgMAAQgQAAgGgNQgIgagIgYQgCAYgIAVQgKAZgmACgAgMhqQgHgGABgOIAAhJQg+AQg1ADQgOAAgFgGQgHgHAAgQQAAgLAGgGQAIgJAOAAIAAktQgKAAgIgGQgGgFAAgPQAAgOAGgHQAIgGANAAICgAAQAPAAAGAGQAGAGAAAPQAAAMgFAGQgHAIgPAAIAAGaQAAAOgGAGQgGAHgOAAQgMAAgGgHgAhNjzQAegEAdgGIAAg+Ig7AAgAhNlsIA7AAIAAg/Ig7AAgAhNnbIA7AAIAAg9Ig7AAgAzGhqQgIgGAAgQIAAjgIgJAPQgJAKgPAAQgPAAgKgIQgJgHAAgNQABgIAHgLQBAhpAhh0QAGgQAOgDQAPAAAKAFQALAGAAAQQgBANgDAMQgLAngTAtIAAFeQAAAPgJAHQgGAHgQAAQgOAAgHgHgAMIhqQgUgIgCgVQAAgMAGgIQAFgJAIAAIBEAAQALAAAAgLIAAhnIiNAAQgQBegpA9QgLAWgWAAQgdgCAAgZQAAgLAJgNIAOgbQgLALgVAAIhkAAQguAAABgtIAAlDQgBgsAuAAIBkAAQAsAAAAAsIAAFDIgBAMQAag6AJg8QAHgwACg3IAAiDQAAgpAoAAICcAAQAoAAAAApIAAGRQAAAdgMAKQgMAMglAAQgzAAgSgFgAHrjrQAAANAOAAIA3AAQAOAAAAgNIAAh0IhTAAgALOlKICGAAIAAhIIiCAAQAAAmgEAigAHroCIAABuIBTAAIAAhuQAAgMgOAAIg3AAQgOAAAAAMgALSoYIAABRICCAAIAAhOQAAgHgFAAIh2AAQgGAAgBAEgAwHhoQgTgDgRgGQgOgIgBgQQAAgOAFgKQAIgHAIAAIAPAAQAkAGAMAAQAJAAAAgIIAAktIAAgEIg9AAIgCgBQgVAugQAWQgKAPgTAAQgOAAgKgJQgHgHgBgLQABgFAKgUQAuhEAdhRQADgRAOAAQAQAAAIAFQAMAGAAASQAAAMgKAYIgHAUIDCAAQAYAAAJAGQALAHABARQAAAJgFARQgJAogOAWQgGAKgTAAQgPAAgIgFQgGgHAAgKQAAgHAEgGQATgjAAgHIhUAAIAAAEIAAE/QAAAbgNALQgSAMgcABQgRAAgXgDgAA0hyQgIgGAAgNQAAgHAEgNQAPgyAMg7QACgFAEgDQAEgCAFgBQAMAAAIAFQAKAGgBALQAAANgDAUQgOBHgJAaQgKANgMAAQgKAAgJgGgASyiSQgRgOAAgWQAAgVARgOQARgNAWAAQAWAAATANQAQAOAAAVQAAAWgQAOQgTAPgWAAQgWAAgRgPgAs/i4QgdhPgmhJQgKgSAAgKQABgLAKgHQAKgGAMAAQAJAAAIAJQApBLAdBKQAJARACAQQAAAOgJAGQgIAIgNABQgRAAgHgQgAx2i/QgMgFABgRQAAgGAFgKQAZgkAOgkQAQgoAEgeQAEgWASAAQAMAAAHADQAOAGAAASQAAANgIAZQgeBigaAhQgKAKgRAAQgJAAgIgEgADijgQgEgDgCgGIgmgyQgCgCgBgDQAAgEACgGQACgEAEgCIhNAAQgsAAgBgtIAAi4QABgsAsAAIAqAAIAIgbQAGgQAWAAQAOAAAHAEQAKAFABALIgFAXIBXAAQAsAAAAAsIAAC4QAAAtgsAAIhQAAIACACQAMAIATAZQAMAOAAALQAAAKgHAFQgHAHgNAAQgJAAgFgCgAB3oGIAACaQAAALAMAAICXAAQALAAAAgLIAAiaQAAgLgLAAIiXAAQgMAAAAALgAS9kxIgRjcQgFg8AzAAQAzAAgHA8IgSDcQgBAagaAAQgbAAgBgagAC1lsQgFgIAAgHQAAgFADgEQAEgHAHgIIAMgNIgQgOQgSAUgLAKQgFAEgGAAQgKAAgGgGQgGgGAAgHQAAgEACgDIAJgNIASgUIgWgTQgHgFAAgMQAAgGAHgGQAHgGALAAQAEAAANAHIAOAJIAQgXQAEgHAGAAQAHAAAIAFQAHAFAAAJQAAAIgFAMIgKAPIASAPQAUgdAEgIQAFgHAHAAQAHAAAHAEQAIAFAAAJQAAAKgGAMIgUAfIAOAOQAOAKAAAKQAAAKgGAGQgHAIgOABQgGAAgKgJIgNgLIgYAaQgFAEgHABQgKAAgIgHg");
	this.shape_1.setTransform(304.4,137.1,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/VXIgSgTIgthIIgcAbIAAAAQlMEPlikeQksFzm9lrQtqC8gUqaQpRkGB+npQBMj1CpgtIBohqQg0ihANheQADgSAFgRQAwiqEKhhQBTnhJ3CqQFLoRHVFTQIGnCG4HqQgVgPgVgOIA8AvQDrhLD2C4QEilKGtFCQNLinAUJRQI8Dph6GzQguCJhTBDIAiBFIgMgnQCaFLgWCaQgCASgFARQgwCqkLBhQhTHhp3iqQlKIRnVlTQj4DXjnAAQjxAAjejsg");
	this.shape_2.setTransform(286.1,132.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-27.9,568.7,320.8);


(lib.答錯X = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AiVJOIAAybIEqAAIAASbg");
	this.shape.setTransform(56.4,56.4,1.076,1.076,0,-44.9,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AiVJOIAAybIEqAAIAASbg");
	this.shape_1.setTransform(56.4,56.4,1.076,1.076,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},4).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,112.7);


(lib.ansMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.txt = new cjs.Text("", "35px Microsoft JhengHei");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 44;
	this.txt.lineWidth = 290;
	this.txt.setTransform(149,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt}]}).wait(4));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FBC583").ss(8).p("AW2mEQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAMgp9AAAQhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxg");
	this.shape.setTransform(151.2,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A0+G2QhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAg");
	this.shape_1.setTransform(151.2,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("A0+G2QhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAg");
	this.shape_2.setTransform(151.2,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#84D7C7").ss(8).p("AW2mEQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAMgp9AAAQhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxg");
	this.shape_3.setTransform(151.2,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF3366").ss(8).p("AW2mEQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAMgp9AAAQhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxg");
	this.shape_4.setTransform(151.2,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEAFF").s().p("A0+G2QhFAAgygxQgygyAAhGIAAoZQAAhGAygyQAygxBFAAMAp9AAAQBGAAAxAxQAyAyAABGIAAIZQAABGgyAyQgxAxhGAAg");
	this.shape_5.setTransform(151.2,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.5,96.2);


(lib.彩花碎片 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AhZgUIBRgvIBhBLIh2A8g");
	this.shape.setTransform(-4.4,4.1,0.501,0.412,0,0,0,0,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,1.3,9,5.6);


(lib.問號 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB100").s().p("AhODkQAAg8A8AAQA7AAAAA8QAAA9g7AAQg8AAAAg9gAgiBuIAAgpQAAhCAggqIAWghQAYggAAg4QABhhhDAAQgyAAAAAiQABAIADAHIAGAFQAZATAAAXQAAA5g8gBQhBABAAhKQABgyAqgeQArgeBMAAQBAAAAyAmQAxAmAAA3QAAA/hdBNQgrAigOAVQgNAWAAAzg");
	this.shape.setTransform(16.3,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.7,57.9);


(lib.書筆 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AkNALIgFgjIIVAKIAQAng");
	this.shape.setTransform(27.7,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02D2D2").s().p("ABaBqQgVgGgwABQAGgBAyAAQAOAFAnAEIAJAAIAFgTQAEgLAFgFIABgBIABADIgHAQQgGAPgBAEIgIABQgUAAgXgGgAjRBrIgBgCIABgCQAAAAAMAEIgEABgAi5BlIAdgBQAHAAAJABQgCADgrACgAjWBlIAEgDIACgEIABgBIAAADQAAAEgDAEIgCAAIgBABIgBgEgAhcBnQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgCQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAiADIABABIgDAAgAjMBRQAAgDAIgLIAHgJIABgBIAAADQAAAFgOARgACbA/QAAgDACgDIABgFQgKgBAAgBQAAgBAOAAIABADIgHANIgBABIAAgDgAi5A1QgCgJAFgCQAGgDApACQgnADgEAEIgGAGgABFArQhWABhjgBICXgDIA6AAQA0ABgBAEIgDAAIgYABQgNgDgjAAgACthSIhpgCIgkgBIg3ADIg1gDIgBgEIAAgCIABAAQAEAAAMADIAMADIBQgEICFADIAXABIAYACIAAACIgDABIgkgCgACYhoIhegBQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgCQAAgDAPACQAzADBaABIgIABIg2gBgAgahnQgJgBgJgCIgRgDQAEgEAMADQAZAEATACIgDABIgWAAg");
	this.shape_1.setTransform(35,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#019897").s().p("Ak6CSIgBAAID2ktIGBAGIhhExgAB7BeQAXAGAUAAIAIgBQABgEAGgPIAHgQIgBgDIgBABQgFAFgEALIgFATIgJAAQgngEgNgFQgzAAgGABIANAAQAmAAASAFgAiwBbIgBACIABACIAIABIAEgBIgMgEIAAAAgAh7BYIgdABIAAAFQArgCACgDIgNgBIgDAAgAivBSIgCAEIgEADQAAABABABQAAABAAAAQAAABAAAAQAAAAABgBIACAAQADgEAAgEIAAgDIgBABgAgZBcIADAAIAAgBIgjgDQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABQAAABAAAAQAAAAABAAQAAAAAAgBgAicAuIgHAJQgIALAAADIACABQAOgRAAgFIAAgDIgBABgAC1AmQAAABAKABIgBAFQgCADAAADQAAAFABgDIAHgNIgBgDQgOAAAAABgAiVAeQgFACACAJIABABIAGgGQAEgEAngDIgegBQgOAAgDACgACWAiIAYgBIADAAQABgEg0gBIg6AAIiXADQBhABBYgBIAKAAQAaAAAMADgABlhgIBpACIAkACIADgBIAAgCIgYgCIgXgBIiFgDIhQAEIgMgDQgMgDgEAAIgBAAIAAACIABAEIAzADIA5gDgAC5h0IA2ABIAIgBQhagBgzgDQgPgCAAADQAAABAAABQAAABAAAAQAAAAAAAAQAAAAAAgBIAaAAIBEABgAgch5IARADQAJACAHABIAWAAIADgBQgTgCgXgEIgIgCQgFAAgDADg");
	this.shape_2.setTransform(31.7,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0CEIBfkxIAKA8IhZEfg");
	this.shape_3.setTransform(59,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABgKIAJAKIAEACIgbAJg");
	this.shape_4.setTransform(63.3,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgeAIIA4gUIACAEIABABIACAFIg5AOg");
	this.shape_5.setTransform(67.5,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AggAQIAdglIAEgEQAWAKAKATIg4AWg");
	this.shape_6.setTransform(66.8,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC99CC").s().p("AhgBSIgBgBIC0iKQABgXgfgEIAFgDQAeAAAHAUQADAHgBALIi/CJIgCgGg");
	this.shape_7.setTransform(80.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF99CC").s().p("AhKBPQgKgUgWgKIC3iDQAfAEgBAXIi0CKIgBgEg");
	this.shape_8.setTransform(77.7,14.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,35.5);


(lib.多條線 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006699").ss(5,2,1).p("AAAnQIAAOh");
	this.shape.setTransform(676.4,55.5,1.011,1.193);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006699").ss(5,2,1).p("AAAqiIAAVF");
	this.shape_1.setTransform(715.8,80.6,1.011,1.193);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006699").ss(5,2,1).p("AAArUIAAWp");
	this.shape_2.setTransform(697.6,86.5,1.011,1.193);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006699").ss(5,2,1).p("AAAq2IAAVt");
	this.shape_3.setTransform(647,83,1.011,1.193);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006699").ss(5,2,1).p("AAApSIAASl");
	this.shape_4.setTransform(623.8,71,1.011,1.193);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006699").ss(5,2,1).p("AAArPIAAWf");
	this.shape_5.setTransform(606.6,85.9,1.011,1.193);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#006699").ss(5,2,1).p("AAAoCIAAQF");
	this.shape_6.setTransform(583.3,61.5,1.011,1.193);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#006699").ss(5,2,1).p("AAArjIAAXH");
	this.shape_7.setTransform(556,88.3,1.011,1.193);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#006699").ss(5,2,1).p("AAAtWIAAat");
	this.shape_8.setTransform(537.8,102.1,1.011,1.193);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#006699").ss(5,2,1).p("AAAmtIAANb");
	this.shape_9.setTransform(512.6,51.4,1.011,1.193);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#006699").ss(5,2,1).p("AAAobIAAQ3");
	this.shape_10.setTransform(484.2,64.5,1.011,1.193);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#006699").ss(5,2,1).p("AAAqTIAAUn");
	this.shape_11.setTransform(458,78.8,1.011,1.193);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#006699").ss(5,2,1).p("AAAq7IAAV3");
	this.shape_12.setTransform(416.5,83.5,1.011,1.193);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#006699").ss(5,2,1).p("AAAtRIAAaj");
	this.shape_13.setTransform(395.3,101.4,1.011,1.193);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#006699").ss(5,2,1).p("AAAr3IAAXv");
	this.shape_14.setTransform(368,90.7,1.011,1.193);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#006699").ss(5,2,1).p("AAAnzIAAPn");
	this.shape_15.setTransform(338.7,59.7,1.011,1.193);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#006699").ss(5,2,1).p("AAAoWIAAQt");
	this.shape_16.setTransform(314.4,63.9,1.011,1.193);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#006699").ss(5,2,1).p("AAAnLIAAOX");
	this.shape_17.setTransform(266.9,54.9,1.011,1.193);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#006699").ss(5,2,1).p("AAAo5IAARz");
	this.shape_18.setTransform(232.5,68.1,1.011,1.193);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#006699").ss(5,2,1).p("AAAolIAARL");
	this.shape_19.setTransform(196.1,65.7,1.011,1.193);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#006699").ss(5,2,1).p("AAAqxIAAVj");
	this.shape_20.setTransform(167.8,82.4,1.011,1.193);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#006699").ss(5,2,1).p("AAArPIAAWf");
	this.shape_21.setTransform(148.6,86,1.011,1.193);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#006699").ss(5,2,1).p("AAApXIAASv");
	this.shape_22.setTransform(122.3,71.6,1.011,1.193);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#006699").ss(5,2,1).p("AAAsVIAAYr");
	this.shape_23.setTransform(100.1,94.3,1.011,1.193);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#006699").ss(5,2,1).p("AAAn4IAAPx");
	this.shape_24.setTransform(69.8,60.3,1.011,1.193);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#006699").ss(5,2,1).p("AAAm8IAAN5");
	this.shape_25.setTransform(45.5,53.1,1.011,1.193);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#006699").ss(5,2,1).p("AAAj+IAAH9");
	this.shape_26.setTransform(17.2,30.5,1.011,1.193);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#006699").ss(5,2,1).p("AAAm8IAAN5");
	this.shape_27.setTransform(0,53.2,1.011,1.193);

	// 圖層 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAnQIAAOh");
	this.shape_28.setTransform(678.4,58.5,1.011,1.193);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAqiIAAVF");
	this.shape_29.setTransform(717.8,83.6,1.011,1.193);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAArUIAAWp");
	this.shape_30.setTransform(699.6,89.5,1.011,1.193);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAq2IAAVt");
	this.shape_31.setTransform(649,86,1.011,1.193);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAApSIAASl");
	this.shape_32.setTransform(625.8,74,1.011,1.193);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAArPIAAWf");
	this.shape_33.setTransform(608.6,88.9,1.011,1.193);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAoCIAAQF");
	this.shape_34.setTransform(585.3,64.5,1.011,1.193);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAArjIAAXH");
	this.shape_35.setTransform(558,91.3,1.011,1.193);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAtWIAAat");
	this.shape_36.setTransform(539.8,105.1,1.011,1.193);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAmtIAANb");
	this.shape_37.setTransform(514.6,54.4,1.011,1.193);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAobIAAQ3");
	this.shape_38.setTransform(486.2,67.5,1.011,1.193);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAqTIAAUn");
	this.shape_39.setTransform(460,81.8,1.011,1.193);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAq7IAAV3");
	this.shape_40.setTransform(418.5,86.5,1.011,1.193);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAtRIAAaj");
	this.shape_41.setTransform(397.3,104.4,1.011,1.193);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAr3IAAXv");
	this.shape_42.setTransform(370,93.7,1.011,1.193);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAnzIAAPn");
	this.shape_43.setTransform(340.7,62.7,1.011,1.193);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAoWIAAQt");
	this.shape_44.setTransform(316.4,66.9,1.011,1.193);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAnLIAAOX");
	this.shape_45.setTransform(268.9,57.9,1.011,1.193);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAo5IAARz");
	this.shape_46.setTransform(234.5,71.1,1.011,1.193);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAolIAARL");
	this.shape_47.setTransform(198.1,68.7,1.011,1.193);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAqxIAAVj");
	this.shape_48.setTransform(169.8,85.4,1.011,1.193);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAArPIAAWf");
	this.shape_49.setTransform(150.6,89,1.011,1.193);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAApXIAASv");
	this.shape_50.setTransform(124.3,74.6,1.011,1.193);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAsVIAAYr");
	this.shape_51.setTransform(102.1,97.3,1.011,1.193);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAn4IAAPx");
	this.shape_52.setTransform(71.8,63.3,1.011,1.193);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAm8IAAN5");
	this.shape_53.setTransform(47.5,56.1,1.011,1.193);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAj+IAAH9");
	this.shape_54.setTransform(19.2,33.5,1.011,1.193);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(5,2,1).p("AAAm8IAAN5");
	this.shape_55.setTransform(2,56.2,1.011,1.193);

	// 圖層 4
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,102,153,0.859)","rgba(0,102,153,0)"],[0.075,1],5.6,-111.6,5.6,52.5).s().p("Eg7bAQFMAAAggJMB23AAAMAAAAgJg");
	this.shape_56.setTransform(362.3,100);

	this.addChild(this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.1,-2.9,761,205.8);


(lib.title = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC51A").s().p("ABVBKIjAgsQgMgCgGgKQgGgKACgJIAMgzQACgLAKgGQALgGAKACIDBAsQALACAGAKQAGAKgDAJIgLAzQgCALgKAGQgHAFgIAAIgGgBg");
	this.shape.setTransform(347.9,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC51A").s().p("ABVBKIjAgsQgMgCgGgKQgGgKACgJIAMgzQACgLALgGQAJgHALADIDBAsQALACAGAKQAGAKgDAJIgLAzQgCALgKAGQgHAFgHAAIgHgBg");
	this.shape_1.setTransform(350.6,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC51A").s().p("ABVBKIjAgrQgMgDgGgKQgGgKACgJIAMgzQADgMAJgFQAKgHALADIDBAsQALACAGAKQAGAKgDAJIgLAzQgCAMgKAFQgHAFgIAAIgGgBg");
	this.shape_2.setTransform(353.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BE4F3").s().p("ABMBcIi3gpQgNgEgIgLQgHgLADgOIAShOQADgNAMgHQALgHANADIC4ApQANADAHAMQAHAMgDANIgSBNQgDAOgLAHQgIAFgJAAIgIgBg");
	this.shape_3.setTransform(316.5,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5BFFEB").ss(1.3).p("Ag5gMIBzAZ");
	this.shape_4.setTransform(334,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5BFFEB").ss(1.3).p("AgohDIBRCH");
	this.shape_5.setTransform(332.1,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5BFFEB").ss(1.3).p("AhIArICRhV");
	this.shape_6.setTransform(334.7,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4.5).p("Ag5gMIBzAZ");
	this.shape_7.setTransform(334.2,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4.5).p("AgohDIBRCH");
	this.shape_8.setTransform(332.3,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4.5).p("AhIArICRhV");
	this.shape_9.setTransform(334.8,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4.5).p("ABVBKIjAgsQgMgCgGgKQgGgKACgJIAMgzQADgLAJgGQAKgGALACIDBAsQALACAGAKQAGAKgCAJIgMAzQgCALgKAGQgKAGgLgCg");
	this.shape_10.setTransform(348.1,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F19423").s().p("ABVBKIjBgsQgLgCgGgKQgGgKACgJIAMgzQACgLAKgGQAKgGALACIDBAsQALACAGAKQAGAKgCAJIgMAzQgCALgLAGQgHAFgHAAIgGgBg");
	this.shape_11.setTransform(348.1,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4.5).p("ABVBKIjBgsQgLgCgGgKQgGgKACgJIAMgzQACgLAKgGQAKgHALADIDBAsQALACAGAKQAGAJgCAKIgMAzQgCALgKAGQgKAGgLgCg");
	this.shape_12.setTransform(350.7,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F19423").s().p("ABVBKIjBgsQgLgCgGgKQgGgKACgJIAMgzQACgLAKgGQAKgHALADIDBAsQALACAGAKQAGAJgCAKIgMAzQgCALgKAGQgHAFgIAAIgGgBg");
	this.shape_13.setTransform(350.7,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4.5).p("ABVBKIjBgrQgLgDgGgKQgGgKACgJIAMgzQACgMAKgGQAKgGALADIDBAsQALACAGAKQAGAKgCAJIgMAzQgCAMgKAGQgKAGgLgDg");
	this.shape_14.setTransform(353.4,7.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F19423").s().p("ABVBKIjBgrQgLgDgGgKQgGgKACgJIAMgzQACgMAKgFQAKgHALADIDBAsQALACAGAKQAGAKgCAJIgMAzQgCAMgKAFQgHAFgIAAIgGgBg");
	this.shape_15.setTransform(353.4,7.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4.5).p("ACBgjQAHALgDAOIgSBOQgDAMgMAIQgLAHgNgDIi3gqQgNgCgIgMQgHgLADgOIAShOQADgNALgHQAMgHANADIC3ApQANADAIAMg");
	this.shape_16.setTransform(316.7,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F19423").s().p("ABMBcIi3gpQgNgEgIgLQgHgLADgOIAShOQADgNALgHQAMgHANADIC3ApQANADAIAMQAHAMgDANIgSBNQgDAOgMAHQgIAFgJAAIgHgBg");
	this.shape_17.setTransform(316.7,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F968B9").s().p("ABTDjQgVgIgIgVQgIgVAKgTQAIgUAVgIQAVgIAUAKQAUAIAIAUQAIAVgKAUQgIATgWAJQgJADgJAAQgLAAgKgFgAAiAQQgCgdAOgqQARg1gLgeQgLgdgdgLQgZgJgcALQgiANgTAYQgTAYAHASQACAEANgBQARgCAKAEQAQAGAIAWQAHATgHASQgIASgVAHQgaAJgXgPQgWgNgJgZQgUg2Akg0QAhguA1gUQA2gVA4ANQA9AOATAzQAVA3gwBIQgZAlgEAUQgHAdARArIgoAPQgWg5gBglg");
	this.shape_18.setTransform(27.4,27.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(4.4).p("ACPihQAUA3gwBIQgZAlgDAUQgHAcAQAsIgoAPQgUg3gDgnQgBgfAOgoQAQg2gLgdQgLgdgcgLQgagJgcALQgiANgTAYQgSAXAHATQABAEANgBQARgCALAEQAQAHAIAVQAHATgIASQgIASgVAHQgaAJgXgPQgUgNgKgZQgUg2Akg0QAgguA2gUQA2gVA3ANQA9AOAUAzgAB9CEQAUAIAIAUQAIAWgJATQgJATgVAJQgVAHgTgJQgVgIgHgVQgJgVAKgTQAIgUAWgIQAVgIATAKg");
	this.shape_19.setTransform(27.1,27.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F19423").s().p("ABSDjQgVgIgHgVQgJgVAKgTQAIgUAWgIQAVgIATAKQAUAIAIAUQAIAWgJATQgJATgVAJQgJADgJAAQgLAAgLgFgAAhAQQgBgfAOgoQAQg2gLgdQgLgdgcgLQgagJgcALQgiANgTAYQgSAXAHATQABAEANgBQARgCALAEQAQAHAIAVQAHATgIASQgIASgVAHQgaAJgXgPQgUgNgKgZQgUg2Akg0QAgguA2gUQA2gVA3ANQA9AOAUAzQAUA3gwBIQgZAlgDAUQgHAcAQAsIgoAPQgUg3gDgng");
	this.shape_20.setTransform(27.1,27.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A446FF").s().p("ABVChQgKgDAAgIIABgFQgPAFgbADQggAEgdgCQg9gFABgxQAFgkAYggQAjgjAXgBQAFAAgBAFQAxgCAjAAQAbAFAKAZQAMARAABsQAAAFgGABQgFACgLAAIgegCgABGBmQgYAFggADIgsAEQAEAJARABQAcACA8gLIABgNIgDAAIgHAAgAAQBHQgRADgXAAIgEANQArgCAmgGIAdgDIABgMIgKABQgZAEggACgAgMAoIgDAJIBDgFIAggEQgDgLgOgBIgJAAQgdAAgpAMgAiBBoQgEAAgEgDQgJgEgTgRIgDgHIABgGIBGhRIgpgBQgUgEABgMQAEgPAZgNIAGAAQACAAADAGQAEAEANABIAfAAIAOgOIgtgEQgTgEAAgLQAFgOAXgNIAFAAIAHAGQACADAOABIAlABIAQgSIg9gBQgUgBgBgIQABgIAIgOQAMgOAGAAIAIAGQAEADAJABQAqADAugEQAygDAngHQAEAAAAAFQgCASgUAGQgdAKgeACIgQACIgQAXIAPAAQA5gBAvgGQADAAAAAEIgLAXQgDAIgLAAQgdAFgvABIgtAAIgLARIArAAQBGABBAgGQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIgMAWQgDAJgKABQgmAEg8ACIhTgCQhNBngGAFQgFAHgEAAIgBAAg");
	this.shape_21.setTransform(308.3,44.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A446FF").s().p("AAZB3QgMAPgOAYQgBACgHAAQgQgFgXgOQgCgDAAgDQAPgQAYgTIgvgBQgUgEAAgLIACgFIgJADQgXAIgpAAQgVAAAAgLQABgIAHgNQAMgPAGgBIAKAGIAJADQACgkAFgmQgcgCgHgCQgHgDABgIQABgIAMgMQALgMAGgCQAFACAGAFQACAEAFABQAGgbAOgbQALgRALgDQAGABABAHIgHBCQAZgCANgFQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIgFAPQgDAJgDAEQgDAHgNADIgSAEIgDBIIAZgFQAFABAAADIgBAHIAGABQAMhUAegxQAKgNAKgEQAFAAACACIACgLIgDgBQgmgBgHgEQgGgBAAgGQADgJAJgLQAKgJADgCQAFABAFAGQAEADAPABIANAAIACgEQARgaAPAAQAHAAgBAIIgCAXQAvgBARgFQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIgFAOQgCAJgEAEQgFAGgXABIggABIgBALIAPgBQAiADAKAfQAJAJAFBrQAJgDAIgBQADAAAAAGIgLAYQgDAJgMABQghAEglACIgCAAIAOAEQAtALAaAIQAHADgBAGQAAAIgPAaQAAACgFAAIh3gwgAAJAxIgBAQIBWgDIABgTIgCAAgABfAFIgxAGIghABIgBAOQAigBAegFIAUgCIABgOIgCABgABdgdIgtAGQgQACgOABIgCALQAqgDAUgDIATgCIAAgNgAAYg1IgCAJIA5gFIASgCQAAgQgSgBQgPACgoANg");
	this.shape_22.setTransform(271,42.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A446FF").s().p("AAaB4QgMAQgOAYQgBACgGAAQgQgEgXgOQgDgDAAgDQALgNAbgXQgTABgcgBQgUgDABgMIABgEIgJADQgUAHgsADQgVgBAAgKQAAgHAHgOQANgQAFgBIALAGIAIADQABglAFglQgegCgGgCQgGgDAAgHQABgHAMgOQALgMAGgCQAEABAHAGQACAEAFABQAHggAMgWQAKgSALgDQAGAAABAHIgFBCQAbgDALgEQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIgEAOQgCAKgDADQgDAHgOAFIgRADIgCBJIAagFQAFAAgBADIgBAHIADAAIADABQAKhUAfgyQAJgOAJgDQAFAAACABIACgLIgEAAQglgBgIgDQgFgCAAgFQACgJAJgLQAKgKAFgCQADABAGAGQACADAQAAIANAAIACgEQARgbAPABQAFAAAAAHIgBAXQAugCASgFQABAAABAAQABABAAAAQABAAAAABQAAABAAAAIgFAOQgBAHgEAGQgFAFgXADIggACIgBAKIAPgBQAjADAKAeQAJAJAIBrQAIgDAIgCQAEAAAAAHIgLAXQgDAKgLAAQgWAFgxAEIgCAAIAOADQAxALAWAGQAIADgBAGQAAAJgNAZQgBADgFAAgAAqAwIgiADIAAAQIBBgEIAVgCIAAgSIgCAAIgyAFgABdAFIgwAGIghADIgBAOQAhgCAegGIAVgCIAAgOgAAugWIgfADIgBAMQAfgCAfgFIATgDIAAgNgAAVg0IgCAKIBLgJQgBgQgSgBQgTAEgjAMg");
	this.shape_23.setTransform(234.4,40.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#556FFF").s().p("AA1CWIACgiIg2ABIABAeQgCAJgDAAIgiACQgIAAgCgJIADg5IgKADIhEAKIgBAyQAAADgMAAIgdAAQgFABgCgGQAGiMAegyIAFgJIgCAAQgGgBgKgGQgMgIgEgCIgDgFQABgHAMgQIAhgiQAZgXASgHQAEgDADAAQAHgBAAAJQgBAGgIANIgBACQAOgCAMAAQAhgBAAAdQAAAFgOAfQAYAEADAgIABAqQAIgLAKgGQAZgTAUgDQAJAAAAAGQgBAFgRAWQAEABAFAAQAHAAAHgBIAIgTQAJgNAKgDQAJAAAAAIIgCAYQAfgCAQgEQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIgFANQgBAJgEADQgEAIgRABQgHACgPABIgBAmQAagCAjgIQAEAAAAAGIgLAZQgDALgLAAIgoAHIAAAiQAAANgMAAIggAAQgJABgBgKgAAABNIAMgJQADAAACgBQADABAFAGQAEACAPAAIAPAAQADgUAFgRIgkgBQgCAGgEAEQgDAIgEABQgFAAgFgFIgIgFgAh2AmIgCAeQAHAAANgDIACgfQgLAEgJAAgAgzAaIgLABIABAgQAKgBAJgEQABgPAAgQgAhugXIgEAbIATgEIAEgdgAg8glIgCAiIAXgEIAAgbQAAgEgIAAIgNABgAhsg3IAWgGQAdglAAgDQAAgGgKAAIgbAHIgWAnIAEgCQADABABAHgAAKghQgGgBAAgIQAPglAQgcIgdAIQgLAAAAgKQAEgOAFgHQAIgMAIgCQADACABAEIAHABQAhgJAQgGIAYgEQAdAAAFAeQAJAqAGAqQAAAGgIABIgkABQgMAAAAgJQAAgcADgnQAAgHgFgCQgGAAgMADQgNAjgJAoQgBAOgIAAg");
	this.shape_24.setTransform(179.9,40.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#556FFF").s().p("Ah2CeQABgjACg8QgVAFgPADQgQAAgBgQIAKgVQAGgJADgCQAEACAFADQAHgBAUgIQAFgwAEgaQgnABgGgCQgHgDAAgIQACgHAKgOQAJgMAHgDQAEABAIAGQACAEALAAIAGgBQAGgeAHgPQANgaAKgCQAGADAAATIgDAwQAagFAMgEQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABIgEAPQgBAJgDADQgDAJgPACQgGAEgMABIgCA9IAigNQAFAAAAAGQAAAQgKAJQgOANgPAIQAABSABAkQAAAHgOABIgiABQgGAAgDgJgAgWCgQgHgCgBgGQASiQAUhdQgVABAAgKQAAgJAIgQQAJgRAHgDIAKAIQAHADAIgBQAcgCAegIQAjgHAVgJQAFAAAAAFQAAASgNAJQgTAMgWAHQgSAIgjAFIgHAxIABACQAEAEANAAQBKgGAdgHQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIgEAQQgCAMgDAFQgEAEgUADQgJABgLAAQgCAWABAYQAeAMAZAPQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQgZAjgEAAQgEAAgCgDIgVgNIAGA8QABAJgJAAIglACQgJAAAAgJQgCgrADg0IgagTQgEgCAAgHQACgDAIgBIAWADIADgeIgIABQgPABgLgBQgKBNgFBLQAAAOgJAAg");
	this.shape_25.setTransform(142.6,41);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#556FFF").s().p("AimCbQgFgBAAgHQAEgVAXgvQAQgfAKgIIAHABQACABABAFIgHAuIANABQABgkAFgcIgTABQgqADgIgDQgHgBAAgFQABgLAJgLQAJgKAGgCQAFAAAGAGQADADAOgBQBRgHAXgLQABAAABAAQABAAAAABQABAAAAAAQAAABAAABIgDAOQgCAHgDAEQgDAIgVAEIgNADIAAAVQAigEALgHQAEAAAAADIgDANQgCAKgDADQAAAFgHACQgGACgSACIgIABIACAUIA4ADICgAJQAJACAAAHQAAAIgNAhQgBAFgGAAIkSgfIgDAeQgBAEgHABQgMgBgWgKgACCBiIhAgvIgXAqQAAABgGAAQgNAAgTgKQgDgBAAgEQAIgMANgOQgagHgDgqQgBgdAHgZQAAgIAGgNQAUgkAQgBIAEgMIgBAAQgmADgHgDQgEAAgBgGQABgJAGgMQAJgKAFgCQAFAAAFAFQAEAEALgBQBFgGAWgIQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIgDANQgBAHgDAGQgEAGgRACIgeAFIgFAPIAHgCQAbgCANALQAXAVAHBwQABAKgHAAIgYABIAFAFQAOAFAGADIASAIIACAEIgMAQIgNANQgCACgDAAgAAnAOIABADQADAJAMgBQAagDAWgGIgCgQQgbAHgjAHgAAkgcIAAAOQAjgFAcgHIgBgTQggALgeAGgABPhVQgQAFgWAKIgBADIgCAKIA7gOIgBgEQgBgKgNAAIgDAAgAiigzQABgVAKgYQAJgVASgUQALgKAHgBQAJgBABAHQAQgGAQgCQATAAAKARQAMAWAMBPQABAHgHAAIglACQgHABAAgHQgTAIgVABIgKABQgwAAgDgggAhGhMQgSAHgaAEIAAAFQABANAKgBQATgCAPgDIAGgCIgCgXIgFACgAhohuIgFAQIABAAQASgBAQgEQADgCADAAIgBgKQAAgGgIgCQgIABgTAIg");
	this.shape_26.setTransform(106.7,42.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#556FFF").s().p("AieCjQgLjIAahRQALgcAMgDQADACACAGQAYgNAbgDQAegDAFA2IAGBGQgBAXgVALQgGACg8AVQADBBAHBJQABAFgPABIgiAEIgBAAQgFAAgDgGgAhTg0QgKAGgNAEIgHACIABAaIAbgGQAPgBgBgJQACgKAAgQgAhOh/QgPAGgUAVIAAAbQAVgFAPgGIAIgCIAAgjQAAgGgHAAIgCAAgABkCIQgIg4gNhmQgaAMgYACQgiADgGgWQgDgmAMgqQAQgwASgKQAIgBABAFQAUgGATgBQAYABAGAnIA0D/QgCAMgHAAQgNADgbACIgCABQgIAAgDgJgAAjgsQABAHAFgBQARgDASgHIgEgdIgRAFIgTAIIgBAAgAA4iJQgGAAgMAHIgCAkIAbgJQADgCADAAIgDgdQgBgDgHAAIgCAAgAhQB6QgDgeAMghQAQglAQgIQAJAAACAGQAYgLASgCQAVgBALASQAPAVAQBTQABAHgHABIgoAEQgHABgBgIIgBgHQgaANgfAEIgKABQgdAAgGgWgAgdA2QgCAcACAWQABAHAGgBQASgCAXgKIgIgyQgBgFgJgDQgKACgUAMg");
	this.shape_27.setTransform(70.5,45.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAhgtQBFABBBgGQADAAAAADIgMAWQgDAJgKABQgmAEg7ACIhUgCQhNBngGAFQgFAIgFgBQgEAAgDgDQgKgEgSgRQgEgGgBgBQAAgDACgDIBGhRQgUAAgVgBQgUgEABgMQAFgPAYgNIAGAAQACAAADAGQAEAEANABQAVABAKgBIAOgOIgtgEQgTgEAAgLQAFgOAXgNIAGAAIAGAGQACADANABIAmABIAQgSQgRAAgsgBQgUgBAAgIQABgIAHgOQANgOAFAAIAIAGQAFADAIABQAqADAugEQAygDAngHQAEAAAAAFQgCASgUAGQgdAKgeACIgPACIgRAXIAPAAQA5gBAvgGQAEAAAAAEIgMAXQgDAIgLAAQgdAFgvABIgtAAQgEAGgGALgAB9AeQAMARAABsQAAAFgFABQgLADgkgDQgJgDAAgIIAAgFQgPAFgbADQggAEgdgCQg+gFACgxQAFgkAZggQAhgjAYgBQAFAAgBAFQAygCAiAAQAbAFAKAZgABJBBQgZAEggACQgQADgYAAIgEANQArgCAmgGQAUgCAJgBIABgMQgGABgEAAgABEAcQgggDgvAPIgDAJIBCgFQAWgCALgCQgDgLgOgBgAgJB8QAcACA8gLIABgNQgDgBgHABQgYAFgfADIgtAEQAFAJAQABg");
	this.shape_28.setTransform(308.3,44.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F00CC").s().p("ABVChQgKgDAAgIIABgFQgPAFgbADQggAEgdgCQg9gFABgxQAFgkAYggQAjgjAXgBQAFAAgBAFQAxgCAjAAQAbAFAKAZQAMARAABsQAAAFgGABQgFACgLAAIgegCgABGBmQgYAFggADIgsAEQAEAJARABQAcACA8gLIABgNIgDAAIgHAAgAAQBHQgRADgXAAIgEANQArgCAmgGIAdgDIABgMIgKABQgZAEggACgAgMAoIgDAJIBDgFIAggEQgDgLgOgBIgJAAQgdAAgpAMgAiBBoQgEAAgEgDQgJgEgTgRIgDgHIABgGIBGhRIgpgBQgUgEABgMQAEgPAZgNIAGAAQACAAADAGQAEAEANABIAfAAIAOgOIgtgEQgTgEAAgLQAFgOAXgNIAFAAIAHAGQACADAOABIAlABIAQgSIg9gBQgUgBgBgIQABgIAIgOQAMgOAGAAIAIAGQAEADAJABQAqADAugEQAygDAngHQAEAAAAAFQgCASgUAGQgdAKgeACIgQACIgQAXIAPAAQA5gBAvgGQADAAAAAEIgLAXQgDAIgLAAQgdAFgvABIgtAAIgLARIArAAQBGABBAgGQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIgMAWQgDAJgKABQgmAEg8ACIhTgCQhNBngGAFQgFAHgEAAIgBAAg");
	this.shape_29.setTransform(308.3,44.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABUieIgCAXQAvgBARgFQAEAAAAADIgFAOQgCAJgEAEQgFAGgXABIggABIgBALQAKgBAFAAQAiADAKAfQAJAJAFBrQAJgDAIgBQADAAAAAGIgLAYQgDAJgMABQghAEglACIgCAAQAEACAKACQAtALAaAIQAHADgBAGQAAAIgPAaQAAACgFAAQgJgDhugtQgMAPgOAYQgBACgHAAQgQgFgXgOQgCgDAAgDQAPgQAYgTQgfAAgQgBQgUgEAAgLIACgFIgJADQgXAIgpAAQgVAAAAgLQABgIAHgNQAMgPAGgBIAKAGIAJADQACgkAFgmQgcgCgHgCQgHgDABgIQABgIAMgMQALgMAGgCQAFACAGAFQACAEAFABQAGgbAOgbQALgRALgDQAGABABAHIgHBCQAZgCANgFQAEAAAAACIgFAPQgDAJgDAEQgDAHgNADIgSAEIgDBIIAZgFQAFABAAADIgBAHIAGABQAMhUAegxQAKgNAKgEQAFAAACACIACgLIgDgBQgmgBgHgEQgGgBAAgGQADgJAJgLQAKgJADgCQAFABAFAGQAEADAPABIANAAIACgEQARgaAPAAQAHAAgBAIgAAWgsQAZgCAggDIASgCQAAgQgSgBQgPACgoANgABdgdIgtAGQgQACgOABIgCALQAqgDAUgDIATgCIAAgNgABfAFQgRADggADIghABIgBAOQAigBAegFIAUgCIABgOQgBAAgBABgABdArIhUAGIgBAQIBWgDIABgTg");
	this.shape_30.setTransform(271,42.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F00CC").s().p("AAZB3QgMAPgOAYQgBACgHAAQgQgFgXgOQgCgDAAgDQAPgQAYgTIgvgBQgUgEAAgLIACgFIgJADQgXAIgpAAQgVAAAAgLQABgIAHgNQAMgPAGgBIAKAGIAJADQACgkAFgmQgcgCgHgCQgHgDABgIQABgIAMgMQALgMAGgCQAFACAGAFQACAEAFABQAGgbAOgbQALgRALgDQAGABABAHIgHBCQAZgCANgFQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIgFAPQgDAJgDAEQgDAHgNADIgSAEIgDBIIAZgFQAFABAAADIgBAHIAGABQAMhUAegxQAKgNAKgEQAFAAACACIACgLIgDgBQgmgBgHgEQgGgBAAgGQADgJAJgLQAKgJADgCQAFABAFAGQAEADAPABIANAAIACgEQARgaAPAAQAHAAgBAIIgCAXQAvgBARgFQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIgFAOQgCAJgEAEQgFAGgXABIggABIgBALIAPgBQAiADAKAfQAJAJAFBrQAJgDAIgBQADAAAAAGIgLAYQgDAJgMABQghAEglACIgCAAIAOAEQAtALAaAIQAHADgBAGQAAAIgPAaQAAACgFAAIh3gwgAAJAxIgBAQIBWgDIABgTIgCAAgABfAFIgxAGIghABIgBAOQAigBAegFIAUgCIABgOIgCABgABdgdIgtAGQgQACgOABIgCALQAqgDAUgDIATgCIAAgNgAAYg1IgCAJIA5gFIASgCQAAgQgSgBQgPACgoANg");
	this.shape_31.setTransform(271,42.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABOiHQAtgCASgFQAEAAAAADIgFAOQgCAHgDAGQgFAFgYADQgcACgDAAIgBAKIAPgBQAiADAKAeQAKAJAIBrQAHgDAKgCQADAAAAAHIgLAXQgDAKgLAAQgWAFgwAEIgDAAIAPADQAwALAWAGQAIADAAAGQgBAJgOAZQAAADgFAAIh4guQgMAQgOAYQAAACgHAAQgRgEgWgOQgDgDAAgDQALgNAcgXQgUABgcgBQgUgDAAgMIACgEIgJADQgUAHgsADQgVgBAAgKQAAgHAHgOQANgQAGgBIAKAGIAIADQACglAEglQgegCgGgCQgGgDAAgHQACgHALgOQAKgMAHgCQADABAIAGQACAEAFABQAHggAMgWQAKgSALgDQAGAAABAHIgFBCQAbgDALgEQAEAAAAACIgFAOQgCAKgDADQgEAHgNAFIgRADIgBBJIAZgFQAFAAgBADIgBAHIADAAQACAAABABQALhUAegyQAJgOAJgDQAFAAACABIACgLIgDAAQgmgBgIgDQgFgCAAgFQACgJAJgLQAKgKAFgCQADABAGAGQACADAQAAIAOAAIABgEQARgbAPABQAFAAAAAHgAATgqIBLgJQgBgQgRgBQgUAEgjAMgAAPgTIAAAMQAegCAfgFIATgDIAAgNIgxAIQgVADgKAAgABfASIAAgOIgCABQgXAEgZACIghADIgCAOQAjgCAdgGgABcArQgQACghADIgjADIAAAQQAtgCAUgCIAVgCIABgSg");
	this.shape_32.setTransform(234.4,40.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3F00CC").s().p("AAaB4QgMAQgOAYQgBACgGAAQgQgEgXgOQgDgDAAgDQALgNAbgXQgTABgcgBQgUgDABgMIABgEIgJADQgUAHgsADQgVgBAAgKQAAgHAHgOQANgQAFgBIALAGIAIADQABglAFglQgegCgGgCQgGgDAAgHQABgHAMgOQALgMAGgCQAEABAHAGQACAEAFABQAHggAMgWQAKgSALgDQAGAAABAHIgFBCQAbgDALgEQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIgEAOQgCAKgDADQgDAHgOAFIgRADIgCBJIAagFQAFAAgBADIgBAHIADAAIADABQAKhUAfgyQAJgOAJgDQAFAAACABIACgLIgEAAQglgBgIgDQgFgCAAgFQACgJAJgLQAKgKAFgCQADABAGAGQACADAQAAIANAAIACgEQARgbAPABQAFAAAAAHIgBAXQAugCASgFQABAAABAAQABABAAAAQABAAAAABQAAABAAAAIgFAOQgBAHgEAGQgFAFgXADIggACIgBAKIAPgBQAjADAKAeQAJAJAIBrQAIgDAIgCQAEAAAAAHIgLAXQgDAKgLAAQgWAFgxAEIgCAAIAOADQAxALAWAGQAIADgBAGQAAAJgNAZQgBADgFAAgAAqAwIgiADIAAAQIBBgEIAVgCIAAgSIgCAAIgyAFgABdAFIgwAGIghADIgBAOQAhgCAegGIAVgCIAAgOgAAugWIgfADIgBAMQAfgCAfgFIATgDIAAgNgAAVg0IgCAKIBLgJQgBgQgSgBQgTAEgjAMg");
	this.shape_33.setTransform(234.4,40.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABoicQAdAAAFAeQAJApAGArQAAAGgIABIgkABQgMAAAAgJQAAgbADgoQAAgHgFgCQgGAAgMAEQgNAigJAoQgBAPgIAAIgkgHQgGgCAAgHQAPglAQgcQgFABgYAHQgLAAAAgKQAEgNAFgIQAIgMAIgCQADADABADIAHABQAhgJAQgGQAUgEAEAAgABHgWQgBAFgRAWQAEABAFAAQAHAAAHgBIAIgTQAJgNAKgDQAJAAAAAIIgCAYQAfgCAQgFQAEAAAAAEIgFAMQgBAJgEADQgEAIgRABQgHACgPACIgBAlQAagCAjgIQAEAAAAAHIgLAXQgDAMgLAAQgYAFgQACIAAAiQAAANgMAAIggABQgJAAgBgKIACghIg2AAIABAeQgCAJgDAAQgMAAgWACQgIAAgCgJIADg5IgKADIhEALIgBAxQAAAEgMAAIgdAAQgFAAgCgFQAGiNAegyQAFgIAAgBIgCAAQgGAAgKgHQgMgIgEgBIgDgHQABgGAMgPIAhgjQAZgXASgHQAEgEADAAQAHAAAAAJQgBAGgIANQgBABAAAAQAOgBAMAAQAhgBAAAcQAAAGgOAfQAYAEADAgIABAqQAIgLAKgGQAZgTAUgDQAJgBAAAHgAhehkIgWAoIAEgDQADABABAHIAWgFQAdgmAAgDQAAgGgKAAgAhfAAIAEgeIgTAGIgEAbgAgngiQAAgEgIAAQgGAAgHACIgCAgIAXgCgAAIA1IgIgGIAAAeIAMgJQADAAACgBQADABAFAGQAEACAPAAIAPAAQADgUAFgRIgkgBQgCAGgEAEQgDAJgEAAQgFAAgFgEgAgpAXIgKADIgLACIABAfQAKgBAJgDQABgQAAgQgAh4BEQAHAAANgDIACgeQgLADgJAAg");
	this.shape_34.setTransform(179.9,40.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3F00CC").s().p("AA1CWIACgiIg2ABIABAeQgCAJgDAAIgiACQgIAAgCgJIADg5IgKADIhEAKIgBAyQAAADgMAAIgdAAQgFABgCgGQAGiMAegyIAFgJIgCAAQgGgBgKgGQgMgIgEgCIgDgFQABgHAMgQIAhgiQAZgXASgHQAEgDADAAQAHgBAAAJQgBAGgIANIgBACQAOgCAMAAQAhgBAAAdQAAAFgOAfQAYAEADAgIABAqQAIgLAKgGQAZgTAUgDQAJAAAAAGQgBAFgRAWQAEABAFAAQAHAAAHgBIAIgTQAJgNAKgDQAJAAAAAIIgCAYQAfgCAQgEQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIgFANQgBAJgEADQgEAIgRABQgHACgPABIgBAmQAagCAjgIQAEAAAAAGIgLAZQgDALgLAAIgoAHIAAAiQAAANgMAAIggAAQgJABgBgKgAAABNIAMgJQADAAACgBQADABAFAGQAEACAPAAIAPAAQADgUAFgRIgkgBQgCAGgEAEQgDAIgEABQgFAAgFgFIgIgFgAh2AmIgCAeQAHAAANgDIACgfQgLAEgJAAgAgzAaIgLABIABAgQAKgBAJgEQABgPAAgQgAhugXIgEAbIATgEIAEgdgAg8glIgCAiIAXgEIAAgbQAAgEgIAAIgNABgAhsg3IAWgGQAdglAAgDQAAgGgKAAIgbAHIgWAnIAEgCQADABABAHgAAKghQgGgBAAgIQAPglAQgcIgdAIQgLAAAAgKQAEgOAFgHQAIgMAIgCQADACABAEIAHABQAhgJAQgGIAYgEQAdAAAFAeQAJAqAGAqQAAAGgIABIgkABQgMAAAAgJQAAgcADgnQAAgHgFgCQgGAAgMADQgNAjgJAoQgBAOgIAAg");
	this.shape_35.setTransform(179.9,40.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(5,1,1).p("ACbiXQABATgOAJQgTAMgWAHQgSAIgjAFIgGAxIABACQADAEANAAQBKgFAdgIQAEAAAAADIgFAPQgBAMgEAFQgEAEgTADQgKABgKAAQgCAWAAAYQAfAMAYAPQADABAAADQgZAjgDAAQgEAAgDgDIgVgNQADAoADAUQABAJgJAAIglABQgJAAAAgIQgBgqACg1IgagTQgEgCAAgGQADgEAHgBIAWADIADgdQgDAAgFAAQgPABgLgBQgJBNgGBLQAAAOgIAAIgkgFQgHgCAAgGQARiQAUhdQgUABAAgKQgBgJAIgQQAJgRAHgDIALAIQAGACAIAAQAcgCAegIQAjgHAWgJQAEAAAAAEgAg2iQIgEAwQAbgFAMgFQADAAAAADIgDAOQgCAKgDADQgDAJgPACQgGAEgMABIgCA9IAigNQAFAAAAAGQAAAQgLAJQgNANgPAJQAABRABAkQAAAHgNABIgjABQgGAAgCgIQAAglACg8QgVAGgPADQgQABgBgQIAJgWQAHgJADgCQAEACAFACQAHAAAUgIQAEgxAFgZQgmABgHgCQgGgDAAgHQABgIAKgOQAKgMAGgDQAEABAIAGQACAEALAAIAGAAQAHgeAGgQQANgaAKgCQAGADABATg");
	this.shape_36.setTransform(142.6,41);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F00CC").s().p("Ah2CeQABgjACg8QgVAFgPADQgQAAgBgQIAKgVQAGgJADgCQAEACAFADQAHgBAUgIQAFgwAEgaQgnABgGgCQgHgDAAgIQACgHAKgOQAJgMAHgDQAEABAIAGQACAEALAAIAGgBQAGgeAHgPQANgaAKgCQAGADAAATIgDAwQAagFAMgEQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABIgEAPQgBAJgDADQgDAJgPACQgGAEgMABIgCA9IAigNQAFAAAAAGQAAAQgKAJQgOANgPAIQAABSABAkQAAAHgOABIgiABQgGAAgDgJgAgWCgQgHgCgBgGQASiQAUhdQgVABAAgKQAAgJAIgQQAJgRAHgDIAKAIQAHADAIgBQAcgCAegIQAjgHAVgJQAFAAAAAFQAAASgNAJQgTAMgWAHQgSAIgjAFIgHAxIABACQAEAEANAAQBKgGAdgHQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIgEAQQgCAMgDAFQgEAEgUADQgJABgLAAQgCAWABAYQAeAMAZAPQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQgZAjgEAAQgEAAgCgDIgVgNIAGA8QABAJgJAAIglACQgJAAAAgJQgCgrADg0IgagTQgEgCAAgHQACgDAIgBIAWADIADgeIgIABQgPABgLgBQgKBNgFBLQAAAOgJAAg");
	this.shape_37.setTransform(142.6,41);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(5,1,1).p("ACEiVQgBAHgDAGQgEAGgRACIgeAFIgFAPIAHgCQAbgCANALQAXAVAHBwQABAKgHAAIgYABIAFAFQAOAFAGADIASAIQABABABADQgEAHgIAJIgNANQgCACgDAAIgEgBIhAgvIgXAqQAAABgGAAQgNAAgTgKQgDgBAAgEQAIgMANgOQgagHgDgqQgBgdAHgZQAAgIAGgNQAUgkAQgBIAEgMIgBAAQgmADgHgDQgEAAgBgGQABgJAGgMQAJgKAFgCQAFAAAFAFQAEAEALgBQBFgGAWgIQADAAAAADgAgRgZIglACQgHABAAgHQgTAIgVABQg6AEgDgjQABgVAKgYQAJgVASgUQALgKAHgBQAJgBABAHQAQgGAQgCQATAAAKARQAMAWAMBPQABAHgHAAgAAohDIgCAKIA7gOIgBgEQgBgMgQACQgQAFgWAKgABigtQggALgeAGIAAAOQAjgFAcgHgAhNh3QgIABgTAIIgFAQIABAAQASgBAQgEQADgCADAAIgBgKQAAgGgIgCgAhngwQATgCAPgDIAGgCIgCgXQgDACgCAAQgSAHgaAEIAAAFQABANAKgBgAg4AYQgBAOABAHQAigEALgHQAEAAAAADIgDANQgCAKgDADQAAAFgHACQgGACgSACQgDABgFAAQAAAGACAOQAUABAkACQA+ADBiAGQAJACAAAHQAAAIgNAhQgBAFgGAAIkSgfIgDAeQgBAEgHABQgMgBgWgKQgFgBAAgHQAEgVAXgvQAQgfAKgIQAFAAACABQACABABAFIgHAuQAFAAAIABQABgkAFgcIgTABQgqADgIgDQgHgBAAgFQABgLAJgLQAJgKAGgCQAFAAAGAGQADADAOgBQBRgHAXgLQAEAAAAADIgDAOQgCAHgDAEQgDAIgVAEgABlAAQgbAHgjAHIABADQADAJAMgBQAagDAWgGg");
	this.shape_38.setTransform(106.7,42.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3F00CC").s().p("AimCbQgFgBAAgHQAEgVAXgvQAQgfAKgIIAHABQACABABAFIgHAuIANABQABgkAFgcIgTABQgqADgIgDQgHgBAAgFQABgLAJgLQAJgKAGgCQAFAAAGAGQADADAOgBQBRgHAXgLQABAAABAAQABAAAAABQABAAAAAAQAAABAAABIgDAOQgCAHgDAEQgDAIgVAEIgNADIAAAVQAigEALgHQAEAAAAADIgDANQgCAKgDADQAAAFgHACQgGACgSACIgIABIACAUIA4ADICgAJQAJACAAAHQAAAIgNAhQgBAFgGAAIkSgfIgDAeQgBAEgHABQgMgBgWgKgACCBiIhAgvIgXAqQAAABgGAAQgNAAgTgKQgDgBAAgEQAIgMANgOQgagHgDgqQgBgdAHgZQAAgIAGgNQAUgkAQgBIAEgMIgBAAQgmADgHgDQgEAAgBgGQABgJAGgMQAJgKAFgCQAFAAAFAFQAEAEALgBQBFgGAWgIQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABIgDANQgBAHgDAGQgEAGgRACIgeAFIgFAPIAHgCQAbgCANALQAXAVAHBwQABAKgHAAIgYABIAFAFQAOAFAGADIASAIIACAEIgMAQIgNANQgCACgDAAgAAnAOIABADQADAJAMgBQAagDAWgGIgCgQQgbAHgjAHgAAkgcIAAAOQAjgFAcgHIgBgTQggALgeAGgABPhVQgQAFgWAKIgBADIgCAKIA7gOIgBgEQgBgKgNAAIgDAAgAiigzQABgVAKgYQAJgVASgUQALgKAHgBQAJgBABAHQAQgGAQgCQATAAAKARQAMAWAMBPQABAHgHAAIglACQgHABAAgHQgTAIgVABIgKABQgwAAgDgggAhGhMQgSAHgaAEIAAAFQABANAKgBQATgCAPgDIAGgCIgCgXIgFACgAhohuIgFAQIABAAQASgBAQgEQADgCADAAIgBgKQAAgGgIgCQgIABgTAIg");
	this.shape_39.setTransform(106.7,42.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgdhqIAGBGQgBAXgVALQgGACg8AVQADBBAHBJQABAFgPABIgiAEQgGABgDgHQgLjIAahRQALgcAMgDQADACACAGQAYgNAbgDQAegDAFA2gAhOh/QgPAGgUAVIAAAbQAVgFAPgGQAGgCACAAIAAgjQgBgHgIABgAhTg0QgKAGgNAEQgEABgDABIABAaIAbgGQAPgBgBgJQACgKAAgQgABuiAIA0D/QgCAMgHAAQgNADgbACQgJACgEgKQgIg4gNhmQgaAMgYACQgiADgGgWQgDgmAMgqQAQgwASgKQAIgBABAFQAUgGATgBQAYABAGAngAAmiCIgCAkQATgGAIgDQADgCADAAIgDgdQgCgEgIABQgGAAgMAHgAAkhAIgBAAIAAAUQABAHAFgBQARgDASgHIgEgdIgRAFgAgcAUQAYgLASgCQAVgBALASQAPAVAQBTQABAHgHABIgoAEQgHABgBgIIgBgHQgaANgfAEQgmAEgHgZQgDgeAMghQAQglAQgIQAJAAACAGgAABAoQgKACgUAMQgCAcACAWQABAHAGgBQASgCAXgKIgIgyQgBgFgJgDg");
	this.shape_40.setTransform(70.5,45.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3F00CC").s().p("AieCjQgLjIAahRQALgcAMgDQADACACAGQAYgNAbgDQAegDAFA2IAGBGQgBAXgVALQgGACg8AVQADBBAHBJQABAFgPABIgiAEIgBAAQgFAAgDgGgAhTg0QgKAGgNAEIgHACIABAaIAbgGQAPgBgBgJQACgKAAgQgAhOh/QgPAGgUAVIAAAbQAVgFAPgGIAIgCIAAgjQAAgGgHAAIgCAAgABkCIQgIg4gNhmQgaAMgYACQgiADgGgWQgDgmAMgqQAQgwASgKQAIgBABAFQAUgGATgBQAYABAGAnIA0D/QgCAMgHAAQgNADgbACIgCABQgIAAgDgJgAAjgsQABAHAFgBQARgDASgHIgEgdIgRAFIgTAIIgBAAgAA4iJQgGAAgMAHIgCAkIAbgJQADgCADAAIgDgdQgBgDgHAAIgCAAgAhQB6QgDgeAMghQAQglAQgIQAJAAACAGQAYgLASgCQAVgBALASQAPAVAQBTQABAHgHABIgoAEQgHABgBgIIgBgHQgaANgfAEIgKABQgdAAgGgWgAgdA2QgCAcACAWQABAHAGgBQASgCAXgKIgIgyQgBgFgJgDQgKACgUAMg");
	this.shape_41.setTransform(70.5,45.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_42.setTransform(43.5,29.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C0E2CC").s().p("AgDAJIAAgWIAHgBIAAAXQAAAGgEAAQgDAAAAgGg");
	this.shape_43.setTransform(43.5,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_44.setTransform(66.9,29.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_45.setTransform(66.9,22.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C0E2CC").s().p("AAAgLQABABAAAFIAAARg");
	this.shape_46.setTransform(28.1,46.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C0E2CC").s().p("AgBAUIgCgOIAAgUQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAg");
	this.shape_47.setTransform(27.8,41);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_48.setTransform(27.8,34.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_49.setTransform(27.8,27.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABABAGIAAAdQgBAGgEABQgDgBAAgGg");
	this.shape_50.setTransform(35.7,73);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_51.setTransform(35.7,66.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_52.setTransform(35.7,59.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_53.setTransform(35.7,52.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_54.setTransform(35.7,45.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_55.setTransform(35.7,38.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_56.setTransform(35.7,31.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_57.setTransform(35.7,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_58.setTransform(43.5,70.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_59.setTransform(43.5,63.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_60.setTransform(43.5,57);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_61.setTransform(43.5,50.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_62.setTransform(43.5,43.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_63.setTransform(43.5,36.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_64.setTransform(51.3,61.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_65.setTransform(51.3,54.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_66.setTransform(51.3,47.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_67.setTransform(51.3,41);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_68.setTransform(51.3,34.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_69.setTransform(51.3,27.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C0E2CC").s().p("AgDACIAAgJIAHgBIAAAKQAAAHgEgBQgDABAAgHg");
	this.shape_70.setTransform(51.3,21.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C0E2CC").s().p("AgEgEQAAgGAEgBQAEABAAAGIAAAPIgIABg");
	this.shape_71.setTransform(59.1,72);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_72.setTransform(59.1,66.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_73.setTransform(59.1,59.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_74.setTransform(59.1,52.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_75.setTransform(59.1,45.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_76.setTransform(59.1,38.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_77.setTransform(59.1,31.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_78.setTransform(59.1,25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C0E2CC").s().p("AgDAAIAHAAQgBABgDAAQgCAAgBgBg");
	this.shape_79.setTransform(59.1,20.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C0E2CC").s().p("AgDgLQAAgGADAAQAEAAAAAGIAAAcIgHABg");
	this.shape_80.setTransform(66.9,70.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_81.setTransform(66.9,63.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_82.setTransform(66.9,57);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_83.setTransform(66.9,50.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_84.setTransform(66.9,43.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_85.setTransform(66.9,36.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C0E2CC").s().p("AgDABQAAgEADAAQAEAAAAAEIAAACIgHABg");
	this.shape_86.setTransform(51.3,73.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_87.setTransform(51.3,68.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_88.setTransform(90.4,29.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_89.setTransform(90.4,22.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C0E2CC").s().p("AgDAAIAAgCIAHgBIAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_90.setTransform(90.4,17.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_91.setTransform(113.8,29.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_92.setTransform(113.8,22.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C0E2CC").s().p("AgDAGIAAgRIAHgBIAAASQAAAGgEAAQgDAAAAgGg");
	this.shape_93.setTransform(113.8,16.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_94.setTransform(137.3,29.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_95.setTransform(137.3,22.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C0E2CC").s().p("AgDAMIAAgdIAHAAIAAAdQAAAGgEABQgDgBAAgGg");
	this.shape_96.setTransform(137.3,16.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_97.setTransform(74.7,61.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_98.setTransform(74.7,54.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_99.setTransform(74.7,47.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_100.setTransform(74.7,41);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_101.setTransform(74.7,34.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_102.setTransform(74.7,27.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C0E2CC").s().p("AgDAOIAAgdIABgEIAFAAIABAEIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_103.setTransform(74.7,20.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_104.setTransform(82.6,66.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_105.setTransform(82.6,59.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_106.setTransform(82.6,52.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_107.setTransform(82.6,45.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_108.setTransform(82.6,38.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_109.setTransform(82.6,31.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_110.setTransform(82.6,25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C0E2CC").s().p("AgDAHIAAgSIAIgBIAAATQAAAGgFAAQgDAAAAgGg");
	this.shape_111.setTransform(82.6,19);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C0E2CC").s().p("AgDAAQAAgGADAAQAEAAAAAGIAAAGIgHABg");
	this.shape_112.setTransform(90.4,69.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_113.setTransform(90.4,63.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_114.setTransform(90.4,57);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_115.setTransform(90.4,50.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_116.setTransform(90.4,43.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_117.setTransform(90.4,36.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_118.setTransform(98.2,61.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_119.setTransform(98.2,54.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_120.setTransform(98.2,47.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_121.setTransform(98.2,41);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_122.setTransform(98.2,34.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_123.setTransform(98.2,27.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_124.setTransform(98.2,20.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_125.setTransform(106,66.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_126.setTransform(106,59.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_127.setTransform(106,52.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_128.setTransform(106,45.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_129.setTransform(106,38.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_130.setTransform(106,31.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_131.setTransform(106,25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_132.setTransform(106,18.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_133.setTransform(113.8,63.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_134.setTransform(113.8,57);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_135.setTransform(113.8,50.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_136.setTransform(113.8,43.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_137.setTransform(113.8,36.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_138.setTransform(121.6,61.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_139.setTransform(121.6,54.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_140.setTransform(121.6,47.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_141.setTransform(121.6,41);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_142.setTransform(121.6,34.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_143.setTransform(121.6,27.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_144.setTransform(121.6,20.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C0E2CC").s().p("AgDgBIAAgBIAHgBIAAACQAAAFgEAAQgDAAAAgFg");
	this.shape_145.setTransform(121.6,15.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C0E2CC").s().p("AgDgKQAAgGADAAQAFAAAAAGIAAAbIgIAAg");
	this.shape_146.setTransform(129.5,65.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_147.setTransform(129.5,59.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_148.setTransform(129.5,52.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_149.setTransform(129.5,45.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_150.setTransform(129.5,38.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_151.setTransform(129.5,31.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_152.setTransform(129.5,25);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_153.setTransform(129.5,18.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_154.setTransform(137.3,63.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_155.setTransform(137.3,57);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_156.setTransform(137.3,50.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_157.setTransform(137.3,43.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_158.setTransform(137.3,36.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_159.setTransform(74.7,68.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C0E2CC").s().p("AgDgIQAAgGADAAQAEAAAAAGIAAAXIgHAAg");
	this.shape_160.setTransform(98.2,67.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C0E2CC").s().p("AgDAAQAAgGADAAQAEAAAAAGIAAAHIgHAAg");
	this.shape_161.setTransform(121.6,67.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_162.setTransform(160.7,29.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_163.setTransform(160.7,22.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_164.setTransform(160.7,15.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_165.setTransform(184.2,29.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_166.setTransform(184.2,22.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_167.setTransform(184.2,15.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_168.setTransform(207.6,29.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_169.setTransform(207.6,22.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_170.setTransform(207.6,15.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_171.setTransform(145.1,61.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_172.setTransform(145.1,54.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_173.setTransform(145.1,47.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_174.setTransform(145.1,41);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_175.setTransform(145.1,34.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_176.setTransform(145.1,27.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_177.setTransform(145.1,20.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C0E2CC").s().p("AgDADIAAgKIAHgBIAAALQAAAGgEAAQgDAAAAgGg");
	this.shape_178.setTransform(145.1,14.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C0E2CC").s().p("AgEAMIAAgRQABgGADAAQAEAAAAAGIAAARg");
	this.shape_179.setTransform(152.9,65.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_180.setTransform(152.9,59.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_181.setTransform(152.9,52.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_182.setTransform(152.9,45.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_183.setTransform(152.9,38.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_184.setTransform(152.9,31.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_185.setTransform(152.9,25);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_186.setTransform(152.9,18.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_187.setTransform(160.7,63.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_188.setTransform(160.7,57);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_189.setTransform(160.7,50.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_190.setTransform(160.7,43.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_191.setTransform(160.7,36.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_192.setTransform(168.5,61.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_193.setTransform(168.5,54.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_194.setTransform(168.5,47.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_195.setTransform(168.5,41);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_196.setTransform(168.5,34.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_197.setTransform(168.5,27.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_198.setTransform(168.5,20.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C0E2CC").s().p("AgDAGIAAgRIAHAAIAAARQAAAGgEAAQgDAAAAgGg");
	this.shape_199.setTransform(168.5,14.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#C0E2CC").s().p("AgDAKIAAgNQAAgFADAAQAFAAgBAFIAAANg");
	this.shape_200.setTransform(176.4,65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_201.setTransform(176.4,59.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_202.setTransform(176.4,52.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_203.setTransform(176.4,45.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_204.setTransform(176.4,38.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_205.setTransform(176.4,31.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_206.setTransform(176.4,25);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAgBAGIAAAdQABAGgFAAQgDAAAAgGg");
	this.shape_207.setTransform(176.4,18.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C0E2CC").s().p("AgDAAIAHAAQgCABgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAg");
	this.shape_208.setTransform(176.4,13.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C0E2CC").s().p("AgCAUIgBgEIAAgeQAAgFADAAQAEAAAAAFIAAAeQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAg");
	this.shape_209.setTransform(184.2,63.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_210.setTransform(184.2,57);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_211.setTransform(184.2,50.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_212.setTransform(184.2,43.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_213.setTransform(184.2,36.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_214.setTransform(192,61.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_215.setTransform(192,54.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_216.setTransform(192,47.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_217.setTransform(192,41);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_218.setTransform(192,34.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_219.setTransform(192,27.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_220.setTransform(192,20.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C0E2CC").s().p("AgDAGIAAgSIAHAAIAAASQAAAHgEgBQgDABAAgHg");
	this.shape_221.setTransform(192,14.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C0E2CC").s().p("AgEAJIAAgLQABgGADAAQAEAAABAGIAAALg");
	this.shape_222.setTransform(199.8,64.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_223.setTransform(199.8,59.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_224.setTransform(199.8,52.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_225.setTransform(199.8,45.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_226.setTransform(199.8,38.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_227.setTransform(199.8,31.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_228.setTransform(199.8,25);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQABgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAgBgGg");
	this.shape_229.setTransform(199.8,18.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C0E2CC").s().p("AgDAAIAHAAQgCABgCAAQgBAAgCgBg");
	this.shape_230.setTransform(199.8,13.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C0E2CC").s().p("AAAAVQgDgBAAgFIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAFgDABg");
	this.shape_231.setTransform(207.6,63.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_232.setTransform(207.6,57);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_233.setTransform(207.6,50.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_234.setTransform(207.6,43.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_235.setTransform(207.6,36.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C0E2CC").s().p("AAAgBQACAAACACIgHABQABgDACAAg");
	this.shape_236.setTransform(145.1,66.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_237.setTransform(231.1,29.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_238.setTransform(231.1,22.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C0E2CC").s().p("AgDAOIAAgdQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBIAFABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_239.setTransform(231.1,15.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_240.setTransform(254.5,29.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_241.setTransform(254.5,22.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#C0E2CC").s().p("AgDAJIAAgYIAHABIAAAXQAAAGgEAAQgDAAAAgGg");
	this.shape_242.setTransform(254.5,16.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_243.setTransform(278,29.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_244.setTransform(278,22.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#C0E2CC").s().p("AgDACIAAgKIAHABIAAAJQAAAGgEABQgDgBAAgGg");
	this.shape_245.setTransform(278,17.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_246.setTransform(215.4,61.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_247.setTransform(215.4,54.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_248.setTransform(215.4,47.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_249.setTransform(215.4,41);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_250.setTransform(215.4,34.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_251.setTransform(215.4,27.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_252.setTransform(215.4,20.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C0E2CC").s().p("AgDAFIAAgPIAHAAIAAAPQAAAGgEAAQgDAAAAgGg");
	this.shape_253.setTransform(215.4,14.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C0E2CC").s().p("AgEALIAAgQQAAgFAEAAQAEAAAAAFIAAAQg");
	this.shape_254.setTransform(223.3,65.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_255.setTransform(223.3,59.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_256.setTransform(223.3,52.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_257.setTransform(223.3,45.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_258.setTransform(223.3,38.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_259.setTransform(223.3,31.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_260.setTransform(223.3,25);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_261.setTransform(223.3,18.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_262.setTransform(231.1,63.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_263.setTransform(231.1,57);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_264.setTransform(231.1,50.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_265.setTransform(231.1,43.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_266.setTransform(231.1,36.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_267.setTransform(238.9,61.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_268.setTransform(238.9,54.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_269.setTransform(238.9,47.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_270.setTransform(238.9,41);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_271.setTransform(238.9,34.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_272.setTransform(238.9,27.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_273.setTransform(238.9,20.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#C0E2CC").s().p("AgDACIAAgJIAHAAIAAAJQAAAGgEAAQgDAAAAgGg");
	this.shape_274.setTransform(238.9,14.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#C0E2CC").s().p("AgDAQIAAgZQAAgGADAAQAEAAABAGIAAAZg");
	this.shape_275.setTransform(246.7,65.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_276.setTransform(246.7,59.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_277.setTransform(246.7,52.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_278.setTransform(246.7,45.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_279.setTransform(246.7,38.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_280.setTransform(246.7,31.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_281.setTransform(246.7,25);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_282.setTransform(246.7,18.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_283.setTransform(254.5,63.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_284.setTransform(254.5,57);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_285.setTransform(254.5,50.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_286.setTransform(254.5,43.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_287.setTransform(254.5,36.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_288.setTransform(262.3,61.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_289.setTransform(262.3,54.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_290.setTransform(262.3,47.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_291.setTransform(262.3,41);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_292.setTransform(262.3,34.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_293.setTransform(262.3,27.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_294.setTransform(262.3,20.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#C0E2CC").s().p("AgDgBIAHAAQgBADgDAAQgCAAgBgDg");
	this.shape_295.setTransform(262.3,15.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_296.setTransform(270.2,66.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_297.setTransform(270.2,59.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_298.setTransform(270.2,52.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C0E2CC").s().p("AgCATQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_299.setTransform(270.2,45.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#C0E2CC").s().p("AgCATQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgdIACgEQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAEAAAAAGIAAAdQAAAGgEAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_300.setTransform(270.2,38.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_301.setTransform(270.2,31.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_302.setTransform(270.2,25);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_303.setTransform(270.2,18.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#C0E2CC").s().p("AgDACQAAgEADAAQAEAAAAAEIAAABg");
	this.shape_304.setTransform(278,68.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_305.setTransform(278,63.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_306.setTransform(278,57);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_307.setTransform(278,50.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_308.setTransform(278,43.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_309.setTransform(278,36.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#C0E2CC").s().p("AgDACQABgEACABQAEAAAAADIgHAAg");
	this.shape_310.setTransform(238.9,66.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#C0E2CC").s().p("AgDAIIAAgJQAAgHADABQAEgBAAAHIAAAKIgHgBg");
	this.shape_311.setTransform(262.3,67.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_312.setTransform(301.4,29.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAEABAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_313.setTransform(301.4,22.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_314.setTransform(324.9,29.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAIABAAQADACAAAEIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_315.setTransform(324.9,22.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_316.setTransform(348.3,29.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#C0E2CC").s().p("AgDABIAAgIIAHACIAAAGQAAAHgEAAQgDAAAAgHg");
	this.shape_317.setTransform(348.3,24);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_318.setTransform(285.8,61.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_319.setTransform(285.8,54.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_320.setTransform(285.8,47.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_321.setTransform(285.8,41);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_322.setTransform(285.8,34.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_323.setTransform(285.8,27.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_324.setTransform(285.8,20.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_325.setTransform(293.6,66.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_326.setTransform(293.6,59.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_327.setTransform(293.6,52.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_328.setTransform(293.6,45.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_329.setTransform(293.6,38.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_330.setTransform(293.6,31.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_331.setTransform(293.6,25);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#C0E2CC").s().p("AgDAIIAAgVIAIAAIAAAVQAAAGgFAAQgDAAAAgGg");
	this.shape_332.setTransform(293.6,18.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#C0E2CC").s().p("AgDAMIAAgSQAAgGADAAQAEAAAAAGIAAATg");
	this.shape_333.setTransform(301.4,69.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_334.setTransform(301.4,63.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_335.setTransform(301.4,57);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_336.setTransform(301.4,50.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_337.setTransform(301.4,43.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_338.setTransform(301.4,36.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_339.setTransform(309.2,61.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_340.setTransform(309.2,54.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_341.setTransform(309.2,47.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_342.setTransform(309.2,41);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_343.setTransform(309.2,34.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_344.setTransform(309.2,27.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#C0E2CC").s().p("AgDAMIAAgdIAHAAIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_345.setTransform(309.2,20.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#C0E2CC").s().p("AgEAJIAAgLQAAgHAEAAQAEAAAAAHIAAAMg");
	this.shape_346.setTransform(317.1,71.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_347.setTransform(317.1,66.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_348.setTransform(317.1,59.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_349.setTransform(317.1,52.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_350.setTransform(317.1,45.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_351.setTransform(317.1,38.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_352.setTransform(317.1,31.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C0E2CC").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_353.setTransform(317.1,25);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#C0E2CC").s().p("AgEgBIAAgBIAIABIAAAAQAAAEgEAAQgEAAAAgEg");
	this.shape_354.setTransform(317.1,20);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_355.setTransform(324.9,70.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_356.setTransform(324.9,63.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_357.setTransform(324.9,57);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_358.setTransform(324.9,50.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_359.setTransform(324.9,43.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_360.setTransform(324.9,36.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_361.setTransform(332.7,61.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_362.setTransform(332.7,54.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_363.setTransform(332.7,47.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_364.setTransform(332.7,41);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_365.setTransform(332.7,34.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_366.setTransform(332.7,27.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C0E2CC").s().p("AgDAAIAAgFIAHABIAAAEQAAAGgEAAQgDAAAAgGg");
	this.shape_367.setTransform(332.7,22);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADgBQAFABAAAGIAAAdQAAAGgFABQgDgBAAgGg");
	this.shape_368.setTransform(340.5,73);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_369.setTransform(340.5,66.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_370.setTransform(340.5,59.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_371.setTransform(340.5,52.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_372.setTransform(340.5,45.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_373.setTransform(340.5,38.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_374.setTransform(340.5,31.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_375.setTransform(340.5,25);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#C0E2CC").s().p("AAAgGQgBgEACgBIgBAYg");
	this.shape_376.setTransform(348.1,69.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAWIgBAMQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgDAAAAgGg");
	this.shape_377.setTransform(348.3,63.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_378.setTransform(348.3,57);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_379.setTransform(348.3,50.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_380.setTransform(348.3,43.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_381.setTransform(348.3,36.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#C0E2CC").s().p("AgDARIAAgaQAAgHADAAQAEAAAAAHIAAAag");
	this.shape_382.setTransform(285.8,68.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_383.setTransform(309.2,68.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#C0E2CC").s().p("AgDAFIAAgFQAAgGADAAQAEAAAAAGIAAAHg");
	this.shape_384.setTransform(332.7,73.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#C0E2CC").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_385.setTransform(332.7,68.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AYpFPQsRhqsYAAQsXAAsRBqIgBAAQgGAAgBgIIhRoaQgBgEACgEQACgDADAAQM6hwNBAAQNCAAM6BwQADAAACADQABACAAAGIhRIaQgBAIgGAAIgBAAgAYkE7IBOoIQs1hus9AAQs8AAs2BuIBPIIQMShpMRAAQMSAAMSBpg");
	this.shape_386.setTransform(189.8,44.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AYpFPQsRhqsYAAQsXAAsRBqIgBAAQgGAAgBgIIhRoaQgBgEACgEQACgDADAAQM6hwNBAAQNCAAM6BwQADAAACADQABACAAAGIhRIaQgBAIgGAAIgBAAgAYkE7IBOoIQs1hus9AAQs8AAs2BuIBPIIQMShpMRAAQMSAAMSBpg");
	this.shape_387.setTransform(189.8,44.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#AAD1BC").s().p("AAADcQsXAAsRBqIhSobQM5hvNBAAQNCAAM5BvIhRIbQsRhqsZAAg");
	this.shape_388.setTransform(189.8,44.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("Ai9C6QgCAAgDgDQgDgDABgGIA8lfQACgJAGABIE/AxQADABACADQABADAAAEIghDRQgBAGgFABIlZBfgAizCkIFKhaIAejBIkwgug");
	this.shape_389.setTransform(332,69.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#7ABA9B").s().p("AiBivIE/AwIghDRIlaBeg");
	this.shape_390.setTransform(332,69.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("ADuFCIo4hXQgDAAgCgEQgCgDABgEIBboZQACgIAGABII4BWQAFABABAFQACAGgDAEIi9DtIBjEiQABAEgCAFQgCAEgEAAgAlADaIIjBTIhgkZQgBgGADgEIC2jkIojhTg");
	this.shape_391.setTransform(346,64.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#52A274").s().p("AgDADIAAgJIAHgDIAAAMQAAAHgEAAQgDAAAAgHg");
	this.shape_392.setTransform(324.9,85.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#52A274").s().p("AgDACIAAgHIAIgCIAAAJQAAAGgFAAQgDAAAAgGg");
	this.shape_393.setTransform(340.5,81.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAFAAAAAGIAAAdQAAAGgFAAQgDAAAAgGg");
	this.shape_394.setTransform(340.5,86.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#52A274").s().p("AgDAKIAAgOQAAgHADAAQAEAAAAAHIAAAPg");
	this.shape_395.setTransform(348.3,90.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_396.setTransform(348.3,84.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#52A274").s().p("AgDAOIAAgIQADgBAAgFIAEgTIAAADIAAAeQAAAGgEAAQgDAAAAgGg");
	this.shape_397.setTransform(348.3,77.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#52A274").s().p("AgDAEIAAgKIAHgDIAAANQAAAFgEAAQgDAAAAgFg");
	this.shape_398.setTransform(332.7,83.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#52A274").s().p("AgDAJIAAgMQAAgHADAAQAEAAAAAHIAAANg");
	this.shape_399.setTransform(332.7,88);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#52A274").s().p("AgDANIAAgcIABgEIAGACIAAAeQAAAHgEAAQgDAAAAgHg");
	this.shape_400.setTransform(356.1,41.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_401.setTransform(356.1,61.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_402.setTransform(356.1,54.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgHADABQAEgBAAAHIAAAdQAAAHgEAAQgDAAAAgHg");
	this.shape_403.setTransform(356.1,47.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#52A274").s().p("AgEALIAAgPQABgHADAAQAEAAAAAHIAAAQg");
	this.shape_404.setTransform(364,92.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#52A274").s().p("AgDAJIAAgXIAHAaQgBADgDAAQgDAAAAgGg");
	this.shape_405.setTransform(363.9,80.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#52A274").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_406.setTransform(364,86.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#52A274").s().p("AgEgIQABgGADAAQAEAAAAAGIAAAKIgIANg");
	this.shape_407.setTransform(364,58.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#52A274").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_408.setTransform(364,45.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#52A274").s().p("AgEAPIAAgdQABgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAgBgGg");
	this.shape_409.setTransform(364,52.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#52A274").s().p("AgEgBIAAgBIAIABQgBAEgDAAQgDAAgBgEg");
	this.shape_410.setTransform(364,40.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#52A274").s().p("AgDAOIAAgdIAAgEIAHABIAAADIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_411.setTransform(371.8,43.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#52A274").s().p("AgDgDQAAgHADAAQAEAAAAAHIAAADIgHALg");
	this.shape_412.setTransform(371.8,49.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_413.setTransform(356.1,75.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_414.setTransform(356.1,89);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_415.setTransform(356.1,82.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_416.setTransform(356.1,68.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#95C7AD").s().p("AlKDiIBcoZII5BWIjCDxIBmEog");
	this.shape_417.setTransform(346.1,64.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AC8C6IlZhfQgFgBgBgGIghjRQAAgEABgDQADgEACAAIE/gxQAGgBACAJIA8FfQABAGgDADQgCADgDAAgAi0h3IAeDBIFKBaIg4lJg");
	this.shape_418.setTransform(47.9,69.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#7ABA9B").s().p("AicBSIghjRIE/gwIA8Ffg");
	this.shape_419.setTransform(47.9,69.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AjuFCQgEAAgCgEQgCgFACgEIBjkiIi9jtQgEgEACgGQABgFAFgBII4hWQAHgBABAIIBbIZQABAEgCADQgCAEgDAAIo4BXgAk5jaIC1DkQAEAFgCAFIhgEZIIjhTIhYoHg");
	this.shape_420.setTransform(33.8,64.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#52A274").s().p("AgDAAIAAgDIAHgBIAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_421.setTransform(4.4,42.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#52A274").s().p("AgEgBIAEgNIAAAAQAEAAAAAHIAAAUIgIACg");
	this.shape_422.setTransform(12.2,92.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#52A274").s().p("AgEAPIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAQgEAAAAgGg");
	this.shape_423.setTransform(12.2,45.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#52A274").s().p("AgCAUIAAgBIgCgEIAAgdQAAgGAEAAQAEAAAAAGIAAAdQAAAGgEAAg");
	this.shape_424.setTransform(12.2,52.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_425.setTransform(20,77.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#52A274").s().p("AgDAFIAAgQQAAgFADAAQAEAAAAAFIAAAdg");
	this.shape_426.setTransform(20,63.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#52A274").s().p("AgDAPIAAgYIADgLIAAAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_427.setTransform(20,70.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#52A274").s().p("AgDAQIAAgcQAAgHADAAQAEAAAAAHIAAAcIAAADIgHABg");
	this.shape_428.setTransform(20,91.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_429.setTransform(20,84.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_430.setTransform(20,57);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_431.setTransform(20,43.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_432.setTransform(20,50.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#52A274").s().p("AgCAOIAAgdIABgFIAFAoIgEAAQgCABAAgHg");
	this.shape_433.setTransform(27.8,54.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_434.setTransform(27.8,61.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#52A274").s().p("AgDAHIAAgTIAIACIAAARQgBAGgEAAQgDAAAAgGg");
	this.shape_435.setTransform(35.7,80.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAABAGIAAAdQgBAGgEAAQgDAAAAgGg");
	this.shape_436.setTransform(35.7,86.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#52A274").s().p("AAAgBQADAAABACIgHABQAAgDADAAg");
	this.shape_437.setTransform(43.5,89.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_438.setTransform(43.5,84.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#52A274").s().p("AgEgHIAIADIAAAKIgIACg");
	this.shape_439.setTransform(59.1,86.4);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_440.setTransform(27.8,75.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_441.setTransform(27.8,89);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_442.setTransform(27.8,82.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#52A274").s().p("AgDAPIAAgdQAAgGADAAQAEAAAAAGIAAAdQAAAGgEAAQgDAAAAgGg");
	this.shape_443.setTransform(27.8,68.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#52A274").s().p("AgDAAQAAgHADAAQAEAAAAAHIAAAGIgHACg");
	this.shape_444.setTransform(51.3,87.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#52A274").s().p("AgDAAIAAgDIAHADQAAAEgEAAQgDAAAAgEg");
	this.shape_445.setTransform(51.3,83.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#95C7AD").s().p("AiJAQIjAjxII4hWIBbIZIo4BWg");
	this.shape_446.setTransform(33.8,64.3);

	this.addChild(this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,379.9,96.5);


(lib.star2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgdDoQgSgEgFgRIgghsQgEgPgPgFIhrgjQgRgFgDgSQgCgSAOgIIBehAQAMgIAAgQIABhxQAAgSAQgIQAQgIAOALIBYBFQALAJAPgEIBsgjQARgFAMANQANAMgGARIgmBrQgFAOAJANIBCBZQAKAPgIAQQgIAQgSgBIhxgDQgPAAgJAMIhBBbQgJAMgNAAIgGAAg");
	this.shape.setTransform(23.2,23.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.3,46.6);


(lib.star1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA8CEA").s().p("AhkE5QgXgJgCgYIgLiZQgCgUgSgLIiEhNQgVgMACgWQABgYAXgJICNg7QAUgHAEgUIAgiWQAFgYAYgGQAXgGAQATIBhB1QANAPAVgCICYgPQAYgDANAVQANAUgNAVIhQCAQgLASAIATIA+CMQAKAWgQASQgPATgYgGIiVgkQgUgFgPAOIhwBmQgMAKgNAAQgIAAgHgDg");
	this.shape.setTransform(30.9,31.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.8,63.4);


(lib.music_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ACoC4IlvlNQgHgHAAgJQgBgKAHgHQAGgHAKgBQAKAAAHAHIFvFNQAHAGAAAKQABAKgHAHQgGAHgKAAIgBABQgJAAgHgHg");
	this.shape.setTransform(43.7,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AiyDoQgjgjAAgyQAAgzAjgkQAkgjAzAAQAyAAAkAjIADAEIAAiwIAAgDIAAiHQAAgFACgEQABgFAFgCQAGgDAGADQBqAtBFBVQAlAtgcA3QgJASgPANQgDADgFABQgFAAgEgCQgEgDgCgEQgDgGgEgFQgvg9hMgQIAADWQADAPAAAQQAAAyghAjQgkAkgyAAQgzAAgkgkg");
	this.shape_1.setTransform(44.5,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AheFxQABgHgCgFQgEgGgGgCQgdgIgbgNQgGgEgGADQgGABgDAGQgWgNgVgPQADgGAAgGQgBgGgFgFQgPgMgNgNIgQgSQgFgFgGAAQgHgBgEAFQgRgUgNgWQAFgDABgGQACgGgDgGQgOgbgKgdQgDgGgGgDQgGgCgFABQgIgZgDgaQAFgBAFgFQAEgFgBgGQgCgVAAgVIABgRQAAgHgEgEQgFgFgGgBQACgbAGgZQAGACAFgDQAGgEACgGQAIgdANgcQADgGgCgGQgDgGgFgDQAMgXAQgVQAFAEAGgBQAHgBAEgFQANgRARgQIAMgMQAFgEAAgHQAAgGgEgFQAVgSAWgOQADAGAGABQAGACAGgDQAagQAcgJQAGgDADgGQADgFgCgGQAYgIAbgEQABAFAFAFQAFADAGAAQAYgDAXAAIALAAQAGAAAFgFQAEgEAAgGQAcACAbAGQgCAGAEAFQADAGAGABQAeAHAbANQAGACAGgCQAGgCADgGQAXAMAWAQQgEAFABAGQABAHAFAEQAUAPATATIAHAHQAEAFAGABQAHAAAFgEIABgBQARAVAPAVQgGADgCAHQgBAGADAGQAQAZALAdQACAGAGADQAGACAGgCQAIAZAFAZQgHABgEAFQgDAGABAGQADAaAAAaIAAAHQAAAHAFAEQAEAFAGAAQgBAbgFAaQgGgCgFAEQgGADgCAGQgGAegMAcQgEAGADAGQACAGAGADQgLAXgPAWQgFgEgHABQgGABgEAFQgRAXgUAVIgBABQgFAEAAAHQAAAGAFAFQgVASgVAPQgEgFgGgBQgGgCgGAEQgbARgbAMQgHACgCAGQgDAFADAGQgZAJgaAFQgCgGgFgEQgFgDgGABQgeAEgeAAIAAAAIgZgBQgHgBgEAFQgGAEAAAHQgbgDgZgGg");
	this.shape_2.setTransform(43.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAAGLIgbgBQgHgBgDgEQgGgGABgGQABgHAFgEQAFgEAHAAIAYABIAAAAQAfAAAdgEQAGgBAGAEQAEADACAHIAAAAQABAHgFAFQgDAFgHABQgfAFghAAgAhyF7QgggKgdgOQgGgDgCgGQgCgGAEgHQACgGAHgBQAFgCAHADQAaANAdAIQAGADAEAFQADAFgCAHIAAAAQgCAHgGADQgDACgEAAIgFgBgACKFvQgHgDgCgGIAAgBQgCgFACgFQACgHAHgCQAbgLAbgSQAGgDAHABQAFABAEAFQAEAGgBAHQgCAGgGAEQgdATgeAMIgGABIgGgBgAj4EzIgegcQgKgJgHgKQgFgFAAgGQABgHAEgDIABgBQAEgEAHAAQAGABAFAFIAQARQAOANAOANQAFAEABAGQAAAGgDAGIAAAAQgFAFgGABIgBAAQgGAAgFgEgAEAEYQgFgFAAgGQAAgHAFgEIABgBQAVgUAQgYQAEgFAHgBQAGgBAFAEQAFADACAIQAAAGgEAFQgRAYgXAXIgBABQgFAFgGAAQgGAAgFgFgAlRDGQgGgCgEgFQgPgegLgfQgDgHADgFQADgGAGgCIABAAQAFgCAHADQAFACADAHQAKAcAOAbQAEAGgDAGQgBAGgFADIAAABIgIACIgFgBgAFWClQgFgDgDgFQgDgHAEgGQAMgcAGgdQACgGAGgEQAFgDAGABIAAAAQAHABADAHQAEAFgBAGQgJAhgNAeQgCAGgGACIgGABIgHgBgAmCA2QgGgEAAgGQgCgWAAgWIAAgTQABgHAFgEQAFgFAGAAQAGABAFAFQAEAFAAAGIgBASQABAVACAUQAAAGgEAFQgFAFgFACIgBAAIgBAAQgGAAgEgFgAF6AXQgGgBgEgFQgFgEAAgHIAAgGQAAgagDgbQgBgGADgGQAFgFAGgBQAGgBAGAFQAFAEABAGQAEAcAAAdIAAAGQAAAHgFAEQgFAGgGAAgAlxhWIAAAAQgHgCgDgGQgDgGABgGQAKghAOgeQADgFAGgCQAGgDAFAEIABAAQAFACADAHQACAGgDAFQgNAcgIAdQgCAHgFADQgEACgEAAIgEAAgAFdh5QgHgCgCgHQgLgdgQgZQgDgGACgGQABgGAGgEQAFgEAHACQAHACADAGQAQAcAMAeQADAHgDAGQgCAFgGADIAAABIgGAAIgGgBgAk0jcQgFgEgBgGQgBgIAEgEQAQgTARgSIANgMQAEgEAIAAQAGAAAEAFIABAAQADAFAAAGQAAAHgEAEIgNAMQgQAQgOARQgEAFgGABIgCABQgGAAgEgEgAESjzQgGAAgEgFIgHgIQgTgSgUgQQgFgEAAgGQgCgHAEgEIABgBQAEgFAGgBQAGgBAGAEQAVAQAUAUIAJAJQAEAGgBAGQAAAGgEAFIAAABQgFADgGAAIgCAAgAi/k7QgFgBgEgGIgBAAQgCgGABgGQACgHAFgDQAdgQAfgLQAGgCAGACQAGADACAGIAAABQACAGgCAFQgEAHgFACQgdAJgaAQQgEACgEAAIgEgBgACWlMQgcgMgegIQgGgBgDgGQgEgFACgGIAAgBQACgGAGgDQAEgEAHACQAhAIAdANQAGADADAGQACAHgDAFQgDAHgFABIgGABIgGgBgAg6lrQgFgEgBgGIAAgBQAAgGADgGQAFgFAGAAQAZgDAZAAIALAAQAGAAAFAFQAEAFABAFIAAABQgBAHgEADQgFAGgGAAIgLAAQgXgBgXADIgCAAQgGAAgEgDg");
	this.shape_3.setTransform(43.6,43.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("Ak1E1Qh/iAgBi1QABi0B/iBQCBh/C0gBQC1ABCAB/QCACBAAC0QAAC1iACAQiACAi1AAQi0AAiBiAg");
	this.shape_4.setTransform(43.8,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("Ak1E1Qh/iAgBi1QABi0B/iAQCBiBC0AAQC1AACACBQCACAAAC0QAAC1iACAQiACBi1AAQi0AAiBiBg");
	this.shape_5.setTransform(48.4,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.2,92.1);


(lib.fdfh = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2B082").s().p("Akq9cIJVGEMAAAAtdIpVHYg");
	this.shape.setTransform(103.8,284.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2D19E").s().p("Eg+nAgBMAAAhABMB9PAAAMAAABABgAhIW5IABAAIgEgBIADABgAlHSZIAAgBIAAAAgAl7RNIAAAAIAAgBgAmKO/IACgBIgBgDgAB8MbIACABIgBgBIgBgBg");
	this.shape_1.setTransform(554.5,205);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2BF95").s().p("EhYUARSIAAvoILjpGIJWnYIDHidMB9OAAAIbbT4IAAOrg");
	this.shape_2.setTransform(565.4,520.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7F3FF").s().p("AqNPQIAA6+IUbolMAAAAong");
	this.shape_3.setTransform(1057.8,209.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3CBA5").s().p("ArRP9IAA8EIWjpyMAAAArzgAqVrmIAAa+IUcFEMAAAgong");
	this.shape_4.setTransform(1058.5,208.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1E3C8").s().p("EA86AWEMAAAhACIbbAAIAAIYI31KzIAAeyIX1GyIAAbNgEhYUgp+IYAAAMAAABACIjHCdMAAAgtcIpWmEMAAAA64IrjJIg");
	this.shape_5.setTransform(565.4,268.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BEDEDD").s().p("Ar5RaIAA+yIXzqzIAACVI2iJzIAAcEIWiF9IAACOg");
	this.shape_6.setTransform(1054.5,208.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1130.8,631.3);


(lib.edulogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9DQIAAmfIJ7AAIAAF8QAAAjhMAAgAjXChIGWAAQAZAAAAgKIAAhYQgRAYgPAFQgRAIgVgBIgNAAQAIAMAQgBIAiAAIAAAoIhRAAQgbAAgTgXIgvhDIBdAAIAHAMIAFAAQANAAALgMIBGAAIAAjcImvAAgAghCbQgvAAAAgXIAAgXIgGAJQgPAegnAAIhAAAIAAgpIAbAAQAOgBAGgRIAOgsIgpAAIAAhRIFqAAIAAA3QgBAagsAAIi0AAIgLAYIA5AAIAAAiQAAALAMAAIAmAAIAAApgAhfAKICxAAQAJAAAAgBIAAgJIi6AAgAjIgxIAAgoICXAAIAAgLIiLAAIAAgnICLAAIAAgPIBYAAIAAAPICUAAIAAAlIiUAAIAAANIChAAIAAAog");
	this.shape.setTransform(-7.3,20.1,0.205,0.205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9A+IAAgRIALAAQADAAAAgMIAHhDIgVAAIAAgRIAyAAIAAgKIAWAAIAAAKIAzAAIAAARIhTAAIgBAPIBPAAIAABBQAAAPgRAAIguAAIAAgSIAnAAQABAAABAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgqIg9AAIgEAtQgBASgIAAg");
	this.shape_1.setTransform(28,28.4,0.205,0.205);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGA+QgQAAAAgRIAAhCIgHABIAAgSIAHgBIAAgTIAQAAIAAARIAJgBIAAgSIARAAIAAAQIAbgFIAABFQAAAQgQAAIgFAAIAAgQIACAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAguIgKABIAABCIgRAAIAAg/IgJACIAABAQAAAEAEAAIA0AAIAAARgAg9A7IAAgRIANAAIAAhHIgMAAIAAgRIAMAAIAAgOIATAAIAAAOIALAAIAAARIgLAAIAABHIAMAAIAAARg");
	this.shape_2.setTransform(23.7,28.4,0.205,0.205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDA+IAAgRIAcAAQADAAAAgHIAAgSIgiAAIAAgRIAiAAIAAgPIgaAAIAAgRIAcAAIAHgOIgoAAIAAgRIA/AAIAAANIgNAYIAAAaIAPAAIAAARIgPAAIAAAdQAAANgLAAgAgYA9QgEAAgCgEIgEgHIgGAHQgCADgFABIgMAAIAAgQIAEAAQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAHgLIgJgOIgBgGIAAgqIgHAAIAAgRIAHAAIAAgOIASAAIAAAOIAIAAIAAgOIARAAIAAAOIAHAAIAAARIgHAAIAAArIgBAGIgLAPIAEAJIADACIAFAAIAAAQgAgkAGIABAEIACAGIADgFIACgEIAAglIgIAAg");
	this.shape_3.setTransform(19.3,28.4,0.205,0.205);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJA+IAAgRIAcAAQAFAAAAgDIAAhLIgaAAIAAADQgDALgKAAIgIAAIAABEQAAANgNAAIgqAAIAAhxIAQAAIADgJIAVAAIgDAJIASAAIAAAQIAFAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIADgWIATAAIgCAKIApAAIAABiQAAAPgRAAgAgqAtIAPAAQAFAAgBgEIAAgdIgTAAgAgqgEIATAAIAAgfIgTAAgAAUAjQgJAAgCgKIgJgpIASAAIAHAdQAAAFAEAAIAJAAIAAARg");
	this.shape_4.setTransform(15,28.4,0.205,0.205);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4A+IAAg6IArAAIADgFIgJAAIAAgtIgpAAIAAgPIA6AAIAAA8IAEAAIAAgLIAPAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAEgGIATAAIgJAQQgDAEgHAAIgQAAIgCAEIA0AAIAAAwQAAAKgNAAgAglAwIBIAAQAFAAAAgDIAAgEIhNAAgAglAbIBNAAIAAgJIhNAAgAg6AAIAAgMIAOAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIADgFIASAAIgIAPQgDAEgGAAgAArAAIAAguIgqAAIAAgPIA8AAIAAA9gAADgWIAAgMIAKAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIADgGIASAAIgIAPQgDAFgGAAgAg5gWIAAgNIAJAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIADgGIASAAIgIAPQgCAFgHAAg");
	this.shape_5.setTransform(10.7,28.4,0.205,0.205);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA9IAAgMIA9AAQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIAAgEIhRAAIAAgNIBSAAIAHgGIhPAAIAAgKIgJAAIAAgRIAEAAIAAg0IAQAAQACgBACgDIAPAAIAAABIARAAIAEAFIAIgFIAWAAIgBABIAcAAIAAA2IAEAAIAAARIgIAAIAAAGIgMAKIAVAAIAAANIgXAAIAAAMQABAHgMAAgAgoAMIBRAAIAAgGIhRAAgAgmgEIBNAAIAAgHIgSAAIAGAEIgWAAIgFgEIgEAEIgVAAIAQgLIgNgJIgQAAIAAAFIAQAAIAAAMIgQAAgAALgSIAKAHIAAgLIASAAIAAgGIgQAAgAgWgeIASAAIAEAEIAGgEIAPAAIAAgCIgRgBIgEgFIgGAFIgQAAgAALguIAKAJIAAgDIASAAIAAgFIgSAAIAAgIgAgmgnIAQAAIAAABIAMgIIgLgIQAAALgNAAIgEAAg");
	this.shape_6.setTransform(6.4,28.4,0.205,0.205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA/IAAghIg1AAIAAgQIA1AAIAAgEIARAAIAAAEIA1AAIAAAQIg1AAIAAAhgAAlA+QgIAAgDgHIgJgVIAUAAIAFALQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAPAAIAAAOgAg8A+IAAgOIASAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBIAEgKIATAAIgHAUQgCAHgKAAgAgTAIIAAg/IAHAAIACgHIAQAAIgDAHIAPAAIAAA1QAAAKgKAAgAgFgEIAGAAQADAAAAgEIAAgIIgJAAgAgFgdIAJAAIAAgMIgJAAgAAVAHIAAgJIACgEIALgRIgNAAIAAgNQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAOgVIAUAAIgQAYIARAAIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgQAWIAGAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAPAAIAAAMQAAAIgNAAgAg9AHIAAgJIACgEIANgRIgOAAIAAgNQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIARgVIATAAIgSAYIASAAIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgSAWIAGAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgGIAOAAIAAAMQAAAIgMAAg");
	this.shape_7.setTransform(2,28.4,0.205,0.205);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmA+QgJAAgFgJIgJgaIgKAaQgDAJgFAAIgQAAIAAgQIAFAAQAFAAACgEIAJgfIgVAAIAAgOIAYAAIAAgiIgQAAIAAgQIAQAAIAAgIIATAAIAAAIIAfAAIAAAyIAHAAIAAAOIgiAAIANAfQADAEAFAAIALAAIAAAQgAAYgDIAMAAIAAgiIgMAAgAgnA+IAAhWIgFAAIAABOIgRAAIAAhtIARAAIAAAPIAFAAIAAgVIARAAIAAAVIAFAAIAAAQIgFAAIAABWg");
	this.shape_8.setTransform(-2.2,28.4,0.205,0.205);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA/IAAgPIACAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAhQIgEAAIgDBMQgBALgEAEQgEAGgGAAIgIAAIAAgPIADAAQAEAAAAgJIADhJIgIAAIAAgQIAJAAIAAgKIAQAAIAAAKIAUAAIAABkQAAANgPABgAg8A+IAAgOIAeAAIAAgDIgcAAIAAgOIAcAAIAAgDIgaAAIAAgzIAaAAIAAgDIgdAAIAAgOIAdAAIAAgEIgbAAIAAgOIAyAAQAEAAABgDIAQAAQgBAJgEAEQgEAEgFAAIgOAAIAAAEIAcAAIAAAOIgcAAIAAADIAZAAIAAApQAAAKgLAAIgOAAIAAADIAbAAIAAAOIgbAAIAAADIAaAAIAAAOgAgOAPIAHAAQAEAAAAgEIAAgCIgLAAgAgoAPIAKAAIAAgGIgKAAgAgOgDIALAAIAAgGIgLAAgAgogDIAKAAIAAgGIgKAAg");
	this.shape_9.setTransform(-6.6,28.4,0.205,0.205);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATA/IAAgNIAOAAQAEAAAAgGIAAgFIhCAAIAAgOIBCAAIAAgDIAQAAIAAADIAGAAIAAAOIgGAAIAAAJQAAAGgEAFQgDAEgHAAgAg3A+IAAhRIgGAAIAAgRIAEAAQACAAABgEIAHgWIATAAIgCAFIAhAAIAAgEIASAAIAAAEIAnAAIAAANIgnAAIAAAEIAkAAIAAAjQAAAFgFACIAKAAQgBALgEADQgDAEgIAAIhOAAIAAgMIAjAAIAAgFIggAAIAAgrIAgAAIAAgEIgjAAIAAgHIgGAQIAABhgAAVAIIATAAQADAAABgFIgXAAgAAVgHIAQAAQADAAAAgEIAAgBIgTAAgAgLgHIAOAAIAAgFIgOAAgAAVgXIATAAIAAgFIgTAAgAgLgXIAOAAIAAgFIgOAAgAgJA8QgEAAgCgEIgHgOIAUAAIACAFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAOAAIAAAMg");
	this.shape_10.setTransform(-10.9,28.4,0.205,0.205);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjA9QgOAAgGgMIgPghIgRAhQgHAMgNAAIgYAAIAAgSIAOAAQAHAAAEgFIAVglIgtAAIAAgQIAzAAIAAgcIgvAAIAAgRIBxAAIAAARIgvAAIAAAcIA0AAIAAAQIgvAAIAUAlQAFAFAGAAIAQAAIAAASg");
	this.shape_11.setTransform(-15.2,28.4,0.205,0.205);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBDAAIAAgYIhDAAIAAg3IBVAAIAAATIg/AAIAAAXIAvAAQAKAAAGAEQAEACAAAKIAAAVQAAAJgHAFQgFAEgJABg");
	this.shape_12.setTransform(-19.6,28.4,0.205,0.205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAyQgPgBgGgEQgHgFABgPIAAgyQgBgNAGgGQAGgEANAAIBDAAIAAATIhFAAIAAAXIAwAAQAPAAAFAEQAGACgBAMIAAAPQAAAWgYABgAgZAfIAzAAIAAgYIgzAAg");
	this.shape_13.setTransform(-23.9,28.4,0.205,0.205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAyIAAgTIBDAAIAAgYIg3AAIAAgOIA3AAIAAgWIhDAAIAAgTIBCAAQAXgBAAASIAAAQQAAAHgDAEQgDADgGABIAKAGQACAFAAAFIAAARQAAARgXAAg");
	this.shape_14.setTransform(-28.2,28.4,0.205,0.205);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAODPQg7AAAAgiIAAlzIBnAAIAACrIB2AAQATAAAAgbIAAhwIBoAAIAACKQAAAagZAPQgWAPgnAAIibAAIAABvQAAAKATAAID8AAIAAA6gAkADPIAAjxIhIAAIAAhAIA8AAQAQAAAJgSIAwhaIBtAAIhFB9IAAEgg");
	this.shape_15.setTransform(22.9,20.1,0.205,0.205);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ADKDSQgwAAgkgYIh4hUIhtBJQgwAghBAAIhsAAIAAg9IBMAAQAqAAAbgTIByhJIjUiRICHAAICYBeICUheICHAAIjSCLICHBUQAaASAjgBIA9AAIAAA9gAlLhzIAAg7IETAAIAAgjIB6AAIAAAjIELAAIAAA7g");
	this.shape_16.setTransform(7.8,20.1,0.205,0.205);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AD7DRQgdAAgXgSIgygqIghAhQgbAXgigBIhWAAIAAgxIAdAAQAaAAAfgcIAggdIiIhxIBzAAIBPA9IBIg/IBzAAIh7BxIA+AzQAPANAUAAIAaAAIAAAxgAjgDQIAAlBIhjAAIAAg1IBjAAIAAgqIBRAAIAAAqIBXAAIAAA1IhXAAIAAFBgAlRC7IAAgzQAPgBABgRIASjSIBLAAIgTDoQgBAXgSAMQgRAMgZAAgAhLC5QgoAAgFgpIgVjsIBJAAIATDWQADAQANAAIAAAvgADzgiQgYAAgPgWIgog/IBfAAIANAeQAFAJALAAIAyAAIAAAugAghgiIAAguIAhAAQAKAAAEgJIARgeIBdAAIgrA/QgOAWghAAgAgkiGIAAg4ICGAAIAAgSIBkAAIAAASICLAAIAAA4g");
	this.shape_17.setTransform(-22.6,20.1,0.205,0.205);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BpIAAjRIApAAIAACgIBIAAIAAAxg");
	this.shape_18.setTransform(16.8,-26.7,0.205,0.205);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BMQgTgcAAgwQAAgwAUgdQAUgeAkgBQAmABAVAfQASAcAAAwQAAAwgTAdQgUAfgmAAQglABgUghgAggAAQAAAhALAPQAJANAMAAQAOAAAJgNQALgOAAgiQAAg9giAAQggABAAA8g");
	this.shape_19.setTransform(13.6,-26.7,0.205,0.205);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BMQgSgcAAgwQAAgwAUgdQAUgeAkgBQAmABAUAfQATAcAAAwQAAAwgTAdQgUAfgmAAQglABgVghgAggAAQAAAhALAPQAJANAMAAQANAAAKgNQALgOAAgiQAAg9giAAQggABAAA8g");
	this.shape_20.setTransform(10.1,-26.7,0.205,0.205);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBpIAAhXIgxAAIAABXIgqAAIAAjRIAqAAIAABNIAxAAIAAhNIAqAAIAADRg");
	this.shape_21.setTransform(6.7,-26.7,0.205,0.205);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BKQgQgcAAguQgBgzAXgeQAUgbAeAAQA0AAAPBDIgnANQgHghgVAAQgdAAAAA9QgBA9AdAAQAXAAAHgqIAnAQQgOBJg2AAQgjABgVgjg");
	this.shape_22.setTransform(3.4,-26.7,0.205,0.205);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BNQgJgRgBgcIAogFQAFAlAUAAQALAAAGgFQAHgHAAgJQAAgLgIgFQgFgDgUgIQgzgPAAgvQAAgeAUgSQAQgOAYAAQAkAAAPAZQAHAOADAcIgoADQgCgMgDgGQgGgJgLAAQgSAAAAAOQgBAIAJAGIAVAIQAXAHAMALQAVAQAAAhQAAAWgJASQgRAfgngBQgnABgRggg");
	this.shape_23.setTransform(0.3,-26.7,0.205,0.205);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBpIAAhZIg4h4IAvAAIAdBIIAfhIIAuAAIg5B4IAABZg");
	this.shape_24.setTransform(-4,-26.7,0.205,0.205);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BpIAAjRIA8AAQAUAAAIADQAMADAHAKQAOASABAgQgBAogXARQgMAJgaAAIgSAAIAABNgAgSgOIALAAQAKAAAGgCQAKgFAAgQQAAgKgEgHQgFgGgRAAIgLAAg");
	this.shape_25.setTransform(-7,-26.7,0.205,0.205);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9BpIAAjRIA9AAQAUAAAIADQALADAIAKQAPATAAAfQAAAngYASQgMAJgaAAIgTAAIAABNgAgTgOIAMAAQAKAAAGgCQALgFAAgQQAAgKgFgHQgFgGgRAAIgMAAg");
	this.shape_26.setTransform(-10,-26.7,0.205,0.205);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAjBpIgKgoIgzAAIgKAoIgrAAIA6jRIAqAAIA7DRgAgOATIAcAAIgOg+g");
	this.shape_27.setTransform(-13.1,-26.7,0.205,0.205);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYBpIAAhXIgwAAIAABXIgqAAIAAjRIAqAAIAABNIAwAAIAAhNIArAAIAADRg");
	this.shape_28.setTransform(-16.5,-26.7,0.205,0.205);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIALBNIANhMIAVAAIAMBNIALhOIAaAAIgaCJg");
	this.shape_29.setTransform(11.5,10.9,0.205,0.205);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLBQQgDgMAAgaIAAgyIgJAAIAAgkIAJAAIAAgZIAXgaIAAAzIANAAIAAAkIgNAAIAAA9QABAFADAAQACAAAHgEIACAkIgCABQgJAFgGAAQgNAAgFgQg");
	this.shape_30.setTransform(9.8,10.5,0.205,0.205);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_31.setTransform(8.8,11.9,0.205,0.205);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAfBGIAAhMQABgZgJAAQgLAAABAgIAABFIgYAAIgBhcQgDgJgEAAQgIAAgCAOQgBAEAAAPIAABEIgaAAIAAiIIAYAAIAAAPQAJgSANAAQANAAAGAUQAKgUANAAQASAAAGAbQABAJAAASIAABVg");
	this.shape_32.setTransform(7.1,10.9,0.205,0.205);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAyQgKgUAAgeQAAgcAKgVQALgWARAAQATAAALAYQAJATAAAcQAAAcgJAVQgLAXgTAAQgQAAgMgWgAgIgZQgEAKAAAPQAAAQADAJQAEAKAFAAQAFAAAEgJQAEgIAAgSQAAgNgDgKQgDgLgHAAQgEAAgEAJg");
	this.shape_33.setTransform(4.8,11,0.205,0.205);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAyQgJgUAAgeQAAgeAJgSQAJgXATAAQARAAAIAPQAHAKAFAbIgYAHQgDgWgJAAQgMAAAAAiQAAAjAMAAQAJAAADgYIAZAHQgEAXgGANQgKASgRAAQgTAAgKgWg");
	this.shape_34.setTransform(3.1,11,0.205,0.205);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_35.setTransform(1.8,11.9,0.205,0.205);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBaIgGgMIAAAPIgYAAIAAi9IAZAAIAAA+QAIgOAJAAQAPAAAIAVQAIAVAAAcQAAAhgIAVQgJAVgOAAQgHAAgFgHgAgLAXQAAAVAGAJQADAFACAAQALAAAAgjQAAghgLAAQgLAAAAAhg");
	this.shape_36.setTransform(0.5,10.4,0.205,0.205);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTA+QgKgKgFgWQgCgQAAgOQAAgdAIgTQAKgXASAAQAmAAgBBVIgwAAQACAYAJAAQAIAAAEgPIAYAFQgEAUgGAJQgJAPgRAAQgLAAgIgKgAgHgeQgEAHAAAKIAXAAQgCgZgKABQgEAAgDAHg");
	this.shape_37.setTransform(-1.1,11,0.205,0.205);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgLBMIgWAAIgaiJIAZAAIALBNIAMhMIAWAAIAMBNIALhOIAZAAIgZCJg");
	this.shape_38.setTransform(-3.2,10.9,0.205,0.205);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYA+QgFgGgCgIQgDgQAAgQIAAhVIAaAAIAABaQADALAFAAQAEAAAEgLQACgJAAgSIAAg/IAZAAIAACJIgXAAIAAgSQgIAUgOAAQgIAAgGgIg");
	this.shape_39.setTransform(-5.3,11,0.205,0.205);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcBMQgIgXAAgfQAAgjAKgTQAIgQANAAQAJAAAIAOIAAg+IAZAAIAAC9IgXAAIAAgQQgHAUgNAAQgNAAgJgVgAgLAYQAAAUAGAJQADAFACAAQAEAAAEgGQAEgKAAgTQAAgPgDgIQgDgKgGAAQgLAAAAAig");
	this.shape_40.setTransform(-7.1,10.4,0.205,0.205);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUA+QgJgLgFgVQgCgMAAgSQAAgdAIgTQAKgXASAAQAmAAgBBVIgwAAQACAYAJAAQAHAAAFgPIAYAFQgEAUgGAJQgJAPgRAAQgLAAgJgKgAgHgeQgEAHAAAKIAXAAQgCgZgKABQgEAAgDAHg");
	this.shape_41.setTransform(-8.8,11,0.205,0.205);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAXAAIAAArg");
	this.shape_42.setTransform(-10.1,11.9,0.205,0.205);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIAMBNIAMhMIAVAAIANBNIALhOIAZAAIgZCJg");
	this.shape_43.setTransform(-11.7,10.9,0.205,0.205);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgKBMIgYAAIgZiJIAZAAIAMBNIAMhMIAVAAIANBNIALhOIAZAAIgZCJg");
	this.shape_44.setTransform(-14.2,10.9,0.205,0.205);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AALBFIgLhMIgLBMIgWAAIgaiJIAaAAIALBNIAMhMIAVAAIAMBNIAMhOIAYAAIgYCJg");
	this.shape_45.setTransform(-16.6,10.9,0.205,0.205);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AnfAGIAAgLIO+AAIAAALg");
	this.shape_46.setTransform(-20.4,3.2,0.205,0.205);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ai6AIIAAgPIF1AAIAAAPg");
	this.shape_47.setTransform(-12.8,-1.2,0.205,0.205);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkTAFIAAgJIInAAIAAAJg");
	this.shape_48.setTransform(-4.6,-3.3,0.205,0.205);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Am3AGIAAgLINvAAIAAALg");
	this.shape_49.setTransform(-8.6,-3.8,0.205,0.205);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AnyAIIAAgPIPlAAIAAAPg");
	this.shape_50.setTransform(-6.9,-7.4,0.205,0.205);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AmtAGIAAgLINbAAIAAALg");
	this.shape_51.setTransform(-3.1,-9.3,0.205,0.205);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AnaAHIAAgNIO1AAIAAANg");
	this.shape_52.setTransform(-5.7,-9.8,0.205,0.205);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AnfAIIAAgPIO/AAIAAAPg");
	this.shape_53.setTransform(-7,-16.1,0.205,0.205);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ABoD9QifgGhVgtQhmg6g5guQgbgagygXQhjguhvALIgtkLIAiADQArAGAtALQCQAjBuBPIAlAcQAuAhAwAbQCYBVBwgIIAbAAQAhgCAigMQBugjBMh2IDUBKQgfA7g/BEQh/CHijAjQgrAEgxAAIg0gBg");
	this.shape_54.setTransform(13.9,-10,0.205,0.205);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AE3DYQAeghAZgtQAxhbgdg6QgMgbgggZQhBgyhpAIQgRACgbAGQg1ANgxAYQgiARg1ARQhrAghagBQgzAFhJgZQiSg2hsicIDbhvIAoBCQAzBBA9AAIAqgBQA3gHA+gbIB0gjQCFgjBMADIAtAHQA4AKA1AUQCpBABLCNIALAiQAKApgCAvQgGCWiACCg");
	this.shape_55.setTransform(8.3,4.2,0.205,0.205);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("Ah4B5QgzgyAAhHQAAhGAzgyQAygzBGAAQBHAAAzAzQAyAyAABGQAABHgyAyQgzAzhHAAQhGAAgygzg");
	this.shape_56.setTransform(13.3,-15.8,0.205,0.205);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A0C6").s().p("AjZDtIAAi0ID/AAIAAklIC0AAIAAHZg");
	this.shape_57.setTransform(24.4,7.5,0.205,0.205);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgrAwIAAhfIAlAAIAAA6IAyAAIAAAlg");
	this.shape_58.setTransform(-24.2,7.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AjYDtIAAnZIGxAAIAAC0Ij9AAIAAElg");
	this.shape_59.setTransform(-24.2,-24.2,0.205,0.205);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7FC31C").s().p("AAHAwIAAg6IgyAAIAAglIBXAAIAABfg");
	this.shape_60.setTransform(24.4,-24.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("A4wYxMAAAgxhMAxhAAAMAAAAxhg");
	this.shape_61.setTransform(0,0,0.205,0.205);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003366").s().p("Am8GpIAAtRIN5AAIAANRg");
	this.shape_62.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_62}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-32.4,65,65);


(lib.bar1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#246DBB").s().p("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");
	this.shape.setTransform(250.3,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(7.2).p("A+EFAIAAlDQAAiHBFhMQBBhGBmAAMA0xAAAQBmAABBBGQBFBMAACHIAAFD");
	this.shape_1.setTransform(250,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3D9FF").s().p("A+EEvIAAlDQAAiHBFhNQBBhGBmAAMA0xAAAQBmAABBBGQBFBNAACHIAAFDg");
	this.shape_2.setTransform(250,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhqxAAiIAAhDMDVjAAAIAABDg");
	this.shape_3.setTransform(683.5,55,1,1.436);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3D9FF").s().p("EhqxAMJIAA4RMDVkAAAIAAYRg");
	this.shape_4.setTransform(684.7,168.9,1,1.436);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1368.2,280.7);


(lib.b_next2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AofDOQgHgHAAgOIAAlRIiFAAQgMAAgHgHQgGgFABgPQgBgNAGgFQAHgHAMAAIGKAAQAOAAAGAHQAGADgBAPQAAAMgEAGQgHAJgOAAIjRAAIAABOIAHgFQAGgGALAAQAJAAAMAJQBDAyA7BSQANAUABASQAAAPgHAFQgHAHgNgBQgNAAgGgKQgxhMhXhSIgDgDIAADsQABAOgHAHQgGAGgOAAQgNAAgGgGgAEMDMQgJgEAAgMQAAgGADgGQAOgcAIgdQAKgfACgWQAEgRALAAQAKAAAGACQALAFAAANQAAAKgEAVIgCAFQAPAOAPALIAAhoIhNAAQgJAAgFgGQgHgEAAgNQAAgKAHgFQAEgDAKAAICnAAQAKAAAFADQAGAEgBALQAAALgCAFQgGAHgMAAIgsAAIAAAmIAsAAQAKAAAEAEQAFADAAAMQgBAJgCADQgEAHgMgBIgsAAIAAA1QAnALBTgBQAlAAA7gBIA+gCQAKgBAFAGQAEAFABAJQgBAMgEAHQgHAGgPACIiZAAQhDgBgcgFQgogFgmgZQgQgMgRgOQgLAngKAQQgHAIgMAAQgIAAgGgEgAKaCRQgXgPgTgUQgFgFgCgEQgDgFgBgHQABgGADgFIg1AAQACADAAAEQAAAFgEAGQgUAZgiAWQgIAEgHAAQgJAAgIgIQgHgIAAgJQAAgEAGgFIAQgMQAPgKANgNQgfAAAAghIAAiVQAAghAjAAIAfAAIAJgbIhDAAQgKAAgFgFQgGgEAAgOQAAgMAGgEQAEgEALgBIC2AAQALABAEAEQAFADAAANQAAAMgCAFQgHAGgLAAIhBAAIgJAbIAvAAQAjAAAAAhIAACVQgBAighgBIABACQAQAOAUANQAGADACABQAEAFAAAJQAAAIgIAHQgIAHgJAAQgGAAgEgCgAIUAeQAAAJAKAAIBaAAQAKAAAAgJIAAgMIhuAAgAIUgPIBuAAIAAgYIhuAAgAIUhYIAAANIBuAAIAAgNQAAgJgKAAIhaAAQgKAAAAAJgAi9AQQgOAAgIgGQgHgFAAgPQAAgOAHgIQAIgGAOgBIF5AAQAQABAGAGQAHAGAAAQQAAALgFAHQgIAIgQAAgAE3gnQgcAAAAgcIAAh0QAAgcAcAAIB0AAQAdAAAAAcIAAB0QAAAcgdAAgAFHhZQgBAKAMABIA/AAQALgBAAgKIAAgUIhVAAgAFHigIAAARIBVAAIAAgRQAAgLgLAAIg/AAQgMAAABALg");
	this.shape.setTransform(157.5,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEF987").ss(5.3,1,1).p("ACigqQAaAOAAAcQAAAdgaAOIkRCfQgZAPgagPQgZgOAAgdIAAk9QAAgdAZgOQAagPAZAPg");
	this.shape_1.setTransform(50.3,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC223").s().p("AiiDKQgZgOAAgdIAAk9QAAgdAZgOQAagPAZAPIERCfQAaAOAAAcQAAAdgaAOIkRCfQgNAIgMAAQgNAAgNgIg");
	this.shape_2.setTransform(50.3,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F1AD1C").ss(5.3,1,1).p("AU6AAQAACbhvBwQhvBvicAAI9/AAQicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbg");
	this.shape_3.setTransform(133.9,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E17705").s().p("Au/F6QicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACbhvBwQhvBvicAAg");
	this.shape_4.setTransform(133.9,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0B0B0").s().p("Au/F6QicAAhvhvQhvhvAAicQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACchvBvQhvBvicAAg");
	this.shape_5.setTransform(139.2,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApFDcQgHgIAAgOIAAlpIiOAAQgMAAgIgHQgGgGAAgPQAAgOAGgGQAIgHAMAAIGmAAQAOAAAHAHQAFAEAAAQQAAAMgEAHQgIAKgOgBIjfAAIAABTIAGgFQAHgFAMgBQAJABANAIQBHA2A/BYQAOAVACAUQAAAQgIAFQgIAHgNAAQgOgBgHgLQg0hRhdhXIgCgEIAAD9QAAAOgHAIQgHAGgPAAQgOAAgHgGgAEeDZQgJgEAAgNQAAgFADgHQAPgfAIgeQALggADgZQADgSANAAQAKAAAGADQANAEAAAPQgBALgFAVQAAAEgBADQAPAPAQALIAAhwIhSAAQgJABgGgHQgHgEAAgNQAAgMAHgEQAEgFALAAICyAAQAMAAAFAFQAGADAAANQAAAMgDADQgGAIgOAAIguAAIAAApIAuAAQAMAAAEAEQAFAEAAAMQAAAJgDAFQgFAHgNgBIguAAIAAA4QApAMBZAAQAoAAA/gCIBBgDQALAAAGAGQAFAGABAJQgBANgFAHQgIAIgPABIikAAQhIgBgdgGQgrgGgogZQgSgNgSgQQgMAqgLARQgHAJgNAAQgIAAgHgFgALHCaQgYgQgUgVQgGgEgBgFQgFgGAAgHQAAgGAEgFIg4AAQACADAAADQAAAHgEAGQgWAaglAXQgHAFgIABQgKgBgIgIQgIgJAAgJQAAgFAGgFIARgNQARgLAOgNQgigCAAgiIAAifQAAgjAlAAIAiAAIAKgdIhIAAQgKAAgHgGQgGgFAAgOQAAgNAGgEQAFgFAMAAIDCAAQALAAAFAFQAGADAAAOQAAANgDAFQgHAGgMABIhFAAIgKAdIAyAAQAlAAAAAjIAACfQAAAkgjAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAQAOAWAPIAIAFQAFAFAAAJQAAAJgJAIQgIAHgKABQgGgBgFgDgAI4AgQAAAKAKAAIBhAAQALAAAAgKIAAgNIh2AAgAI4gRIB2AAIAAgZIh2AAgAI4heIAAAOIB2AAIAAgOQAAgLgLAAIhhAAQgKAAAAALgAjKARQgPAAgIgHQgIgFAAgQQAAgPAIgJQAIgGAPgBIGTAAQAQABAHAGQAIAHAAARQAAAMgGAHQgIAJgRAAgAFNgqQgfAAAAgeIAAh8QAAgdAfgBIB7AAQAfABAAAdIAAB8QAAAegfAAgAFdhgQAAAMANAAIBCAAQAMAAAAgMIAAgUIhbAAgAFdirIAAASIBbAAIAAgSQAAgMgMAAIhCAAQgNAAAAAMg");
	this.shape_6.setTransform(165.3,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(5.3,1,1).p("AU6AAQAACbhvBwQhvBvicAAI9/AAQicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbg");
	this.shape_7.setTransform(133.6,37.5,1.044,1.044);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("Au/F6QicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACbhvBwQhvBvicAAg");
	this.shape_8.setTransform(133.6,37.5,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleX:1,scaleY:1,x:139.2,y:44.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:50.3,y:38.2}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:50.3,y:38.2}},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{scaleX:1.044,scaleY:1.044,x:139.1,y:44}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2,p:{scaleX:1.044,scaleY:1.044,x:46.3,y:37.8}},{t:this.shape_1,p:{scaleX:1.044,scaleY:1.044,x:46.3,y:37.8}},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.1,81.9);


(lib.b_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoqDcQgGgGAAgPIAAlaIiJAAQgMAAgHgHQgGgFAAgQQAAgNAGgGQAHgGAMAAIGWAAQAOAAAGAGQAFAFAAAOQABANgGAGQgHAJgNAAIjXAAIAABQIAGgFQAHgFALAAQAJAAAMAIQBFAzA8BVQAOAVACASQAAAPgIAGQgHAGgNAAQgNgBgHgKQgyhNhZhVIgDgDIAADyQABAOgHAHQgHAGgOAAIgCAAQgMAAgHgGgAEkDaQgHgHAAgKQAAgOANgHQCrgRBYgxQBLgmANg7QACgLAGgGQAHgDALAAQAPABAHAEQAHAGAAALQABATgTAdQgeA0g/AgQhLAqhsAVQgxALgtAAQgOAAgGgHgAE6BzQgJgGAAgNQAAgEAHgKQAfgkAVgqQADgEAFgBQAEgDAGgBQAMAAAIAFQAKAEAAANQgBAIgIAOQgcAxgSASQgKAQgNAAIgCAAQgJAAgJgHgAHSB3QgIAAgGgFQgGgDgFgGIgCgNQAAgMANgFQANgIAkAAQAGAAAAgGIAAhRIjKAAQgMAAgGgGQgGgGAAgOQAAgLAGgHQAGgFAMAAIA6AAIAAhnQgBgJAIgIQAFgFANAAQANAAAGAFQAJAGAAALIAABnIBVAAIAAiFQAAgJAIgJQAFgFAOAAQAPAAAFAFQAIAHAAALIAAAgICAAAQANAAAFAFQAGAEAAAOQAAALgEAFQgFAHgPAAIiAAAIAAA3ICQAAQAMAAAGAFQAFAFAAANQAAALgEAGQgHAJgMAAIiKAAIAABnQgBAlhOAAgAi+AaQgPAAgHgGQgIgGAAgPQAAgPAIgIQAHgHAPAAIGDAAQAQABAHAGQAHAGAAARQAAAMgGAGQgHAJgRAAg");
	this.shape.setTransform(162.1,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEF987").ss(5.3,1,1).p("ACigqQAaAOAAAcQAAAdgaAOIkRCfQgZAPgagPQgZgOAAgdIAAk9QAAgdAZgOQAagPAZAPg");
	this.shape_1.setTransform(50.3,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC223").s().p("AiiDKQgZgOAAgdIAAk9QAAgdAZgOQAagPAZAPIERCfQAaAOAAAcQAAAdgaAOIkRCfQgNAIgMAAQgNAAgNgIg");
	this.shape_2.setTransform(50.3,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F1AD1C").ss(5.3,1,1).p("AU6AAQAACbhvBwQhvBvicAAI9/AAQicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbg");
	this.shape_3.setTransform(133.9,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E17705").s().p("Au/F6QicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACbhvBwQhvBvicAAg");
	this.shape_4.setTransform(133.9,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0B0B0").s().p("Au/F6QicAAhvhvQhvhvAAicQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACchvBvQhvBvicAAg");
	this.shape_5.setTransform(139.2,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApCDlQgGgGAAgPIAAlpIiPAAQgNAAgHgIQgHgFAAgQQAAgOAHgGQAHgHANAAIGnAAQAPAAAGAHQAGAFAAAPQAAANgFAGQgIAKgOAAIjgAAIAABTIAGgFQAIgGALAAQAJAAANAJQBIA1A/BZQAOAWACATQAAAQgIAGQgIAGgOAAQgMgBgIgLQg0hQhdhZIgDgDIAAD9QABAPgIAGQgHAHgOAAIgCAAQgNAAgHgHgAExDjQgHgGAAgLQgBgPAOgHQCygSBdgzQBOgnAOg+QABgMAHgGQAHgDALAAQAQABAIAEQAHAGAAAMQABAUgUAeQgfA3hCAhQhOAshxAWQg0ALguAAQgPAAgGgIgAFIB4QgKgGAAgNQABgFAHgLQAgglAXgsQACgEAGgBQADgDAHgBQANAAAIAFQAKAEAAAOQAAAIgKAOQgdA0gSATQgLAQgOAAIgBAAQgKAAgJgHgAHnB8QgJAAgGgFQgGgDgFgHIgDgNQABgMANgGQAOgIAmAAQAFAAAAgGIAAhVIjTAAQgMAAgGgGQgHgHAAgOQAAgMAHgHQAGgFAMAAIA9AAIAAhsQgBgJAIgIQAFgFAPAAQANAAAHAFQAIAGAAALIAABsIBaAAIAAiLQgBgKAJgJQAFgFAPAAQAPAAAFAFQAIAIAAALIAAAhICGAAQAOAAAFAFQAGAFAAAPQAAALgEAFQgGAIgPAAIiGAAIAAA5ICXAAQANAAAGAFQAFAFAAAOQAAAMgEAGQgHAJgNAAIiQAAIAABrQgBAnhRAAgAjGAbQgQAAgHgGQgJgHABgPQgBgQAJgIQAHgHAQAAIGUAAQAQAAAIAHQAHAGAAASQAAAMgGAHQgIAJgRAAg");
	this.shape_6.setTransform(163,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(5.3,1,1).p("AU6AAQAACbhvBwQhvBvicAAI9/AAQicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbg");
	this.shape_7.setTransform(133.6,37.5,1.044,1.044);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("Au/F6QicAAhvhvQhvhwAAibQAAibBvhvQBvhvCcAAId/AAQCcAABvBvQBvBvAACbQAACbhvBwQhvBvicAAg");
	this.shape_8.setTransform(133.6,37.5,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleX:1,scaleY:1,x:139.2,y:44.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:50.3,y:38.2}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:50.3,y:38.2}},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{scaleX:1.044,scaleY:1.044,x:139.1,y:44}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2,p:{scaleX:1.044,scaleY:1.044,x:46.3,y:37.8}},{t:this.shape_1,p:{scaleX:1.044,scaleY:1.044,x:46.3,y:37.8}},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.1,81.9);


(lib.影子 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("Ah7AfQgygNAAgSQAAgRAygNQA0gOBHAAQBIAAAzAOQA0ANAAARQAAASg0ANQgzANhIAAQhHAAg0gNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-4.4,35,9);


(lib.星星亮燈動畫5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape.setTransform(0.8,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgtBiQgNgQgBgXQgBgMAHgHQAHgGAKAAQAJAAAGAEQAHAGACAJQACAQAKAAQAJAAACgNIABgWQAAgRgBgHQgDgKgIAAQgDAAgEADIgEAJQgGANgPAAQgLAAgGgGQgJgIABgLIAGhZQABgOAKgHQAIgHAOAAIAwAAQAMAAAGAHQAHAHAAAJQAAAKgGAGQgHAHgLAAIgfAAQgFAAgBADIgBAZQAFgCAEAAQAfAAAPAZQANAUAAAhQAABVg9AAQgdAAgQgUg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAIBxQgIgGABgJIAAgRIgqAAQgMAAgGgIQgIgGABgMQAAgKAEgNIA5iFQAFgRAVAAQALAAAHAHQAJAHAAANIAAB+QAJAAAFAGQAGAHAAAJQAAAKgGAGQgFAIgJAAIAAARQgBAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIANAAIAAgng");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAIBxQgHgGgBgJIAAgRIgpAAQgMAAgHgIQgGgGgBgMQABgKAFgNIA4iFQAFgRAUAAQALAAAIAHQAIAHAAANIAAB+QAKAAAGAGQAEAHAAAJQAAAKgEAGQgGAIgKAAIAAARQAAAJgGAGQgIAFgJABQgKAAgGgGgAgMAiIAMAAIAAgng");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgvBhQgOgRgBgXQAAgOAHgHQAIgIAKABQAIAAAHAEQAHAFABAKQADAYALAAQAOAAAAgcQABgQgIgGQgFgFgIABQgLgBgHgHQgGgHAAgIQAAgKAHgHQAFgHAMAAQAHAAAEgEQAEgFABgNQAAgMgCgDQgCgFgGAAQgHAAgEATQgBAJgGAFQgGAEgIABQgMAAgHgIQgIgIABgNQAHg4A0AAQAbAAAPAWQAOASAAAcQAAAbgOARQAUASAAAhQAAAegOAUQgRAYggAAQgdAAgSgWg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AguBhQgQgRAAgXQAAgOAIgHQAHgIAKABQAJAAAFAEQAIAFABAKQAEAYAKAAQAPAAAAgcQgBgQgGgGQgGgFgJABQgLgBgGgHQgGgHAAgIQAAgKAGgHQAHgHAKAAQAIAAAFgEQAEgFgBgNQABgMgBgDQgDgFgGAAQgIAAgCATQgCAJgGAFQgGAEgJABQgKAAgJgIQgHgIABgNQAGg4A0AAQAcAAAQAWQANASAAAcQAAAbgNARQATASAAAhQAAAegOAUQgQAYghAAQgdAAgRgWg");
	this.shape_1.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape.setTransform(0.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgcB1QgdAAAAgbQAAgWAXgoIAig3QAJgQAAgNQAAgOgJAAQgEAAgDAHIgDAQQgCAKgGAFQgHAGgIAAQgLAAgIgIQgHgIAAgNQACgbANgQQAQgSAcAAQAdAAAQATQANAQAAAbQAAAUgLAXQgHAMgTAbQgSAbgEAOIAlAAQAMAAAGAIQAGAGAAAKQAAAKgGAHQgGAHgMAAg");
	this.shape_1.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.星星亮燈動畫1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19));

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("AAABxQgGgGAAgLIAAiOQgFACgEAAQgLAAgHgHQgHgHAAgKQAAgLAKgJIAdgWQAIgIALABQAXgBAAAcIAAC6QAAALgIAGQgGAGgLgBQgJABgHgGg");
	this.shape.setTransform(-0.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAABxQgGgGAAgLIAAiOQgFACgFAAQgKAAgHgHQgHgHAAgKQAAgLALgJIAdgWQAHgIALABQAXgBAAAcIAAC6QAAALgHAGQgIAGgJgBQgLABgGgGg");
	this.shape_1.setTransform(-0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(1));

	// star
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIg");
	this.shape_2.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).to({state:[{t:this.shape_2}]},3).to({state:[]},3).wait(1));

	// 圖層 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF66","#FFCC00"],[0.329,1],0.1,0,0,0.1,0,27.2).s().p("AiMDSQgWgMACgxQACgwAMgoQhhg9AKglQAKglBAgOQARgEAkgEIACAAIABAAQAJgXAlgzQAigxAXADQAYgFAjAyQAkA0AJAWIgGgBIAHABIACABQAkAEARAEQBAAOAKAlQAKAlhhA9QAMAoACAwQACAxgWAMQgWALgkgHQgkgHgvgxQguAxgjAHQgOADgMAAQgTAAgOgHg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiVDfQgXgMACg0QADg0AMgqQhnhBAKgnQALgoBFgOQARgFAngEIACgBIABAAQAJgXAng3QAkg0AZAEQAZgGAmA2QAmA3AKAXIgEAAIAFAAIABAAQAnAFARAEQBFAPALAoQAKAnhnBBQANAqACA0QACA0gXAMQgXAMgngIQgmgHgyg1QgxA1glAHQgQAEgNAAQgUAAgOgIgAifhYQhAAOgKAlQgKAlBhA9QgMAogCAwQgCAxAWAMQAWALAlgHQAjgHAugxQAvAxAkAHQAkAHAWgLQAWgMgCgxQgCgwgMgoQBhg9gKglQgKglhAgOQgRgEgkgEIgCgBIgHgBIAGABQgJgWgkg0QgjgygYAFQgXgDgiAxQglAzgJAXIgBAAIgCAAQgkAEgRAEg");
	this.shape_4.setTransform(1.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-25,50.1,46.2);


(lib.棍子 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3ED").s().p("Ag3BwIAHgRQgCABgHghQgJgiABgYQAAgXAOgkQAMgeAJgKQAIgJAWgMQAWgMAbARQAaARgMAqQgMAqgjAxQghAzgiAeIgEgJg");
	this.shape.setTransform(38.6,131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFA792").s().p("AhPBtQAigdAjgzQAhgxAMgrQAMgqgagQQgZgRgXAMQgXALgIAKQgJAKgMAeQgOAkAAAYQgBAWAJAjQAIAhABgCIgHARQgIgTgBgNQgCgPAAg9QAAg8AYgiIAFgHQAdgjA0AAQAvAAASAVQAOAQAAAhQAABKhmBaQgfAbglAcQgIgYAEgMg");
	this.shape_1.setTransform(41.4,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AHsssQgvhThoATItAaVQAqBqB0gxIM56O");
	this.shape_2.setTransform(49.3,88.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D9D9D9","#FFFFFF"],[0,1],-29.5,81.3,29.6,-74.4).s().p("AnrMpINA6VQBngTAwBTIAAAAIs5aOQgkAPgdAAQhAAAgdhIg");
	this.shape_3.setTransform(49.3,88.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98.5,176.3);


(lib.阿達兔01嘴 = function() {
	this.initialize();

	// 圖層 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMAqIgdgBIgVgCIgIgBQgJgBgIgGIgDgJQgBgRADgPIACgRIADgLIAHABQAqAEAxACIAXABIABAAIgBASIgBAWIgBALQAAAJgGAHIgCACIgFACIgKABIgNAAIgMAAgAApAkIgEgBQgIABgFgFIgBAAIAAgBIgDgEIgBgCIAAAAIAAgBIgCgEIAAgBIAAgCIgFgXIgDgWQArAAAngEQAdgEAagEIABACIAHAlQADAIgDAIIAAABQgBACAAADIgCABIAAAAQgDAEgEACIgFABIgIACQgWAEgXABIgiABIgLAAg");
	this.shape.setTransform(17.6,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2C0B7").s().p("AAKAUIgEgeIAEAAQArgCAngDIAMgCIARgBIASgEIAAACIAAABIABgCIAHAcIAAADQgaAFgdADQgnAFgrAAIAAgDgAgZAWIgXgBQgxgCgqgEIgHgBIAAgCIACgKIACgLIADgIIBJAGIASABIAXAAIABAHIAAAWIAAACIAAABg");
	this.shape_1.setTransform(17.5,12.8);

	// 圖層 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#603531").s().p("AAIAXIgeAAQhUgBg/gJIgQgDIAAgDIAAgFIAAgCIACgVIAfAFIA6AHIALABIAxADIAQABIASAAIAVAAQApgBAngEIAzgIIAegFIAEAWIAAADIgBAEQglAHg6AFIgtAEIgTAAIgSAAg");
	this.shape_2.setTransform(17.8,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77433E").s().p("AgRA7IgQAAIgxgEIgLgBIg6gHIgfgFIADgbQABgIACgHIAAgBIABgGIAKgtIA7AFIAFAAIAGAAIAfABIAcABIAwAAQAugBAogEQAggDAcgFIADgBIANA6IAJAqIgeAGIgzAIQgnAEgpAAIgVABIgSgBg");
	this.shape_3.setTransform(17.7,16.5);

	// 圖層 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77433E").s().p("AhODsQg+gDg7gNIhigXQg6gNg2gbQhLgmgdgUQgogcgigmQg3g8gahLQgSg0gBg8QAAgKAGgIQAIgFAGAJQAJAPAFAOQAFALAPAZQASAeASAWQAcAhA4AjQAuAdAfAMQBGAXBGAPQAQACAQAFQAoAIApAGIBeAJQAlADAmABQAdABAdgDIANgBIAvgFQA9gIA8gMQASgEBHgbQBQgcAwgYQA+gfA0gnQArghAZgdQANgQAQgXQANgTACgBIAFgDQAGgCAEADQALALgOA+QgEAQgUAsQgcA7gcAhIgiAlQghAignAdQg3AphAAeQgUAJgVAHQiLAxiTAJIhtABIgRgBgAntBNQAzAkA5AWIArAPQAsAPAtALQAwALAwAJQAoAFAmADIA2ADIAZAAQAqAAApgEIBGgKIBJgPQBCgPA+gbQAvgUAqgbQApgbAfgmIAEgHQAHgJAFgJQAKgZgYgIQgYAIgXAKQgRAHgPAJIgBAAIgxAUQgZALgaAJQgcALgbAHQgdAJgeAFQgeAJgfAGIg6AIIg3AFIhYAAQh7gBh5gVQiDgVhyhBIgFABIgGABQgGAGABAJQABAMAIALQALAQAOAPIgNgJIAeAXg");
	this.shape_4.setTransform(18,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#984A4A").s().p("AgTB5Ig2gDQgmgDgogGQgwgIgwgLQgtgMgsgOIgrgPQg5gXgzgiIgegXIANAKQgOgPgLgQQgIgLgBgMQgBgKAGgHIAGgCIAFgBQByBECDAUQB5AUB7ABIBYAAIA3gFIA6gIQAfgEAegJQAegFAdgJQAbgHAcgLQAagJAZgLIAxgXIABAAQAPgIARgIQAXgJAYgIQAYAIgKAYQgFALgHAKIgEAGQgfAngpAZQgqAbgvAUQg+AbhCAPIhJAPIhGAJQgpAFgqAAIgZAAg");
	this.shape_5.setTransform(17.4,10.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.8,-21.9,137.7,47.5);


(lib.白吃兔01頭 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AkJK7IgsgGIgCAAIgLgCIgRgFIAAABIgDgDQgRgDgQgGIgwgVIgZgOQgFgDgDgDIgKgFIgCAAQgJgEgCgEIgBgBIgEgCIgBAAQgOgGgDgGQgbgUgagWIgogkQgUgTgSgUQgvg3gnhAQgig7gVhBQgVhBgGhFQgGhGAHhEQAHhFAUhCQAUhBAfg8QAhg+Arg1QAvg8A3gzQA3gyBBgmQA0geA3gWQA2gWA6gOQA2gKA4gEQA2gHA0gBQA3AHA2ALQBKAMBHAbQBCAXA+AgQA+AgA5AnQA6AmAzAvQAyAuAoA3QAgAsAaAwIAJASIhBhfIAeAxQAcAwANA1IAMA1QALAvgCAwQgBAbAAAZQABA4gQA2QgOAugWAqIgbAyQgXAwgjAqQgkApgsAjIg3AuQgtAmg1AZIgPAHQgeAYglASQhZAtheAbQgYAHgWACQh5Aih6AAQhIAAhKgMg");
	this.shape.setTransform(48.1,70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6BDAA").s().p("AlEIYQgEAAgDgCQgMAAgMgDIgLgDIgPgCIhGgOIgLgCIghgIIgYgGIgLgDIgQgEIgTgGQgGgCgCgDIgBgBIgBABIgmgRQAQAGARADIADADIAAgBIARAFIALACIACAAIAsAGQDHAfDAg1QAWgCAYgHQBcgcBZgsQAlgSAegYIAPgIQA1gZAtgmIA3gtQAsgkAkgpQAjgpAXgwIAbgyQAWgpAOgtQAQg2gBg5QAAgbABgaQACgxgLgvIgMg1QgNg0gcgxIgegwIBBBeQAdAtASAzQASA1AGA4QAEAzgCAxQgCAygLAyIgHAcIgCAEIgCAJIgBABIAAAAIgBABIAAABIgIAYIgCAGIgBACIgIAVIgIATIAAAAQgBAGgDADIgLAWQgMAZgOAYQgeAzgmArQgXAagYAYQgoAngvAdQgxAgg3AbIgpAVQgaAOgbALQgrASgrANQglALgoAKIgBgBIgXADIAAABIgBABQhPANhQAAQgwAAgwgFgAoqHjIAAgBIgBAAIABABg");
	this.shape_1.setTransform(71.9,92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CEC7B6").s().p("AAAAAIAKAEQADAEAEADIgRgLgAgRgKIAFACIABACIgGgEg");
	this.shape_2.setTransform(1.4,133.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E2D3").s().p("AAbAJIgMgDIAZAGIgNgDgAgTgGIABAAIABAAIgCAAgAgmgLIAAAAIABABIgBgBg");
	this.shape_3.setTransform(18.3,141.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.3,-0.5,165.8,146.7);


(lib.白吃兔01嘴 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BB5C6").s().p("AgJAJQgFgBgDgFIgBgBIAAgBIAAgBIAPAAQAGABAHgDIAAgCIAAgCIAAgCIgBgBIABgBIABAAIABgBIACABIABAAIAAAAIABAAIAAABIABACQAHALgNAFQgFADgGAAQgFAAgEgDg");
	this.shape.setTransform(17.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAJIgPAAIgBgDIAAgEIAAgCQABgDAFgDIAHgCIABgBQAMgBAIAJIgBAAIgCgBIgBABIgBAAIgBABIABAAIAAABIAAACIAAACQgGAFgHAAIAAgBg");
	this.shape_1.setTransform(17,16.4);

	// 圖層 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#984A4A").s().p("AgCA9IgUgDQgTgEgRgLQgPgKgHgOQgJgOACgPIAAgCIgBAAIABgGIAAgDIABAAIAAAAQARgSAYgHIAIgDQAbgIAagDQAQAAAQACQAGABAGADIAAAAIACABIABABIAFAIIABABIACADIABACIAGAKIAHAOQAIARgHASQgGAPgOAKQgIAHgLAEIgeAEIgTAAg");
	this.shape_2.setTransform(10.7,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2C0B7").s().p("AgiAQQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIADgFIAGgFIAGgDIAGgDIABAAIABACQADAGgHAGQgGAGgHAAIgEgBgAADAEIgBgBIgCgCIAAgGIAAAAIAAgEIAAgCIAOgDIAJgBIAMgBIAAABIAAADIABAEIABAIQAAABgCACIAAgBQgDAEgGABIgGAAQgJAAgIgDg");
	this.shape_3.setTransform(7.4,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("AhCANIALgNQgBAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAKACAIgFQAHgGgDgIIgCgCQAIgEAJgDIAAAFIAAAAIAAAHIACADIABABQAKAEALgCQAGAAADgEIAAABQACgCAAgEIgBgIIgBgDIAAgDIAEAAQALACAKAEQAQAFANAOIAEAFIgBAAQgFgDgGgBQgQgCgRAAQgcADgZAGIgIADQgYAIgQARIgBAAQACgKAFgIg");
	this.shape_4.setTransform(9.4,5.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,2.7,17.9,15.9);


(lib.白吃兔01鼻 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAJQgCgDAAgDQABgGAHgEQAGgEADgBIAEABIAEABQADABACADIABADQAAADgDACIgPAKIgEABQgEAAgDgEg");
	this.shape.setTransform(3.9,3.8);

	// 圖層 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4968C").s().p("AgjAjIgFgGQgRgRgDgeQAFgLAMgCQA0gPAzARIgBAAIgCABQAHAGgFAIQgFAOgJAIIgJAKIgLAHIgLAHIgGACIgLADIgOAAIgKgBIgCAAIAAABIgBACIgFgEg");
	this.shape_1.setTransform(6.2,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#C0695C","#A8665B"],[0.353,0.757],-1,-0.7,0,-1.1,-0.6,8.9).s().p("AgXAoQgIgBgJgDQgHgDgEgFIABgCIAAgCIACAAIAKACIAPgBIAMgCIAHgDIAIgHIALgHIAJgHQAKgLAEgOQAFgHgGgHIABgBIABAAIABABIABAAIACABQAFAEACAGQACAFAAAGQgBAGgDAGIAAACIAAABIgBAAIgGAJIgIAKIgBABIgOANIgJAFQgJAEgGABIgIACIgJgCg");
	this.shape_2.setTransform(8.3,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D78E82").s().p("AAAASIAHgKQgFAMgIAIIAGgKgAABgcIABABIABABIgCgCg");
	this.shape_3.setTransform(12.3,4.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.1,13.5,9.3);


(lib.白吃兔01絡腮鬍 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DBB8AC","rgba(226,177,160,0.702)","rgba(200,174,155,0)"],[0.094,0.71,0.961],1.6,0,0,-0.4,0,23.8).s().p("AigCuQhHhGgFhjQgFhiBDhJQBEhKBlAAQBjAABIBKIADADQBEBIAABhQAABkhFBFQg9A8hVAGIgRAAQheAAhHhDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-24.2,47.5,48.4);


(lib.白吃兔01肚 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AAJHWIgigCIgmgDIgZgDIgkgFIgkgHIgYgHIgkgKIgjgMIgkgOIgbgMIgagOIgagOIgYgPQgQgKgPgNQgOgNgNgOQgLgOgOgLIgFgFQgHgJgEgMIgJggIgJgeIgGgbIgDgaIgCgbIgBgmIABggIADgjIACgPIABgNIABgFIAAgFIACgJIAAgDIABgFIADANQAMgOAFgUQADgNAFgMIAAAAIADgIIAkiBQAJggALgdQgGgGgJADIgLAEIgCABIgCABIAAAAIAAgCIACgHIABgBIAFgQIAIgaIAIgaIAIgaIAEgOQAIgRAGgUIAIgWIgBAHIgSAvIAFgCIAZAQIAaAQIAYAOIAiARQAQAJASAIIAjAQIAjAOIAjANIAVAHIAVAGIAVAGIAWAGIAWAEIAWAFIAYACIAWABIAmABIAlAAIAcgEIAcgEIAcgGIAbgJIAcgHIAbgGIAbgGIAcgBIAcABIAbAFIAbAHIAbAHQASAFARAHQAPAFARACIAZBJIAEAVIAFAlIAEAfIACAhIAAAVIAAAWIgCAWIgCAUIgGAjIgHAcIgIAcIgKAaIgLAaIgMAaIgOAcIgPAbQgIAPgOAQQgLANgRAOIgeAZIgfAYIggAWIgVAPQgQALgRAIQgQAKgTAJIgVAJIgWAKIgWAIIglAJQgUAEgUACIgbACIgbAAgAmQmNIAJAGIgJgJIAAADg");
	this.shape.setTransform(-1.6,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A29886").s().p("AiHFqQgqgHgpgNQgqgKglgUQgwgXgqgkQgogjgigqQgjgrgWgyIAFAFQAOAMALANQANAPAOANQAPAMAQALIAYAOIAaAPIAaANIAbANIAkAOIAjAMIAkAKIAYAGIAkAIIAkAFIAZACIAmAEIAkACIAZAAIAbgDQAUgCAUgDIAlgJIAWgIIAWgKIAVgJQATgKAQgJQARgIAQgLIAVgPIAggXIAfgXIAegaQARgNALgNQAOgRAIgOIAPgbIAOgcIAMgYIALgaIAKgaIAIgcIAHgcIAGgjIACgWIACgWIAAgXIAAgUIgCgiIgEgeIgFglIgEgWIAMApIAAABIACAGIAAABIAAAAIABAAIADAOIAHAgIABABQAHAiAFAiIAFAmQAFAwgEAyQgEAygJAvQgJAygbArQgbArgkAmQgUAWgWATQgWATgXASQgqAggwAVQgsATgvALQgrAKgqAGIhdAEQgvgFgvgJg");
	this.shape_1.setTransform(1.9,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AFA792").s().p("AgqB1IAAgBIAAgBIAAgCIABgCIAAgDIADgIIAAgKIAAgDIADgRIAAgFIAFgTQAMgyAOg0IAFgbIAMgnIACgBIACgBIALgEQAJgDAGAGQgLAdgJAgIgiB/IgCAHIgBABQgFAMgDANQgFAUgMAOg");
	this.shape_2.setTransform(-48.6,-16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFB69F").s().p("AAQBtIgjgBIgYgBIgZgCIgWgFIgVgEIgWgGIgVgGIgWgGIgVgHIgjgNIgjgOIgigQQgSgIgRgJIghgPIgZgOIgZgQIgZgQIgGACIATgvIABgHIABgGIAIAGQAIAHAKAEIAuAVQAbANAbAKQAbAKAbAHQAbAIAeAGQAdAGAbAEIAmAFIA5ABIAlAAIAjgBIAlgEIAlgGIAkgHIAkgJIAjgLIAkgLIA3gVIAbgNIAcgLIAPAhIACACQAKARAHARIAMAXIAKAUIAOAjQAGAIAEAKIgDgEIAFAMQADAGACAFIABADIABABIABADIAAAAIADAIQgRgCgPgFQgSgHgSgFIgbgHIgbgHIgbgFIgcgBIgbABIgcAGIgbAGIgcAHIgbAJIgbAGIgcAEIgdAEIglAAg");
	this.shape_3.setTransform(1.7,-35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9C1AF").s().p("AgDgBIAAgCIAHAHIgHgFg");
	this.shape_4.setTransform(-41.3,-38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7AF9D").s().p("AAaBLIAAgCIABAEIgBgCgAgQg1QgBgGgEgFIgFgMIADAEIAIAWIgBgDg");
	this.shape_5.setTransform(48,-21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7E1D3").s().p("AoEAgIABgDIABgIIAAAKIgDAIIABgHgAIFglIAAgBIABABg");
	this.shape_6.setTransform(-1,-9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F8F8F5","#9E9DA3"],[0.643,1],-28.4,-55.5,0,-28.4,-55.5,63.5).s().p("AAMACIgLgCIABAAIAKABIADACIABABIgEgCgAgPgDIABAAIAKABIgLgBg");
	this.shape_7.setTransform(30,-57.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-57.6,108,115);


(lib.白吃兔01左腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDC6B6").s().p("AhHEXQgRgJgQgNIAZg0IAOgeQANgZAJgcQAIgcAMgbQAKgZAIgZIAKghIAPg1QAJgcAEgdIAIg0QAEgbAAgZIABgCIAUgfIAJgNIAPgIIALAFIACAgIABAgIgBAgIgCAfIgCAfIgGAfIgGAeIgHAfIgJAdIgLAeIgKAeIgLAeIgMAdIgNAdIgNAdIgNAcIgPAcQgLAUgMATIgDAEIgCADIgFAGQgFgCgGgEg");
	this.shape.setTransform(31.2,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACA595").s().p("AgJCMIgPgrIgIgZIgBgBIgBgBIAAAAIgQhGIgHgZIgBgFIgBABIgEgKIgCgQIACgBIAGgDIAQgIIAOgIIANgHQAMgGAJgJIAggXIAAABIAAABIABgBIACgEIADgBIACgBIAAABIACgEIAHgFIAKgIIAAACQgDANgJAQQgnBBgQBHQgOA5AHA7IgBgCg");
	this.shape_1.setTransform(6.8,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3DCCC").s().p("AhDEgQgcgCgXgMQgDAAgCgCIgDgCIgBgBIgFgCQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAAAIgBABIAAABIAAAAIgFgGIgFgPQgHg6AOg5QAThJAmg/QAJgQADgNQAwgnAoguQBChIA3hQIAMgRQAAAZgDAcIgIA0QgFAcgIAcIgQA1IgMAkQgIAZgKAXQgMAbgIAcQgJAbgMAZIgPAeIgYA1QAQANAQAJQAGAEAFABIAFgFIgDAEQAGAHAEAJQAFAMgBAOIAAACIAAADQAAAFgBAEIgCACIABgDIgBgCIgBABIgBgBIgCACQgWAHgYABIgXAAIgygBg");
	this.shape_2.setTransform(20.7,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A917E").s().p("AAHAVQgKABgMgCQgRgCgPgFIgHgDQgJgCgJgHIgFgBIgMgKIgCgCIgBgBIgEgFIAAgBIAAgBIABgBQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIAEACIACABIACABQADACACAAQAYAMAcABQAjABAlAAQAZgBAVgGIADgBIABABIAAgBIABACIgBACIgDACIgBAAIgBABIAAABIgFAEIgBABIgBABIgDABIgCABIgDABIgBAAIgEABIgBAAIgDABQgHABgGADIgCAAQgTADgUABIgGAAg");
	this.shape_3.setTransform(16.6,63.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCC4B3").s().p("AABgDIADgCIgHALIAEgJg");
	this.shape_4.setTransform(38.3,1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,41.6,65.2);


(lib.白吃兔01左眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAXQgpgOATgbQACgEAEgBQAjAJgCAbQgBALgKAAIgGgBg");
	this.shape.setTransform(29.9,-1.2);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],-0.6,-1.5,0,-0.6,-1.5,8).s().p("AggA7QgWgMgFgaQgGgYAOgZQAOgZAZgJQAWgIAWAMQAXAMAGAaQAFAYgOAZQgNAYgZAJQgLAEgIAAQgOAAgNgHg");
	this.shape_1.setTransform(11.7,7.4);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],-7,-5.8,0,-7,-5.8,27.4).s().p("AhiCsQgpgKgXgjQghgxAKg/QAMhFAygxQA0gyBFgSQBCgSA7AhQA8AsAEBMQAEA/gnA2QgpA6hCAYQgrAPgqAAQgdAAgdgGg");
	this.shape_2.setTransform(20.7,12.3);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#624340").ss(3,1,1).p("Ai4AkQAChEAug2QBAhKBdgQQCSgJARCFQAJBFgqA9QhJBoh+gEQiNgJAFiFg");
	this.shape_3.setTransform(21.2,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#624340").s().p("AgwCyQiNgJAFiFQAChEAug2QBAhKBdgQQCSgJARCFQAJBFgqA9QhGBkh3AAIgKAAg");
	this.shape_4.setTransform(21.2,13.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-5.5,38,37);


(lib.白吃兔01左耳 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D19287").s().p("AA3C6Igkg0QhXiBhKiIQgLgVgJgVQgFgNgBgNIAAgaQABgSAPgIIAVADIAEAFIAdAbQAdAdAVAjIAVAlIAcA4QASAiARAiIAfA9IAVAqQAkBCAtA9IgNACQgbADgZAIIgxhCg");
	this.shape.setTransform(2,29.9);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE9DC").s().p("ABcJMIgog4Iglg5Qgegygeg0QgmhBghhFQg1hwgoh5QgWhCgRhFQgNg1gLg1QgEgVgDgWQgDgWAAgWQgBgsADgrQACgsAKgnQALgqAPgmQANgeAQgdIAJgDIAAAAIAJgGIAJgDIABAAIgIAEIgDADIgBACIACgBIADgBQAVAXAOAgIAOAeIAkBHIANAZQAzBrAtBtQAYA5AUA6IADABQAiBaAeBaIADAIIAJAVIABABIADAMQABAGADAGIAPA1QAKAgANAfQAVBWAbBTQAEAZAIAYQANAoAIApQAHAlAPAjIAHAEIACABIgSACIgsAIQgdAGgbAIQgRAGgJAJIgIACIgng4g");
	this.shape_1.setTransform(-4.5,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A29884").s().p("ADiJvIgCAAIgHgEQgPgjgHgmQgIgogNgoQgIgYgFgZQgahUgWhVQgMgfgKggIgPg2QgDgGgBgFIgDgMIgBgBIgJgVIgDgJQgehZgghaIgDgBQgUg6gYg5Qgvhug0hqIgMgZIgkhHIgOgeQgOgggVgXIgDABIgCABIABgDIADgCIAIgEIACgBIAAAAIAEAEIAGAHIAJAMQALAIAJAKIAMAOQAYAgAWAiIAcArIAbAuIAaAtIAdA3QAVApAQAsIAWA6IAiBdIALAfIAUA1QASA3AQA4QAYBQAWBQQAXBRAUBTQAWBaATBaIgIgBIgGABIgEACIgEAAIgHgBg");
	this.shape_2.setTransform(1.1,-9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5DED0").s().p("AgBgCIABACIACADIAAAAIgDgFg");
	this.shape_3.setTransform(-22.3,-70.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-71.6,59.7,129);


(lib.白吃兔01左手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AAACuIgggBIgigFIgkgGIgkgHIgkgIIgkgIIgigIIgigJIghgLIgUgIIgIgCIgGgDIgEgEIgHgDQgEgIgFgGQgKgKgFgNQgDgHABgGQgEgMABgOQACgSAOgNQAWgTAdABIAzAHIAiAFIAoAHIA4ADIAlAAIAigBIAigGIAfgHIAdgJIAdgMQAbgLAZgOQAZgNAYgPIAZgRIAdgQIAegQIAagLQAOgIASgFIAKAAQAcADATATQASAVAIAcQADALAAALQgCAagGAZQgDAPgFAOQgTAVgXATIgrAjIgdAVIgfASQgXAOgYAKQgXAMgYAHIggAKIgiAEIghADIggAAg");
	this.shape.setTransform(-0.1,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFA792").s().p("AAQBnQhHgEhHgQQhCgMhAgZIg6gXIgagNIgCgBIgFgDIgKgJIAGADIAIAAIAUAIIAiALIAiAJIAiAIIAkAIIAjAIIAkAHIAkAGIAiAFIAiABIAfAAIAggDIAjgEIAggKQAYgHAXgMQAYgKAXgOIAegQIAdgVIArgjQAXgTATgXQgcBEgyAwQg1A0hJAVQg7ASg9AAIgSgBg");
	this.shape_1.setTransform(1,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E1D3").s().p("AAHAEIgQgHIAZALIgJgEgAgNgGIgCgBIAFADIgDgCg");
	this.shape_2.setTransform(-32.1,10.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.8,-19,77.3,38.2);


(lib.白吃兔01右腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDC6B6").s().p("AhHEXQgRgJgQgNIAZg0IAOgeQANgZAJgcQAIgcAMgbQAKgZAIgZIAKghIAPg1QAJgcAEgdIAIg0QAEgbAAgZIABgCIAUgfIAJgNIAPgIIALAFIACAgIABAgIgBAgIgCAfIgCAfIgGAfIgGAeIgHAfIgJAdIgLAeIgKAeIgLAeIgMAdIgNAdIgNAdIgNAcIgPAcQgLAUgMATIgDAEIgCADIgFAGQgFgCgGgEg");
	this.shape.setTransform(31.2,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3DCCC").s().p("AAlEmIACgBIADgBIABgBIADgBIABgBIACAAIAEgFIABAAIABgBIAAgBIAEgDQACgDgCgDIAAAAIgBAAIgDACQgWAHgYABQgjABglgCQgdgCgXgMQgDAAgCgCIgDgCIgBgBIgEgCIgFgCQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIAAAAQgJgLgGgNIgEgLIAAgBIABgFIABACIACgdQABg3ARgyQASgyAagtQAGgLAAgIQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQAEgDgFgCQA2gpAsgzQBChIA4hQIALgRQABAZgEAcIgIA0QgFAcgIAcIgPA1IgNAkQgHAZgLAXQgMAbgIAcQgJAbgMAZIgPAeIgYA1QAQANAQAJQAGAEAFABIAGgFIgDAEQAFAHAEAJQAGAMgCAOIAAACIAAADIgBAJIgBACQgIAKgLAFIgDABIgEABIADgBgAhXgaIAAAAIAAABg");
	this.shape_1.setTransform(20.4,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACA595").s().p("AgVByIAAgDQgCgFgBgHIgBgEIgWhdIgFgYIgBgFIgDABIgCgJQgDgJAAgIIACgBIAHgDIAPgIIAPgIIAPgJQAFgFAFgEQANgJANgKIAOgKIAAADIAAABIABgBQACgEAFgCIAAABIAAAAIAAgBIAEgGIABgBIABACQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIABABQAEACgDADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAIgGALQgaAvgSAyQgQAwAAA4IgCAcIgBgBIgBAEQgDgIgFgHg");
	this.shape_2.setTransform(6.4,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A917E").s().p("AAHAWIgWgBQgRgCgPgFIgHgDQgJgCgJgHIAAAAIgFgCIgMgJIgCgCIgBgBIgEgFIAAgBIgBgBIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEACIAEACIACABIACACQADACACAAQAYAMAcAAQAjACAlgBQAZgBAVgFIADgCIABABIAAgBQADADgDADIgDABIgBABIgBABIAAAAIgFAFIgBABIgBAAIgDABIgCABIgDABIgBABIgEABIgBAAIgDABIgNAEIgCgBQgTAEgUABIgDAAIgDAAgAgCASIAAAAIgCAAIACAAg");
	this.shape_3.setTransform(16.6,63.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCC4B3").s().p("AiLCfIABgBIgBABgACJicIADgCIgKANIAHgLg");
	this.shape_4.setTransform(24.8,16.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,41.6,65.4);


(lib.白吃兔01右眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAOQgLgaAggLIADACQAaATgfAVQgEAFgFAAQgHAAgDgKg");
	this.shape.setTransform(5,6.8);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],1,-1.5,0,1,-1.5,8.2).s().p("AgrA0QgZgNgDgaQgEgXAUgVQATgWAegGQAcgGAXAOQAYANAEAZQADAYgSAVQgTAWgeAGIgPACQgUAAgRgKg");
	this.shape_1.setTransform(18.7,-1);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],5.1,-4.2,0,5.1,-4.2,29.3).s().p("AhmC8QgsgLgYgmQgig2ALhFQAMhMA0g1QA3g3BIgTQBFgUA/AlQA+AwAFBTQAEBEgpA8QgrA/hFAaQguARgtAAQgdAAgegHg");
	this.shape_2.setTransform(19.7,11.9);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBB8AC").s().p("AguFLIgrgEIgngHQi2gvgWiuQgDgPAAgNIgBgNIAAgGQgBhUAthIQBYiiDBg4QAfgHAegBIAHAAQEqgRgTFGQgDAGAAAIIgGAoQgZByhWBUQhuBdh5AHIgRABIgOgBg");
	this.shape_3.setTransform(22.2,15.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-17.3,67.5,66.6);


(lib.白吃兔01右耳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#822F29").s().p("AA7B5IgHgKQg8hOgph2IgMgmIACAEIAKAUQA6CDA2BcIgEgDg");
	this.shape.setTransform(43.9,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#924037").s().p("ABiDDIAAgBIgBgCIAAAAQgEg7gUg4QgIgZgKgXQgchFgsg/QgggrgqgiIgDACIAAAAIgLgHIABgCIABgBIgBAAIAFgDIAEgCIAGgBIAGAAIADADIAYATQATASASAVQAQATAMAWIAgA9QAPAfAOAeIACAGIAIAVIABADIAHAbIAEAVQADAIACAJIAGAiIABAEIACAdIAAAAIgCABIgCABIgCABIgCAAgAA6BDIABADIABACIgCgFg");
	this.shape_1.setTransform(49.5,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A75F52").s().p("AA2CnIgDgDIgHgIIgSgaQgDgFgCgFIgJgMIADADQg0hcg7iDIgLgUIgDgKQgLgqAegLIgFACIABABIAAAAIgBACIAKAHIAAAAIADgBQAqAhAgArQAsA/AdBFQAKAYAHAZQAUA3AEA8IAAgBIABADIgDAAIgBABIgDABIgBAAIAAgBIgRAEIgEACQgNgPgKgPgABEBDIAAgBIgCgDIACAEgABvC+IABgBIACgCIAAADIgCAAIgBAAgABvCbIgGgjQgBgIgDgJIgFgUIgHgbIAEALQAOAtAFAuIgBgDgABOAZQgNgegQgeIgfg9QgPgWgOgUQgRgUgUgSIgYgUIAGACQAzAlAeA3QAoBCAaBEIgDgHg");
	this.shape_2.setTransform(48.7,45.1);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A79D8B").s().p("ABvH6IgRgXIAAgBQh7ithLjMQg8ihgYimIgGglIgFg0QgIheAAhdIABgsIAAgBIAAABIACADIABgEIABAFIABACQAKARADAZQADAbAIAaIABAHQAFAMACAPQACAQAEAQIAHAWIACADQAEAMADALIAUBFIACAJIAHAaIALAdIAVA/QAdBVAoBNQAjBGAoBDIACADQAGAGADAGQAeAiAYAoQAcAtAQAyQAGAIADALIABAEIAEANIAHARQAOAfADAhIADA8IgCABQgPACgOADIgEABIgBAAIAAgBIAAAAIgBAAIgBABIgEABIgBAAIgPAFIgJACIgegmgABwEDIACADIgEgGIACADgAAaCJIABABIAFAGIgFgIIgBABg");
	this.shape_3.setTransform(39.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3CEBE").s().p("AC+IaIADgBIgDg8QgDghgOgfIgHgRIgEgNIgBgEQgDgLgGgIQgQgygcgtQgYgngegjQgDgGgGgGIgCgCQgohEgjhGQgohNgdhVIgVg+IgLgeIgHgaIgCgJIgUhFQgDgLgEgMIgCgDIgHgWQgEgPgCgRQgCgPgFgLIgBgHQgIgbgDgbQgDgZgKgQIgBgDIgBgFIgBAFIgCgDIAAgCIAAgDIABgCIAAgBIABgBIADAAIADAAIABAAIAEACIADgBQCBBoBOCKIAAAAQADAKAHAKIAHAMQAHAMAGANIADAEQANAdANAfIASAvQAZBBAWBCQAYBMAQBOIAEAPQAAANAFANIAFAQIAEAPIACANIAHAhQAaCCACCDIg7AKQAOgDAOgCg");
	this.shape_4.setTransform(41.2,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D0BE").s().p("AApA7IgBgCIAEAGIgDgEgAgpg7IgBgCIABgBIAFAIIgFgFg");
	this.shape_5.setTransform(46.7,30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBD5C4").s().p("AABAMQgCgMgBgMIgDgPIALA3IgFgQg");
	this.shape_6.setTransform(58.6,28.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.9,-44.2,44.6,109.7);


(lib.白吃兔01右手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AkLDEIgHAAIgQgBIgQgDIgDgBIgZgBQgOAAgOgDIgHgCIgEADQgBAIAIADIgOgFQgQgMgJgQIABABQgDgEgBgFIgCgDIgBgBIgBgDQAAgDADgCQAPgPAagGIA5gNQANgGANgDQAVgGAVgIIAogQIgHgIQA1gIAzgOQBigSBSgxQBPgwBHg9QArglAzgaIABgBIAMgDQAMAAAMACQAXAIARAZQAMARAFATIABAQQgCASgHAUIgHAQQAAgHgIABIgKATIgPAVQgLAOgOAMIgEAGQghAogrAcQgoAagpAWQhFAkhLATIgdAHIg7AKIg/AFIggAAIgGAAIggABQgoAAgogFgAmRCsIABgBIgBgBIAAACg");
	this.shape.setTransform(0.3,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC7B6").s().p("AhaAzIABABIgBABIAAgCgAheAwIgCgEIgEgJIABABIABADQACAFADAEIgBAAgAhpASIAAgEQAAgKABgFIADgOIACgDIAJgKIAIAAIAdgHIApgFIA4gFIA3gHIAHAIIgoAQQgVAJgVAFQgOAEgKAFIg5ALQgaAGgPAQQgEABABADIgEgOg");
	this.shape_1.setTransform(-30.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AFA792").s().p("AjACbIgsgGIgsgJIgTgEIg4gSQgIgGgKgBIgBAAIgDgBQgIgEAAgIIAFgCIAGABQAOAEAPAAIAZAAIADABIAPADIAQACIAHAAQA4AGA5gCIAGAAIAgAAIA+gFIA9gKIAcgIQBKgTBFgjQApgWApgYQArgcAggoIAFgGQANgOAMgPIAOgUIALgTQAHgBABAGIgEAJIgGAGQgFANgIAMQgOAVgKAWIgFAIQgTAXgUAVQgPAOgRAOQgQAOgRAOIgkAZQgSAMgUAKQgTALgUAJQgUAJgVAHQgVAHgWAEIgpAKIguAFIguADIguABIguAAg");
	this.shape_2.setTransform(1.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E1D3").s().p("Al0B8IgFgCIABABQAKABAIAGIgOgGgAFnhiQAIgMAFgNIAGgGQgRAogaAjQALgWANgWg");
	this.shape_3.setTransform(1.8,5.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-22.3,83.1,44.7);


(lib.按鈕_底 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDCB04","#FFFFFF"],[0,1],315.5,-27,315.6,23.4).s().p("AuCENQhfAAAAhaIAAlmQAAhZBfgBIcFAAQBfABAABZIAAFmQAABahfAAg");
	this.shape.setTransform(104.9,30);

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FDCB04","#FFFFFF"],[0,1],-332.8,30.2,-332.9,-25.9).s().p("Au0EsQhkAAAAhkIAAmPQAAhjBkgBIdpAAQBkABAABjIAAGPQAABkhkAAg");
	this.shape_1.setTransform(105,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,60);


(lib.白吃兔01扭肚 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AjyHUQiMg+hbh7QhOhrgBiEQgBhbAMhdIAcgbIAJiAIAFgJQAKgTABgRQAghAAmg7IAjg2IgCgGQAngBAkAQIBVAoIA5AUQA4ATA5ASQBNAYBUAHIBsAFIA2ADQAngFAlgIIAEAAQAaACAegKQAKABAOgEIAsgPIAAABIgBgBIgCABQgDAVAAAYQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABIABAFIABAUQAFBQgjBBQgmAwg7AaQgMALgWAIIgfALIAmAQQA0AbAsAiIAJAHQB2BeARCAQgFgWgHgUQgMghgRgcQgSgagWgYIgEgFQgZgagcgSIgZgRIgbgOQgcgOgbgKQgfgJgcgFQgdgGgagBIgYgBIgrABIggAEQggAHgeAMQgdAJgYAQQgdAMgXAVQgaATgWAaQgWAXgQAcQgNAUgIAVQgIAWgFAXQgIAaABAfQgBADABAEQAAAjAJAlQAGAfAPAeQANAdAVAbIAVAbIAoAnQhWgUhSgkg");
	this.shape.setTransform(76.6,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA8675").s().p("AhxBfIgRAAIgSAAIgQgBIgRgCIgQgDIgQgCIgQgCIgFgBIgLgGQgcgQgQgOIgEgEIgDgCIgEgDIgBgBIAiAGIAWADIApAEIASABIAvADIA5AEIAmgCIAYgCQAdgFAggHQAegLAdgIIAlgRIA6gcIA1ghQAPgLARgJIAVgTIABgBQgTApgaAnIgPASIAAABIgMAIIgMAHIgMAGIgMAGIgMAHIgNAFIgMAGIgNAEIgNAGIgNAFIgOADIgOAEIgOADIgPADIgNACIgjAHIgBAAIgEAAIgFABIgQAEIgQAAIgSACIgQAAIgQABIgSAAIgQAAg");
	this.shape_1.setTransform(100.3,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBB8AC").s().p("AhTEvIgvgDIgSgBIgogEIgXgCIgigHIAAAAIgKgKIgngnIgWgbQgVgbgNgcQgOgfgHgeQgIglgBgkQgBgEABgDQAAgcAHgaQAFgYAJgVQAHgWANgTQARgdAVgXQAWgZAagUQAYgUAcgOQAagQAdgJQAegMAggHIAhgFIArAAIAVAAQAbACAcAGQAdAEAeAKQAbAKAcAOIAbAQIAZARQAcARAaAbIADAEQAWAYASAbQARAcANAhQAGATAFAWIAFAXIABAHIACASIABAHIAAAFIgBAEIAAAIIAAAFQAAApgOAmIgHAWIgCABIgVATQgQAKgPAKIg1AhIg7AfIglAQQgdAJgdAKQghAHgeAFIgYACIgkADIg6gFg");
	this.shape_2.setTransform(94.7,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0A895").s().p("AixFAIgQgCIgRgCIgQgDIgRgDIgQgDIgRgDIgQgEIgRgEIgPgDIgPgDIgOgCIgOgDIgNgFIgNgEIgNgFIgNgGIgPgHIgIgEIgKgFIgJgGIgKgGIASAFIASAFIARAEIAQAEIAQAEIAQAEIAPADIASAEIAJACIAMABIAMACIALABIAMACIALABIAMACIALABIAMABIALAAIAEADQAQAOAcAQIAMAHIgNgDgAFGDeQAagmATgqIAIgWQAOgmgBgpIAAgEIABgBQANgoABgsQABg0gNgyQgLgngQglIgUgpIAqg3IAGAGIABACIgMAnIAVArIAQAhIAeBVQAPAuAEAyQADAtgSAuQgOAkgXAgQgaAhgfAdQgWAWgcARIAOgUg");
	this.shape_3.setTransform(93.4,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFB6A2").s().p("AB8FwIABgEIgBgFIAAgHIgCgSIgBgKIgFgWQgRiAh0hgIgJgHQgrgig1gbIgmgOIAfgLQAWgIAMgLQA7gaAkgwQAjhBgFhQIgBgUIgBgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAgXADgWIACgBIABABIAAgBIAagLQAXgJAKgNQAOgGAIgHQAWAgAIAnIABADQAJAgABAjIABALQAEAlgCAlQgBAdgFAdIgIArIgEATQgGAbgIAWIAAABIgGgFIgrA3IAUApQARAlAKAmQAOAzgBA0QgBAsgOApIAAABIAAgIg");
	this.shape_4.setTransform(120.3,-17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9C1AF").s().p("AEDGiIgMgBIgLgBIgMgCIgMgBIgMgCIgLgBIgMgCIgMgBIgJgBIgRgFIgPgCIgQgFIgQgDIgQgFIgRgEIgSgFIgSgEQgggLgegSQh+hQhAiFQg/iDAkiNQAjiLAsiJIgJB/IgcAcQgMBdABBdQABCCBOBqQBbB7CKA/QBSAkBWATIAKAKIAAAAIABABIAFAEIADACIgLAAg");
	this.shape_5.setTransform(43.9,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7AF9D").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_6.setTransform(24.9,-40.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7E1D3").s().p("AgCA8IAHASIAHAQgAgLgWIAAgBQAIgYAEgaIAEgUQgFAkgJAhIgBAFg");
	this.shape_7.setTransform(134.4,-12.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.9,-61.5,123.8,111.6);


(lib.阿達兔03張嘴 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTA5IgkgCIgbgDIgKgBQgLgBgKgIIgDgLQgBgVADgSIADgVQABgHACgIIAJACQA1AFA8ADIAdAAIABAAIgBAXIgCAcIAAANQAAAMgIAIIgDADIgGACIgMACIgQAAIgPAAgAAtAsQgJABgGgGIgBAAIAAAAIgEgGIgBgCIgBAAIAAgBIgBgEIAAgCIgCgCIgHgbIgEgbQAygDAsgHQAigGAegIIABAEIALArQAEAKgDAKIAAACIgBAGIgCABIAAAAQgDAFgFADIgGABIgJADQgZAGgbADQgaADgZABIgGgBg");
	this.shape.setTransform(19.4,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2C0B7").s().p("AALAWIgGgmIAFAAIAMgBQBJgCBEgFIAGAXIABACQgeAIgiAFQgtAHgxAEIgBgDgAgSAXIgdAAQg9gDg0gGIgJgBIAAgCIACgLIAEgOIACgGIBaADIAmAAIAPABIABAHQgBAMABARIAAADIAAAAg");
	this.shape_1.setTransform(19.2,-9.1);

	// 圖層 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#844A44","#58312C"],[0.094,0.867],0.4,27.6,0.4,-16.4).s().p("AmlCrQiBhAhWiIQhQh/ANhaQARAgAiAcQB7BkEvAQIAAAAIACAAIARABIgBABQAHgCAHACQAGACAGAAQAGAAAEACIAAAAIABAAIACAAIACAAQADgBACACIAAABIAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAABIgBABQABAJgEANQgLAegIAcQgHAdAWANIABgBQAcAIAdAAQAfABAfgCIAIAAIAAAAIAJgBQAPABAKgIIABAAIABgCIAAAAIAAgCIAAgCIAAgBIABgBQABgEAAgFQABgEACgDQAAgFAAgGIADgUIACgIQAGAIADALIADAJIAEAMIABAEQABAEADAFIAEAFQBTAIBTgVIACgDIAEgHIgDgLQgGgdgKgdQgGgPgCgRIACgBIABgBIADgBIAAgBIABABIABgBIAHgBIgBAAIAOgBIAAAAQBIgFBHgKQElgnBChtQAHBrg3BeQgcAtgdAaQg1BChoA1QhfAwhuAWQhVAShhACQltgVhwg3g");
	this.shape_2.setTransform(19,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77433E").s().p("AgTEjQg9gBg9gEQhmgGhjgdIg8gTQgigMgXgMQgmgWgmgcIguglQgRgOgRgRQgQgSgPgUIgegsQgRgYgHgOIgQgiQgDgGgHgdIgIglIgEgeIgCgaIAAgPIACgYIADgUQAEgRAMgNIAAAAQADgFAGgCQACgCADgBQAHAAAFAHIADADIAGAKIAFAKIAIAMIAIAMIARAVIAaAbQANALAOAKQAWAPAbALQAmARAqAHQBBAOBDADQBkAKBkAEQBGADBGABQAeAAAegCIA2gCIA4gCIBNgFQBGgFAngFQBAgJBBgSQB3ghAmguQAbghAQgjIABgCQAFgIALgDQAJAAAFAJIABABIAAABIAHAQQAEAKACAMIADAXIAAAYQAAATgDAVQgDAjgMAgQgEALgGAKQgXAsgcAoQgoA6g2AwQhGA9hZAnQhQAjhYAOQh9AUh7AAIgMgBgAp8gLQBWCICCBAQBvA3FtAVQBhgCBWgSQBugWBfgwQBog1A0hCQAdgaAcgtQA4hegHhrQhDBtkkAnQhIAKhHAFIgBAAIgNABIAAAAIgHABIgBABIAAgBIAAABIgDABIgCABIgBABQABARAGAPQAKAbAHAfIACALIgEAHIgCADQhTAVhTgIIgEgFQgDgFAAgEIgBgEIgFgMIgDgJQgDgLgGgIIgBAIIgEAUQAAAGAAAFQgCADAAAEQAAAFgCAEIgBABIAAABIAAACIAAACIAAAAIgBACIAAAAQgKAIgPgBIgJABIgBAAIgHAAQgfACgggBQgdAAgbgIIgCABQgWgNAIgdQAHgeALgcQAFgNgBgJIAAgBIAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIAAAAIgBgBQgCgCgDABIgCAAIgBAAIgBAAIgBAAQgEgCgGAAQgFAAgHgCQgGgCgHACIAAgBIgRgBIgBAAIAAAAQkvgQh7hkQgjgcgRggQgNBaBQB/gAgmBWIACAAIgBgBIgBAAIAAABgAgaBUIgGACQAHgBAGgDIgDAAIgEACgAgNBNIACgBIAAgBIgBAAIgBACg");
	this.shape_3.setTransform(19,-6.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-35.9,148.4,58.4);


(lib.阿達兔03左眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAXQgpgOATgbQACgEAEgBQAjAJgCAbQgBALgKAAIgGgBg");
	this.shape.setTransform(29.9,-1.2);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],-0.2,-1.3,0,-0.2,-1.3,7.2).s().p("AgsAyQgUgMAAgXQgBgWASgXQATgVAagFQAagHAUANQAUANABAYQABAWgUAWQgRAVgaAFQgJADgJAAQgQAAgNgKg");
	this.shape_1.setTransform(12.6,7.8);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],-7,-5.8,0,-7,-5.8,27.4).s().p("AhiCsQgpgKgXgjQghgxAKg/QAMhFAygxQA0gyBFgSQBCgSA7AhQA8AsAEBMQAEA/gnA2QgpA6hCAYQgrAPgqAAQgdAAgdgGg");
	this.shape_2.setTransform(20.7,12.3);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#624340").ss(3,1,1).p("AiIhWQBAhKBdgQQCSgJARCFQAJBFgqA9QhJBoh+gEQiNgJAFiFQAChEAug2g");
	this.shape_3.setTransform(21.2,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#624340").s().p("AgwCyQiNgJAFiFQAChEAug2QBAhKBdgQQCSgJARCFQAJBFgqA9QhGBkh3AAIgKAAg");
	this.shape_4.setTransform(21.2,13.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-5.5,38,37);


(lib.阿達兔02右手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AkLDEIgHAAIgQgBIgQgDIgDgBQgNAAgMgBQgPABgNgEIgHgCIgEADQgBAIAIADIgOgFQgQgLgJgQIABAAQgDgEgBgFIgCgDIgBgBIgBgDQAAgDADgBQAPgQAagGIA5gNQAMgGAOgDQAVgGAVgIIAogQIgHgIQA1gIAzgOQBigSBSgxQBPgwBHg9QArglAzgaIABgBIAMgDQAMAAAMACQAXAIARAZQAMARAFATIABAQQgCASgHAUIgHAQQAAgHgIACQgEAJgGAJQgHALgIAKQgLAOgOANIgEAFQghAogrAcQgoAagpAWQhFAkhLATIgdAHIg7AKIg/AFIggAAIgGAAIgfABQgpAAgogFgAmRCsIABgBIgBgBIAAACg");
	this.shape.setTransform(0.2,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC7B6").s().p("AhaA0IABABIgBAAIAAgBgAheAwIgCgDIgDgIIACACQABAGADADIgBAAgAhoASIgBgFQAAgIABgHIADgNIACgDIAJgKIAIgBIAdgGIApgGIA4gDIA3gIIAHAIIgoAQQgVAJgVAFQgOADgKAGIg5ALQgaAGgPAQQgDABAAADQgCgHgBgHg");
	this.shape_1.setTransform(-30.8,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AFA792").s().p("AjACbIgsgGIgsgJIgTgEIg4gSQgIgGgKgBIgBAAIgDgBQgIgEAAgIIAFgCIAGABQAOAEAPAAQAMABANgBIADABIAPADIAQACIAHAAQA4AGA5gCIAGAAIAgAAIA+gFIA9gKIAcgIQBKgTBFgjQApgWApgYQArgcAggoIAFgGQANgOAMgPQAIgKAGgKQAGgJAFgKQAHgBABAGIgEAJIgGAGQgFANgIAMQgOAVgKAWIgFAIQgTAXgUAVQgPAOgRAOQgQAOgRAOIgkAZQgSAMgUAKQgTALgUAJQgUAJgVAHQgVAHgWAEIgpAKIguAFIguADIguABIguAAg");
	this.shape_2.setTransform(1.4,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7E1D3").s().p("Al0B8IgGgCIABAAQALACAHAFIgNgFgAFnhiQAIgMAFgNIAHgGQgTAngYAkQAKgWANgWg");
	this.shape_3.setTransform(1.8,5.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-22.2,83.1,44.7);


(lib.阿達兔01左耳 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5DED0").s().p("ACOHAIAAgbQgEgNgCgPQgHgngIgnQgMgUgHgcQgNgvgRguQgQgNgJgcQgviOg1iPQg4iQg9iMQgNgdgGgeQgCgMAMgBIAEAHQAAgDAHAAIAGACIAEACQBgCzBOC9QAYA5AVA5IACACQAiBYAfBbQAfBfAVBgQAMA6gCA5IgEACIgFAAIACAKIgBABIACAbIgBAAQgrAAACg9g");
	this.shape.setTransform(-6,-17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D19287").s().p("AA3C6Igkg0QhXiBhKiIQgLgVgJgVQgFgNgBgNIAAgaQABgSAPgIIAVADIAEAFIAdAbQAdAdAVAjIAVAlIAcA4QASAiARAiIAfA9IAVAqQAkBCAtA9IgNACQgbADgZAIIgxhCg");
	this.shape_1.setTransform(2,29.9);

	// 圖層 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE9DC").s().p("ABcJMIgog4Iglg5Qgegygeg0QgmhBghhFQg1hwgoh5QgWhCgRhFQgNg1gLg1QgEgVgDgWQgDgWAAgWQgBgsADgrQACgsAKgnQALgqAPgmQANgeAQgdIAJgDIAAAAIAJgGIAJgDIABAAIgIAEIgDADIgBACIACgBIADgBQAVAXAOAgIAbA8IACAEQAZApATAtQArBoAmBqIBFC+QADADAEABIABAAQAGAWAMAVQASAiAPAkIABABIADAMQABAGADAGIAPA1QAKAgANAfQAVBWAbBTQAEAZAIAYQANAoAIApQAHAlAPAjIAHAEIACABIgSACIgsAIQgdAGgbAIQgRAGgJAJIgIACIgng4g");
	this.shape_2.setTransform(-4.5,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A29884").s().p("ADiJvIgCAAIgHgEQgPgjgHgmQgIgogNgoQgIgYgFgZQgahUgWhVQgMgfgKggIgPg2QgDgGgBgFIgDgMIgBgBQgPgkgSgiQgNgXgGgUIAAAAQgEgBgDgDIhFi/QgmhpgrhoQgTgugZgoIgCgEIgbg8QgOgggVgXIgDABIgCABIABgDIADgCIAIgEIACgBIAAAAIAEAEIAGAHIAJAMQALAIAJAKIAMAOQAYAgAWAiIAcArIAbAuIAaAtIAdA3QAVApAQAsIAWA6IAiBdIALAfIAUA1QASA3AQA4QAYBQAWBQQAXBRAUBTQAWBaATBaIgIgBIgGABIgEACIgEAAIgHgBg");
	this.shape_3.setTransform(1.1,-9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5DED0").s().p("AgBgCIABACIACADIAAAAIgDgFg");
	this.shape_4.setTransform(-22.3,-70.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-71.6,59.7,129);


(lib.絡腮鬍 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DBB8AC","rgba(226,177,160,0.702)","rgba(200,174,155,0)"],[0.094,0.71,0.961],0,0,0,0,0,25.3).s().p("AigCuQhHhGgFhjQgFhiBDhJQBEhKBlAAQBjAABIBKIADADQBEBIAABhQAABkhFBFQg9A8hVAGIgRAAQheAAhHhDg");
	this.shape.setTransform(24.8,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-0.7,47.5,48.4);


(lib.白吃兔01頭_1 = function() {
	this.initialize();

	// 圖層 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDE9DC").s().p("AkJK7IgsgGIgCAAIgLgCIgRgFIAAABIgDgDQgRgDgQgGIgwgVIgZgOQgFgDgDgDIgKgFIgCAAQgJgEgCgEIgBgBIgEgCIgBAAQgOgGgDgGQgbgUgagWIgogkQgUgTgSgUQgvg3gnhAQgig7gVhBQgVhBgGhFQgGhGAHhEQAHhFAUhCQAUhBAfg8QAhg+Arg1QAvg8A3gzQA3gyBBgmQA0geA3gWQA2gWA6gOQA2gKA4gEQA2gHA0gBQA3AHA2ALQBKAMBHAbQBCAXA+AgQA+AgA5AnQA6AmAzAvQAyAuAoA3QAgAsAaAwIAJASIhBhfIAeAxQAcAwANA1IAMA1QALAvgCAwQgBAbAAAZQABA4gQA2QgOAugWAqIgbAyQgXAwgjAqQgkApgsAjIg3AuQgtAmg1AZIgPAHQgeAYglASQhZAtheAbQgYAHgWACQh5Aih6AAQhIAAhKgMg");
	this.shape_4.setTransform(48.1,70.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6BDAA").s().p("AlEIYQgEAAgDgCQgMAAgMgDIgLgDIgPgCIhGgOIgLgCIghgIIgYgGIgLgDIgQgEIgTgGQgGgCgCgDIgBgBIgBABIgmgRQAQAGARADIADADIAAgBIARAFIALACIACAAIAsAGQDHAfDAg1QAWgCAYgHQBcgcBZgsQAlgSAegYIAPgIQA1gZAtgmIA3gtQAsgkAkgpQAjgpAXgwIAbgyQAWgpAOgtQAQg2gBg5QAAgbABgaQACgxgLgvIgMg1QgNg0gcgxIgegwIBBBeQAdAtASAzQASA1AGA4QAEAzgCAxQgCAygLAyIgHAcIgCAEIgCAJIgBABIAAAAIgBABIAAABIgIAYIgCAGIgBACIgIAVIgIATIAAAAQgBAGgDADIgLAWQgMAZgOAYQgeAzgmArQgXAagYAYQgoAngvAdQgxAgg3AbIgpAVQgaAOgbALQgrASgrANQglALgoAKIgBgBIgXADIAAABIgBABQhPANhQAAQgwAAgwgFgAoqHjIAAgBIgBAAIABABg");
	this.shape_5.setTransform(71.9,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CEC7B6").s().p("AAAAAIAKAEQADAEAEADIgRgLgAgRgKIAFACIABACIgGgEg");
	this.shape_6.setTransform(1.4,133.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E2D3").s().p("AAbAJIgMgDIAZAGIgNgDgAgTgGIABAAIABAAIgCAAgAgmgLIAAAAIABABIgBgBg");
	this.shape_7.setTransform(18.3,141.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.3,-0.5,165.8,146.7);


(lib.白吃兔01鼻_1 = function() {
	this.initialize();

	// 圖層 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAJQgCgDAAgDQABgGAHgEQAGgEADgBIAEABIAEABQADABACADIABADQAAADgDACIgPAKIgEABQgEAAgDgEg");
	this.shape_4.setTransform(3.9,3.8);

	// 圖層 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4968C").s().p("AgjAjIgFgGQgRgRgDgeQAFgLAMgCQA0gPAzARIgBAAIgCABQAHAGgFAIQgFAOgJAIIgJAKIgLAHIgLAHIgGACIgLADIgOAAIgKgBIgCAAIAAABIgBACIgFgEg");
	this.shape_5.setTransform(6.2,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#C0695C","#A8665B"],[0.353,0.757],-1,-0.7,0,-1.1,-0.6,8.9).s().p("AgXAoQgIgBgJgDQgHgDgEgFIABgCIAAgCIACAAIAKACIAPgBIAMgCIAHgDIAIgHIALgHIAJgHQAKgLAEgOQAFgHgGgHIABgBIABAAIABABIABAAIACABQAFAEACAGQACAFAAAGQgBAGgDAGIAAACIAAABIgBAAIgGAJIgIAKIgBABIgOANIgJAFQgJAEgGABIgIACIgJgCg");
	this.shape_6.setTransform(8.3,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D78E82").s().p("AAAASIAHgKQgFAMgIAIIAGgKgAABgcIABABIABABIgCgCg");
	this.shape_7.setTransform(12.3,4.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.1,13.5,9.3);


(lib.白吃兔01扭左腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#968B76").s().p("ABaC2QgJgBgLgEIgUgEQgWgGgPgRIgDgrQgBgJgEgHQgFgLgIgIQgMgLgLgMQgUgWgOgYQgNgTgPgQIgRgJIA3gbIA2gcQAmgXAkgcIAYgSIANgQIABABIgBAFQgFAggQAiQgbA7gFBAQgEA6gQA4QAIAOAOAJQAWANAVAEIADAFIAAAEIAAACIAAACIgEABIgEAAIgHAAg");
	this.shape.setTransform(6,46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1CBBB").s().p("AiMFnIAAgCIAAgDIgBgDIgCgFQgWgEgVgNQgOgJgJgOQAQg4AFg6QAFhCAbg8QAQgiAFgfIAhgXIAtgkIAtgjQAigcAigeQAZgXAWgbQAegjAagoQAXgkAPgoIAGgGQADAOABAQIADA6QABAngEAnQgLBpgyBfQgJARgLAQIgFAHQgKAVgkAvQgZAhgdAjQgRAVgeAeIgIALQgVAZgPAOQAOARAAANQAAAOgGAHQgLAMgYAEQgVAHgaABIAEgBg");
	this.shape_1.setTransform(30.8,28.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-7.1,57,72);


(lib.白吃兔01扭左手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE9DC").s().p("AmaESQgzgHg1ACIgEgCIgHgHIgfgiQgMgbAPgdIAIgLQAGgLAMgJQAIgFAJgEQArgOAwgEQACACAEAAIAKgBIAFgCIAGAAIAIAAQCPAfCLg6QBjgpBWg9QAvgiAbgyQAkgdAlgcIAxgkQAvglA2gZQA0gZA4AOQAiALAWAeQARAYABAeQABAVgHAVIgTA3QgRAtgdAkIAAAAQglAZglAXQglAXgmAVQgnAVgnATQgnATgpAQQgoARgqAOQgpAOgrAKQgoAMgrAHQgrAJgrAHIhWAJIhWACIg6ABIgdAAg");
	this.shape.setTransform(15.7,-9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7AF9D").s().p("AlTCSQgqgEgogMQgpgKgogOQA1gDAzAHQArABAsgBIBWgCIBWgKQArgGAsgKQArgHAngLQArgLApgNQAqgOAogRQApgPAngSQAogTAmgVQAmgVAlgYQAmgXAkgYIgXAbQgiAogqAhQggAZgiAXQgiAUgkATQgjATgmAQQglAPgnAOQgvARgxAMQguALgyAIQggAIgiAAQguAGg1AAQgzgEgygHg");
	this.shape_1.setTransform(14.5,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CEC7B6").s().p("AkOBmQCSgGCGg6QBbgmBVguQAvgbAmgmQgbAygvAiQhYA8hjApQhZAmhdAAQgxAAgxgKg");
	this.shape_2.setTransform(4.3,-8.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-37.1,112.6,59.6);


(lib.白吃兔01扭右腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(30.8,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADA58F").s().p("ABhECIgBAAIABgBIAAAAIgBgCIAAgBIgBgBIAAAAIAAgBQgBgEgEgCIgDgBIgEgCQgIgFgMAAIgZgBQAXgUgEggIgMhXQgEgegBgdIgBgGQgDgRgEgQIgGgQIAAgBIAAgBIABAAIAAgBIgBAAIAAAAQgGgPgJgQQgbgygbgzQgWgpgZgpQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIgBgCIgDAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIABgCIACAAIADAAIADgCIAEAAQgHAAgHACIgFACIABgBIAWgFIAEgBQAZgEAaACIAmADQAAALADAOQAOAxAHAxIADATQAHA7ASAyQACATAFAXQAMA6AGA9QADAjgEAhIAEAAIAJADQAGADADAGQADAIgEAFIgBABIAAABIgEAEIgDACIgBgBg");
	this.shape_1.setTransform(22.6,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#968B76").s().p("ACrB3IgfgLQgLgEgHgIQgNgKgDgRQgIgwgwgTQgqgPgqgNQgtgOgpgXQgmgWgbgjIAMAKQAiAYAmAPQA/AXA7ASQAyAPA0AEQgGALgBAOQgDAWAJATQARAmAnAVIACABIAAAAQACADAEABIgBABIgEABQgEAAgGgCgABwgSIABAAIABAAIABABIgDgBg");
	this.shape_2.setTransform(5.4,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBC3B1").s().p("ACrEIIgOgBIACgBQgEgBgCgDIgBgBIgBAAQgngVgRgmQgJgUACgVQACgOAFgOQg0gDgvgQQg+gRg+gYQgmgPgigXIgNgKQgRgZgIgjIgCAFQAAgHAEgHIAEAKQAQgkAbggQA0g7A/gvQAdgVAggLIACgCQAGgGAKgCIAVgDIAJgCIAFgCQAHgCAHAAIgEAAIgDACIgDAAIgCAAIgBACQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQABAAAAAAIADAAIABACIABAFQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQAZApAWApQAbAzAdAyQAJAQAGAPIAAAAIABAAIAAABIgBAAIAAABIAAABIAGARQAEAPADARIABAGQABAdAEAeIAMBXQAEAggXAUIAZABQAMAAAIAFIAEACIADABQAEACABAEIAAABIAAAAIABABIAAABIABACIAAAAIgBABQgCADgEACIgCAAQgKAHgNACIgHABIgCAAIgHACIgIAAIgOAAgADiDyIAAAAIgBgBIAAABIAAAAIABAAgABVB7IACAAIAAAAIgBAAIgBAAg");
	this.shape_3.setTransform(8.2,34.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,7.8,49.4,53.5);


(lib.白吃兔01右眼亂動04 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAOQgLgaAggLIADACQAaATgfAVQgEAFgFAAQgHAAgDgKg");
	this.shape.setTransform(5,6.8);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],1,-1.5,0,1,-1.5,8.2).s().p("AgrA0QgZgNgDgaQgEgXAUgVQATgWAegGQAcgGAXAOQAYANAEAZQADAYgSAVQgTAWgeAGIgPACQgUAAgRgKg");
	this.shape_1.setTransform(29,5.9);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],5.1,-4.2,0,5.1,-4.2,29.3).s().p("AhmC8QgsgLgYgmQgig2ALhFQAMhMA0g1QA3g3BIgTQBFgUA/AlQA+AwAFBTQAEBEgpA8QgrA/hFAaQguARgtAAQgdAAgegHg");
	this.shape_2.setTransform(19.7,11.9);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#624340").ss(3,1,1).p("AiIhWQBAhKBdgQQCSgJARCFQAJBFgqA9QhJBoh+gEQiNgJAFiFQAChEAug2g");
	this.shape_3.setTransform(19.6,12.8,1.056,1.063);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.6,39.5,39.5);


(lib.白吃兔01右耳_1 = function() {
	this.initialize();

	// 圖層 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#822F29").s().p("AA7B5IgHgKQg8hOgph2IgMgmIACAEIAKAUQA6CDA2BcIgEgDg");
	this.shape_7.setTransform(43.9,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#924037").s().p("ABiDDIAAgBIgBgCIAAAAQgEg7gUg4QgIgZgKgXQgchFgsg/QgggrgqgiIgDACIAAAAIgLgHIABgCIABgBIgBAAIAFgDIAEgCIAGgBIAGAAIADADIAYATQATASASAVQAQATAMAWIAgA9QAPAfAOAeIACAGIAIAVIABADIAHAbIAEAVQADAIACAJIAGAiIABAEIACAdIAAAAIgCABIgCABIgCABIgCAAgAA6BDIABADIABACIgCgFg");
	this.shape_8.setTransform(49.5,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A75F52").s().p("AA2CnIgDgDIgHgIIgSgaQgDgFgCgFIgJgMIADADQg0hcg7iDIgLgUIgDgKQgLgqAegLIgFACIABABIAAAAIgBACIAKAHIAAAAIADgBQAqAhAgArQAsA/AdBFQAKAYAHAZQAUA3AEA8IAAgBIABADIgDAAIgBABIgDABIgBAAIAAgBIgRAEIgEACQgNgPgKgPgABEBDIAAgBIgCgDIACAEgABvC+IABgBIACgCIAAADIgCAAIgBAAgABvCbIgGgjQgBgIgDgJIgFgUIgHgbIAEALQAOAtAFAuIgBgDgABOAZQgNgegQgeIgfg9QgPgWgOgUQgRgUgUgSIgYgUIAGACQAzAlAeA3QAoBCAaBEIgDgHg");
	this.shape_9.setTransform(48.7,45.1);

	// 圖層 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A79D8B").s().p("ABvH6IgRgXIAAgBQh7ithLjMQg8ihgYimIgGglIgFg0QgIheAAhdIABgsIAAgBIAAABIACADIABgEIABAFIABACQAKARADAZQADAbAIAaIABAHQAFAMACAPQACAQAEAQIAHAWIACADQAEAMADALIAUBFIACAJIAHAaIALAdIAVA/QAdBVAoBNQAjBGAoBDIACADQAGAGADAGQAeAiAYAoQAcAtAQAyQAGAIADALIABAEIAEANIAHARQAOAfADAhIADA8IgCABQgPACgOADIgEABIgBAAIAAgBIAAAAIgBAAIgBABIgEABIgBAAIgPAFIgJACIgegmgABwEDIACADIgEgGIACADgAAaCJIABABIAFAGIgFgIIgBABg");
	this.shape_10.setTransform(39.7,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3CEBE").s().p("AC+IaIADgBIgDg8QgDghgOgfIgHgRIgEgNIgBgEQgDgLgGgIQgQgygcgtQgYgngegjQgDgGgGgGIgCgCQgohEgjhGQgohNgdhVIgVg+IgLgeIgHgaIgCgJIgUhFQgDgLgEgMIgCgDIgHgWQgEgPgCgRQgCgPgFgLIgBgHQgIgbgDgbQgDgZgKgQIgBgDIgBgFIgBAFIgCgDIAAgCIAAgDIABgCIAAgBIABgBIADAAIADAAIABAAIAEACIADgBQCBBoBOCKIAAAAQADAKAHAKIAHAMQAHAMAGANIADAEQANAdANAfIASAvQAZBBAWBCQAYBMAQBOIAEAPQAAANAFANIAFAQIAEAPIACANIAHAhQAaCCACCDIg7AKQAOgDAOgCg");
	this.shape_11.setTransform(41.2,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7D0BE").s().p("AApA7IgBgCIAEAGIgDgEgAgpg7IgBgCIABgBIAFAIIgFgFg");
	this.shape_12.setTransform(46.7,30.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DBD5C4").s().p("AABAMQgCgMgBgMIgDgPIALA3IgFgQg");
	this.shape_13.setTransform(58.6,28.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.9,-44.2,44.6,109.7);


(lib._2D兔嘴 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BB5C6").s().p("AgJAJQgFgBgDgFIgBgBIAAgBIAAgBIAPAAQAGABAHgDIAAgCIAAgCIAAgCIgBgBIABgBIABAAIABgBIACABIABAAIAAAAIABAAIAAABIABACQAHALgNAFQgFADgGAAQgFAAgEgDg");
	this.shape.setTransform(17.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAJIgPAAIgBgDIAAgEIAAgCQABgDAFgDIAHgCIABgBQAMgBAIAJIgBAAIgCgBIgBABIgBAAIgBABIABAAIAAABIAAACIAAACQgGAFgHAAIAAgBg");
	this.shape_1.setTransform(17,16.4);

	// 圖層 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#984A4A").s().p("AgCA9IgUgDQgTgEgRgLQgPgKgHgOQgJgOACgPIAAgCIgBAAIABgGIAAgDIABAAIAAAAQARgSAYgHIAIgDQAbgIAagDQAQAAAQACQAGABAGADIAAAAIACABIABABIAFAIIABABIACADIABACIAGAKIAHAOQAIARgHASQgGAPgOAKQgIAHgLAEIgeAEIgTAAg");
	this.shape_2.setTransform(10.7,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2C0B7").s().p("AgiAQQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIADgFIAGgFIAGgDIAGgDIABAAIABACQADAGgHAGQgGAGgHAAIgEgBgAADAEIgBgBIgCgCIAAgGIAAAAIAAgEIAAgCIAOgDIAJgBIAMgBIAAABIAAADIABAEIABAIQAAABgCACIAAgBQgDAEgGABIgGAAQgJAAgIgDg");
	this.shape_3.setTransform(7.4,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("AhCANIALgNQgBAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAKACAIgFQAHgGgDgIIgCgCQAIgEAJgDIAAAFIAAAAIAAAHIACADIABABQAKAEALgCQAGAAADgEIAAABQACgCAAgEIgBgIIgBgDIAAgDIAEAAQALACAKAEQAQAFANAOIAEAFIgBAAQgFgDgGgBQgQgCgRAAQgcADgZAGIgIADQgYAIgQARIgBAAQACgKAFgIg");
	this.shape_4.setTransform(9.4,5.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,2.7,17.9,15.9);


(lib._2D兔鼻 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAJQgCgDAAgDQABgGAHgEQAGgEADgBIAEABIAEABQADABACADIABADQAAADgDACIgPAKIgEABQgEAAgDgEg");
	this.shape.setTransform(3.9,3.8);

	// 圖層 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4968C").s().p("AgjAjIgFgGQgRgRgDgeQAFgLAMgCQA0gPAzARIgBAAIgCABQAHAGgFAIQgFAOgJAIIgJAKIgLAHIgLAHIgGACIgLADIgOAAIgKgBIgCAAIAAABIgBACIgFgEg");
	this.shape_1.setTransform(6.2,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#C0695C","#A8665B"],[0.353,0.757],-1,-0.7,0,-1.1,-0.6,8.9).s().p("AgXAoQgIgBgJgDQgHgDgEgFIABgCIAAgCIACAAIAKACIAPgBIAMgCIAHgDIAIgHIALgHIAJgHQAKgLAEgOQAFgHgGgHIABgBIABAAIABABIABAAIACABQAFAEACAGQACAFAAAGQgBAGgDAGIAAACIAAABIgBAAIgGAJIgIAKIgBABIgOANIgJAFQgJAEgGABIgIACIgJgCg");
	this.shape_2.setTransform(8.3,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D78E82").s().p("AAAASIAHgKQgFAMgIAIIAGgKgAABgcIABABIABABIgCgCg");
	this.shape_3.setTransform(12.3,4.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.1,13.5,9.3);


(lib._2D兔肚 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A29886").s().p("AiHFUQgqgIgpgMQgqgLglgTQgwgYgqgjQgogjgigqQgjgrgWgyIAIAIQAHAFAFAHQAiApAsAbQAzAfA3AVQAuATAwANQAvANAxAFQAxAGAyADQA0AAA1gMQAvgLAqgWQAvgWAqgeQAqgfApggQAqghAZgtIAPgdIAYgzQAMgaAIgcQAIgbAGgdQAIgqgBgtIgBgpIgDgcIgEgPIgCgOIADADIAHABIALAvQALA0AGA2QAFAwgEAyQgEAygJAwQgJAxgbArQgbArgkAmQgUAVgWATQgWAUgXARQgqAggwAWQgsATgvAKQgrALgqAFIhdAFQgvgGgvgIg");
	this.shape.setTransform(1.9,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFA792").s().p("AgqB1IABgJIADgIIAAgKQABgKACgKIABgFIAXhcIAHgdIAMg3QgDgCABgEQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIABgBIAAAAIACgBIAAAAIABAAIAMgFIAGgCIAGAAIADABIADACQgHAmgJAmQgKApgNAkQgEAUgLAQQgCAIgEAIQgIAQgEARQgDALgHAHQgDgGAAgHg");
	this.shape_1.setTransform(-48.6,-16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFB69F").s().p("AASBtIgjgBIgxgDIgWgFIgVgEIgWgGIgrgMIgVgHQhfgihZgwQgbgPgYgRIgMgHIgGACIACgGQAGgQAHgOQAGgLgCgHIACgGIAIAGQAIAHAKAEIAuAVQAbANAbAKQAbAKAbAHQAbAIAeAGQAdAGAbAEIAmAFIA5ABIAlAAIAjgBIAlgEIAlgGIAkgHIAkgJIAjgLIAkgLIA3gVIAbgNIAcgLIAPAhIACACQAKARAHARIAMAXIAJAUIgJAFIANAeQAKAbAUAVIgIACIgHgBIgbgKIgWgGIg2gOQgbgGgcAAQgcgBgbAHIg3AOQgbAJgbAGIg5AIIglAAg");
	this.shape_2.setTransform(1.5,-35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9C1AF").s().p("AgDAAIABgDIAHAHIgIgEg");
	this.shape_3.setTransform(-41.3,-38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7AF9D").s().p("AAaBLIAAgCIABAEIgBgCgAAGAFIgCgIIAAAAIADAGIADANIABADIgFgOgAgBgWQgGgRgJgOQgBgGgEgFIgFgMIAFAGIAPAiIAAABIAGASIgBgFg");
	this.shape_4.setTransform(48,-21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEC7B6").s().p("AApBnIgGgBIgEgDIAAgBQgCgXgMgRQgIgfgKgbIgHgSIAIgCQgUgVgLgbIgMgeIAJgGIAPAlIAHANIAFAMQADAFABAGQAHAOAGARIACADIAGAOIAAAAIACAKIAFAOIAAADQgCAEAEAGIAFANIgBACIAAAAIAFAOIACAHIABAFIAAACIABACIAEAGIgDgCg");
	this.shape_5.setTransform(46.6,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7E1D3").s().p("AAJHWQgwgCgxgGQgxgGgvgNQgwgNgugSQg3gWgzgfQgsgagigpQgFgHgHgGIgIgIIgBgBIAAgBQgGgHgDgMIAAgDIgLgcIgBgFQgRgzgCg2QgBgaACgZQgCgIABgLIAIhEIADgWQAAAHADAGQAHgHADgLQAEgRAIgQQAEgIACgIQALgQAGgUQANgmAKgpQAJgmAHglIgDgCIgDgBIgGgBIgGACIgMAFQAPg0ARg0IACgKQABgFADgDIALghIAJgWQACAHgGALQgIAOgFAQIgCAGIAFgCIAMAHQAZARAaAPQBZAyBgAiIAVAHIAqAMIAWAGIAWAEIAWAFIAuADIAmABIAlAAIA4gIQAcgGAbgJIA3gOQAbgHAcABQAbAAAcAGIA2AOIAWAGIAbAKIAHABIAHASQAMAeAIAeQAMARACAXIAAABIACAOIAEAQIADAbIABAqQABAsgIApQgGAcgIAcQgIAbgMAaIgYA0IgPAeQgZAugqAgQgpAhgqAeQgqAegvAXQgqAVgvAMQgyALg0AAIgFAAgAmRmMIAKAFIgJgJIgBAEgAn8hOIAAAKIgDAIIADgSgAn5hnQAPg+AQg9IgHAeIgXBdIgBAFIAAgFgAH3jZIAEAMIgBABIgDgNgAHokCIgPgiIADADIANAgIgBgBg");
	this.shape_6.setTransform(-1.6,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F8F8F5","#9E9DA3"],[0.643,1],-28.4,-55.5,0,-28.4,-55.5,63.5).s().p("AAMACIgLgCIABAAIAKABIADACIABABIgEgCgAgPgDIABAAIAKABIgLgBg");
	this.shape_7.setTransform(30,-57.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.1,-57.6,108.1,115);


(lib._2D兔左腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDC6B6").s().p("AhHEXQgRgJgQgNIAZg0IAOgeQANgZAJgcQAIgcAMgbQAKgZAIgZIAKghIAPg1QAJgcAEgdIAIg0QAEgbAAgZIABgCIAUgfIAJgNIAPgIIALAFIACAgIABAgIgBAgIgCAfIgCAfIgGAfIgGAeIgHAfIgJAdIgLAeIgKAeIgLAeIgMAdIgNAdIgNAdIgNAcIgPAcQgLAUgMATIgDAEIgCADIgFAGQgFgCgGgEg");
	this.shape.setTransform(31.2,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACA595").s().p("AgJCMIgPgrIgIgZIgBgBIgBgBIAAAAIgQhGIgHgZIgBgFIgBABIgEgKIgCgQIACgBIAGgDIAQgIIAOgIIANgHQAMgGAJgJIAggXIAAABIAAABIABgBIACgEIADgBIACgBIAAABIACgEIAHgFIAKgIIAAACQgDANgJAQQgnBBgQBHQgOA5AHA7IgBgCg");
	this.shape_1.setTransform(6.8,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3DCCC").s().p("AhDEgQgcgCgXgMQgDAAgCgCIgDgCIgBgBIgFgCQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAAAIgBABIAAABIAAAAIgFgGIgFgPQgHg6AOg5QAThJAmg/QAJgQADgNQAwgnAoguQBChIA3hQIAMgRQAAAZgDAcIgIA0QgFAcgIAcIgQA1IgMAkQgIAZgKAXQgMAbgIAcQgJAbgMAZIgPAeIgYA1QAQANAQAJQAGAEAFABIAFgFIgDAEQAGAHAEAJQAFAMgBAOIAAACIAAADQAAAFgBAEIgCACIABgDIgBgCIgBABIgBgBIgCACQgWAHgYABIgXAAIgygBg");
	this.shape_2.setTransform(20.7,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A917E").s().p("AAHAVQgKABgMgCQgRgCgPgFIgHgDQgJgCgJgHIgFgBIgMgKIgCgCIgBgBIgEgFIAAgBIAAgBIABgBQAAABAAAAQABABAAAAQABAAAAAAQABABABAAIAEACIACABIACABQADACACAAQAYAMAcABQAjABAlAAQAZgBAVgGIADgBIABABIAAgBIABACIgBACIgDACIgBAAIgBABIAAABIgFAEIgBABIgBABIgDABIgCABIgDABIgBAAIgEABIgBAAIgDABQgHABgGADIgCAAQgTADgUABIgGAAg");
	this.shape_3.setTransform(16.6,63.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCC4B3").s().p("AABgDIADgCIgHALIAEgJg");
	this.shape_4.setTransform(38.3,1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,41.6,65.2);


(lib._2D兔左眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAXQgpgOATgbQACgEAEgBQAjAJgCAbQgBALgKAAIgGgBg");
	this.shape.setTransform(29.9,-1.2);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],-0.6,-1.5,0,-0.6,-1.5,8).s().p("AggA7QgWgMgFgaQgGgYAOgZQAOgZAZgJQAWgIAWAMQAXAMAGAaQAFAYgOAZQgNAYgZAJQgLAEgIAAQgOAAgNgHg");
	this.shape_1.setTransform(11.7,7.4);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],-7,-5.8,0,-7,-5.8,27.4).s().p("AhiCsQgpgKgXgjQghgxAKg/QAMhFAygxQA0gyBFgSQBCgSA7AhQA8AsAEBMQAEA/gnA2QgpA6hCAYQgrAPgqAAQgdAAgdgGg");
	this.shape_2.setTransform(20.7,12.3);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#624340").ss(3,1,1).p("Ai4AkQAChEAug2QBAhKBdgQQCSgJARCFQAJBFgqA9QhJBoh+gEQiNgJAFiFg");
	this.shape_3.setTransform(21.2,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#624340").s().p("AgwCyQiNgJAFiFQAChEAug2QBAhKBdgQQCSgJARCFQAJBFgqA9QhGBkh3AAIgKAAg");
	this.shape_4.setTransform(21.2,13.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,-5.5,38,37);


(lib._2D兔左耳 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5DED0").s().p("ACOHAIAAgbQgEgNgCgPQgHgngIgnQgMgUgHgcQgNgvgRguQgQgNgJgcQgviOg1iPQg4iQg9iMQgNgdgGgeQgCgMAMgBIAEAHQAAgDAHAAIAGACIAEACQBgCzBOC9QAYA5AVA5IACACQAiBYAfBbQAfBfAVBgQAMA6gCA5IgEACIgFAAIACAKIgBABIACAbIgBAAQgrAAACg9g");
	this.shape.setTransform(-6,-17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D19287").s().p("AA3C6Igkg0QhXiBhKiIQgLgVgJgVQgFgNgBgNIAAgaQABgSAPgIIAVADIAEAFIAdAbQAdAdAVAjIAVAlIAcA4QASAiARAiIAfA9IAVAqQAkBCAtA9IgNACQgbADgZAIIgxhCg");
	this.shape_1.setTransform(2,29.9);

	// 圖層 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A29884").s().p("ADiJvIgCAAIgHgEQgPgjgHgmQgIgogNgoQgIgYgFgZQgahUgWhVQgMgfgKggIgPg2QgDgGgBgFIgDgMIgBgBQgPgkgSgiQgNgXgGgUIAAAAQgEgBgDgDIhFi/QgmhpgrhoQgTgugZgoIgCgEIgbg8QgOgggVgXIgDABIgCABIABgDIADgCIAIgEIACgBIAAAAIAEAEIAGAHIAJAMQALAIAJAKIAMAOQAYAgAWAiIAcArIAbAuIAaAtIAdA3QAVApAQAsIAWA6IAiBdIALAfIAUA1QASA3AQA4QAYBQAWBQQAXBRAUBTQAWBaATBaIgIgBIgGABIgEACIgEAAIgHgBg");
	this.shape_2.setTransform(1.1,-9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5DED0").s().p("ABcJMIgog4Iglg5Qgegygeg0QgmhBghhFQg1hwgoh5QgWhCgRhFQgNg1gLg1QgEgVgDgWQgDgWAAgWQgBgsADgrQACgsAKgnQALgqAPgmQANgeAQgdIAJgDIAAAAIAJgGIAJgDIABAAIgIAEIgDADIgBACIACgBIADgBQAVAXAOAgIAbA8IACAEQAZApATAtQArBoAmBqIBFC+QADADAEABIABAAQAGAWAMAVQASAiAPAkIABABIADAMQABAGADAGIAPA1QAKAgANAfQAVBWAbBTQAEAZAIAYQANAoAIApQAHAlAPAjIAHAEIACABIgSACIgsAIQgdAGgbAIQgRAGgJAJIgIACIgng4gAizqAIACACIAEAFIAAAAIgGgHg");
	this.shape_3.setTransform(-4.5,-7.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-71.6,59.7,129);


(lib._2D兔左手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFA792").s().p("AAQBnQhHgEhHgQQhCgMhAgZIg6gXIgagNIgCgBIgFgDIgKgJIAGADIAIAAIAUAIIAiALIAiAJIAiAIIAkAIIAjAIIAkAHIAkAGIAiAFIAiABIAfAAIAggDIAjgEIAggKQAYgHAXgMQAYgKAXgOIAegQIAdgVIArgjQAXgTATgXQgcBEgyAwQg1A0hJAVQg7ASg9AAIgSgBg");
	this.shape.setTransform(1,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E1D3").s().p("AAACuIgggBIgigFIgkgGIgkgHIgkgIIgkgIIgigIIgigJIghgLIgUgIIgIgCIgGgDIgEgEIgHgDQgEgIgFgGQgKgKgFgNQgDgHABgGQgEgMABgOQACgSAOgNQAWgTAdABIAzAHIAiAFIAoAHIA4ADIAlAAIAigBIAigGIAfgHIAdgJIAdgMQAbgLAZgOQAZgNAYgPIAZgRIAdgQIAegQIAagLQAOgIASgFIAKAAQAcADATATQASAVAIAcQADALAAALQgCAagGAZQgDAPgFAOQgTAVgXATIgrAjIgdAVIgfASQgXAOgYAKQgXAMgYAHIggAKIgiAEIghADIggAAgAk3B6IgSgJIAbANIgJgEgAlOBuIgBgBIAFADIgEgCg");
	this.shape_1.setTransform(-0.1,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.8,-19,77.3,38.2);


(lib._2D兔右腳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDC6B6").s().p("AhHEXQgRgJgQgNIAZg0IAOgeQANgZAJgcQAIgcAMgbQAKgZAIgZIAKghIAPg1QAJgcAEgdIAIg0QAEgbAAgZIABgCIAUgfIAJgNIAPgIIALAFIACAgIABAgIgBAgIgCAfIgCAfIgGAfIgGAeIgHAfIgJAdIgLAeIgKAeIgLAeIgMAdIgNAdIgNAdIgNAcIgPAcQgLAUgMATIgDAEIgCADIgFAGQgFgCgGgEg");
	this.shape.setTransform(31.2,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3DCCC").s().p("AAlEmIACgBIADgBIABgBIADgBIABgBIACAAIAEgFIABAAIABgBIAAgBIAEgDQACgDgCgDIAAAAIgBAAIgDACQgWAHgYABQgjABglgCQgdgCgXgMQgDAAgCgCIgDgCIgBgBIgEgCIgFgCQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIAAAAQgJgLgGgNIgEgLIAAgBIABgFIABACIACgdQABg3ARgyQASgyAagtQAGgLAAgIQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQAEgDgFgCQA2gpAsgzQBChIA4hQIALgRQABAZgEAcIgIA0QgFAcgIAcIgPA1IgNAkQgHAZgLAXQgMAbgIAcQgJAbgMAZIgPAeIgYA1QAQANAQAJQAGAEAFABIAGgFIgDAEQAFAHAEAJQAGAMgCAOIAAACIAAADIgBAJIgBACQgIAKgLAFIgDABIgEABIADgBgAhXgaIAAAAIAAABg");
	this.shape_1.setTransform(20.4,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACA595").s().p("AgVByIAAgDQgCgFgBgHIgBgEIgWhdIgFgYIgBgFIgDABIgCgJQgDgJAAgIIACgBIAHgDIAPgIIAPgIIAPgJQAFgFAFgEQANgJANgKIAOgKIAAADIAAABIABgBQACgEAFgCIAAABIAAAAIAAgBIAEgGIABgBIABACQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIABABQAEACgDADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAIgGALQgaAvgSAyQgQAwAAA4IgCAcIgBgBIgBAEQgDgIgFgHg");
	this.shape_2.setTransform(6.4,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A917E").s().p("AAHAWIgWgBQgRgCgPgFIgHgDQgJgCgJgHIAAAAIgFgCIgMgJIgCgCIgBgBIgEgFIAAgBIgBgBIAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEACIAEACIACABIACACQADACACAAQAYAMAcAAQAjACAlgBQAZgBAVgFIADgCIABABIAAgBQADADgDADIgDABIgBABIgBABIAAAAIgFAFIgBABIgBAAIgDABIgCABIgDABIgBABIgEABIgBAAIgDABIgNAEIgCgBQgTAEgUABIgDAAIgDAAgAgCASIAAAAIgCAAIACAAg");
	this.shape_3.setTransform(16.6,63.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCC4B3").s().p("AiLCfIABgBIgBABgACJicIADgCIgKANIAHgLg");
	this.shape_4.setTransform(24.8,16.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,41.6,65.4);


(lib._2D兔右眼 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAOQgLgaAggLIADACQAaATgfAVQgEAFgFAAQgHAAgDgKg");
	this.shape.setTransform(5,6.8);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4B5A8F","#28386D"],[0.439,0.643],1,-1.5,0,1,-1.5,8.2).s().p("AgrA0QgZgNgDgaQgEgXAUgVQATgWAegGQAcgGAXAOQAYANAEAZQADAYgSAVQgTAWgeAGIgPACQgUAAgRgKg");
	this.shape_1.setTransform(18.7,-1);

	// 圖層 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FEFAE8","#B8B29C"],[0.408,1],5.1,-4.2,0,5.1,-4.2,29.3).s().p("AhmC8QgsgLgYgmQgig2ALhFQAMhMA0g1QA3g3BIgTQBFgUA/AlQA+AwAFBTQAEBEgpA8QgrA/hFAaQguARgtAAQgdAAgegHg");
	this.shape_2.setTransform(19.7,11.9);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#624340").ss(3,1,1).p("AjIApQAChNAyg8QBFhTBmgTQCdgKATCVQAJBOgsBFQhQB0iJgFQiYgJAFiVg");
	this.shape_3.setTransform(20.6,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#624340").s().p("Ag1DHQiYgJAFiVQAChNAyg8QBFhTBmgTQCdgKATCVQAJBOgsBFQhNBviBAAIgLAAg");
	this.shape_4.setTransform(20.6,13.1);

	// 圖層 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBB8AC").s().p("AguFLIgrgEIgngHQi2gvgWiuQgDgPAAgNIgBgNIAAgGQgBhUAthIQBYiiDBg4QAfgHAegBIAHAAQEqgRgTFGQgDAGAAAIIgGAoQgZByhWBUQhuBdh5AHIgRABIgOgBg");
	this.shape_5.setTransform(19.6,14);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-19.2,67.5,66.6);


(lib._2D兔右耳 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#822F29").s().p("AA7B5IgHgKQg8hOgph2IgMgmIACAEIAKAUQA6CDA2BcIgEgDg");
	this.shape.setTransform(43.9,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#924037").s().p("ABiDDIAAgBIgBgCIAAAAQgEg7gUg4QgIgZgKgXQgchFgsg/QgggrgqgiIgDACIAAAAIgLgHIABgCIABgBIgBAAIAFgDIAEgCIAGgBIAGAAIADADIAYATQATASASAVQAQATAMAWIAgA9QAPAfAOAeIACAGIAIAVIABADIAHAbIAEAVQADAIACAJIAGAiIABAEIACAdIAAAAIgCABIgCABIgCABIgCAAgAA6BDIABADIABACIgCgFg");
	this.shape_1.setTransform(49.5,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A75F52").s().p("AA2CnIgDgDIgHgIIgSgaQgDgFgCgFIgJgMIADADQg0hcg7iDIgLgUIgDgKQgLgqAegLIgFACIABABIAAAAIgBACIAKAHIAAAAIADgBQAqAhAgArQAsA/AdBFQAKAYAHAZQAUA3AEA8IAAgBIABADIgDAAIgBABIgDABIgBAAIAAgBIgRAEIgEACQgNgPgKgPgABEBDIAAgBIgCgDIACAEgABvC+IABgBIACgCIAAADIgCAAIgBAAgABvCbIgGgjQgBgIgDgJIgFgUIgHgbIAEALQAOAtAFAuIgBgDgABOAZQgNgegQgeIgfg9QgPgWgOgUQgRgUgUgSIgYgUIAGACQAzAlAeA3QAoBCAaBEIgDgHg");
	this.shape_2.setTransform(48.7,45.1);

	// 圖層 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A79D8B").s().p("ABvH6IgRgXIAAgBQh7ithLjMQg8ihgYimIgGglIgFg0QgIheAAhdIABgsIAAgBIAAABIACADIABgEIABAFIABACQAKARADAZQADAbAIAaIABAHQAFAMACAPQACAQAEAQIAHAWIACADQAEAMADALIAUBFIACAJIAHAaIALAdIAVA/QAdBVAoBNQAjBGAoBDIACADQAGAGADAGQAeAiAYAoQAcAtAQAyQAGAIADALIABAEIAEANIAHARQAOAfADAhIADA8IgCABQgPACgOADIgEABIgBAAIAAgBIAAAAIgBAAIgBABIgEABIgBAAIgPAFIgJACIgegmgABwEDIACADIgEgGIACADgAAaCJIABABIAFAGIgFgIIgBABg");
	this.shape_3.setTransform(39.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3CEBE").s().p("AC+IaIADgBIgDg8QgDghgOgfIgHgRIgEgNIgBgEQgDgLgGgIQgQgygcgtQgYgngegjQgDgGgGgGIgCgCQgohEgjhGQgohNgdhVIgVg+IgLgeIgHgaIgCgJIgUhFQgDgLgEgMIgCgDIgHgWQgEgPgCgRQgCgPgFgLIgBgHQgIgbgDgbQgDgZgKgQIgBgDIgBgFIgBAFIgCgDIAAgCIAAgDIABgCIAAgBIABgBIADAAIADAAIABAAIAEACIADgBQCBBoBOCKIAAAAQADAKAHAKIAHAMQAHAMAGANIADAEQANAdANAfIASAvQAZBBAWBCQAYBMAQBOIAEAPQAAANAFANIAFAQIAEAPIACANIAHAhQAaCCACCDIg7AKQAOgDAOgCg");
	this.shape_4.setTransform(41.2,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D0BE").s().p("AApA7IgBgCIAEAGIgDgEgAgpg7IgBgCIABgBIAFAIIgFgFg");
	this.shape_5.setTransform(46.7,30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBD5C4").s().p("AABAMQgCgMgBgMIgDgPIALA3IgFgQg");
	this.shape_6.setTransform(58.6,28.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.9,-44.2,44.6,109.7);


(lib._2D兔右手 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFA792").s().p("AjACbIgsgGIgsgJIgTgEIg4gSQgIgGgKgBIgBAAIgDgBQgIgEAAgIIAFgCIAGABQAOAEAPAAIAZAAIADABIAPADIAQACIAHAAQA4AGA5gCIAGAAIAgAAIA+gFIA9gKIAcgIQBKgTBFgjQApgWApgYQArgcAggoIAFgGQANgOAMgPIAOgUIALgTQAHgBABAGIgEAJIgGAGQgFANgIAMQgOAVgKAWIgFAIQgTAXgUAVQgPAOgRAOQgQAOgRAOIgkAZQgSAMgUAKQgTALgUAJQgUAJgVAHQgVAHgWAEIgpAKIguAFIguADIguABIguAAg");
	this.shape.setTransform(1.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC7B6").s().p("AhaAzIABABIgBABIAAgCgAheAwIgCgEIgEgJIABABIABADQACAFADAEIgBAAgAhpASIAAgEQAAgKABgFIADgOIACgDIAJgKIAIAAIAdgHIApgFIA4gFIA3gHIAHAIIgoAQQgVAJgVAFQgOAEgKAFIg5ALQgaAGgPAQQgEABABADIgEgOg");
	this.shape_1.setTransform(-30.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E1D3").s().p("AllDHIgFgCIABAAQAKABAIAGIgOgFgAkLDBIgHAAIgQgCIgQgDIgDgBIgZAAQgOAAgOgEIgHgBIgEACQgBAIAIAEIgOgFQgQgMgJgQIABABQgDgEgBgFIgCgDIgBgCIgBgDQAAgDADgBQAPgQAagGIA5gNQANgFANgEQAVgFAVgJIAogQIgHgIQA1gIAzgNQBigTBSgwQBPgwBHg9QArglAzgbIABAAIAMgDQAMAAAMACQAXAIARAYQAMASAFASIABAQQgCASgHAUIgHAQQAAgGgIABIgKATIgPAUQgLAPgOAOIgEAEQghAogrAcQgoAagpAWQhFAjhLATIgdAIIg7AKIg/AFIggAAIgGAAIggABQgoAAgogFgAmRCoIABAAIgBgBIAAABgAF2gXQAIgMAFgNIAHgGQgSAngZAhQAKgUANgVg");
	this.shape_2.setTransform(0.3,-1.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-22.3,83.1,44.7);


(lib._2D肚皮 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DBB8AC","rgba(226,177,160,0.702)","rgba(200,174,155,0)"],[0.094,0.71,0.961],1.6,0,0,-0.4,0,23.8).s().p("AigCuQhHhGgFhjQgFhiBDhJQBEhKBlAAQBjAABIBKIADADQBEBIAABhQAABkhFBFQg9A8hVAGIgRAAQheAAhHhDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-24.2,47.5,48.4);


(lib._2D白吃兔頭 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6BDAA").s().p("AlEIYQgEAAgDgCQgMAAgMgDIgLgDIgPgCIhGgOIgLgCIghgIIgYgGIgLgDIgQgEIgTgGQgGgCgCgDIgBgBIgBABIgmgRQAQAGARADIADADIAAgBIARAFIALACIACAAIAsAGQDHAfDAg1QAWgCAYgHQBcgcBZgsQAlgSAegYIAPgIQA1gZAtgmIA3gtQAsgkAkgpQAjgpAXgwIAbgyQAWgpAOgtQAQg2gBg5QAAgbABgaQACgxgLgvIgMg1QgNg0gcgxIgegwIBBBeQAdAtASAzQASA1AGA4QAEAzgCAxQgCAygLAyIgHAcIgCAEIgCAJIgBABIAAAAIgBABIAAABIgIAYIgCAGIgBACIgIAVIgIATIAAAAQgBAGgDADIgLAWQgMAZgOAYQgeAzgmArQgXAagYAYQgoAngvAdQgxAgg3AbIgpAVQgaAOgbALQgrASgrANQglALgoAKIgBgBIgXADIAAABIgBABQhPANhQAAQgwAAgwgFgAoqHjIAAgBIgBAAIABABg");
	this.shape.setTransform(71.9,92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CEC7B6").s().p("ApoHUIALAFQADADAEADIgSgLgAp6HJIAEABIABACIgFgDgAJ5jQIACgOIAAAVIgBARIgBgYgAJllwQgPg4gggzIgBgDQAgA1ARA6IgBgBg");
	this.shape_1.setTransform(63.1,86.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E2D3").s().p("AkNLHIgMgDIAYAGIgMgDgAkJK4IgsgFIgCgBIgLgCIgRgFIAAABIgDgCQgRgEgQgFIgwgWIgZgOQgFgCgDgEIgKgEIgCgBQgJgEgCgEIgBgBIgEgCIgBAAQgOgGgDgGQgbgUgagWIgogkQgUgTgSgUQgvg3gnhAQgig7gVhBQgVhBgGhFQgGhGAHhEQAHhFAUhCQAUhBAfg8QAhg+Arg1QAvg8A3gzQA3gyBBgmQA0geA3gWQA2gWA6gOQA2gKA4gEQA2gHA0gBQA3AHA2ALQBKAMBHAbQBCAXA+AgQA+AgA5AnQA6AmAzAvQAyAuAoA3QAgAsAaAwIAJASIhBhfIAeAxQAcAwANA1IAMA1QALAvgCAwQgBAbAAAZQABA4gQA2QgOAugWAqIgbAyQgXAwgjAqQgkApgsAjIg3AuQgtAmg1AZIgPAHQgeAYglASQhZAtheAbQgYAHgWACQh5Aih6AAQhIAAhKgMgAMPgyIAAAYIABgRIAAgUIgBANgALMk9QAgAzAPA5IABABQgRg7ggg1IABADgAlZo6QgQAIgOAKQgRALgHAQQgEAIAEAHQAVANAYgQQASgNASgLQANgIAEgNIgBgDQgBgGgHgBIgVgFQgGAAgIADgAk9K1IABABIAAAAIgBgBgAlRKxIABAAIABABIgCgBg");
	this.shape_2.setTransform(48.1,70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvAcQgDgHADgIQAIgOAQgLQAPgKAOgIQAHgDAGAAIAVAFQAHABACAGIAAADQgDANgNAGQgTALgQANQgNAJgMAAQgKAAgKgGg");
	this.shape_3.setTransform(12.9,16.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.3,-0.5,165.8,146.7);


(lib.尷尬背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5));

	// 圖層 2
	this.instance = new lib.多條線();
	this.instance.setTransform(376.1,-134.8,1,1.36,0,0,0,357.9,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:375.9,y:139.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-277.6,761,285.6);


(lib.過關結語 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.雲狀標題背景();
	this.instance.setTransform(243.4,152.4,0.828,0.89,0,0,0,295.5,143.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.94,x:243.3},6).to({scaleX:0.83,scaleY:0.89,x:243.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,471.1,285.7);


(lib.彩花落不停 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.彩花碎片();
	this.instance.setTransform(97,30);

	this.instance_1 = new lib.彩花碎片();
	this.instance_1.setTransform(98,160);

	this.instance_2 = new lib.彩花碎片();
	this.instance_2.setTransform(30,234);

	this.instance_3 = new lib.彩花碎片();
	this.instance_3.setTransform(305,241);

	this.instance_4 = new lib.彩花碎片();
	this.instance_4.setTransform(243,137);

	this.instance_5 = new lib.彩花碎片();
	this.instance_5.setTransform(287,76);

	this.instance_6 = new lib.彩花碎片();
	this.instance_6.setTransform(216,13);

	this.instance_7 = new lib.彩花碎片();
	this.instance_7.setTransform(12,107);

	this.instance_8 = new lib.彩花碎片();
	this.instance_8.setTransform(226,-11.9);

	this.instance_9 = new lib.彩花碎片();
	this.instance_9.setTransform(110,106);

	this.instance_10 = new lib.彩花碎片();
	this.instance_10.setTransform(70,199);

	this.instance_11 = new lib.彩花碎片();
	this.instance_11.setTransform(264,210);

	this.instance_12 = new lib.彩花碎片();
	this.instance_12.setTransform(326,27);

	this.instance_13 = new lib.彩花碎片();
	this.instance_13.setTransform(317,-19.9);

	this.instance_14 = new lib.彩花碎片();
	this.instance_14.setTransform(52,31);

	this.instance_15 = new lib.彩花碎片();
	this.instance_15.setTransform(330,197);

	this.instance_16 = new lib.彩花碎片();
	this.instance_16.setTransform(278,167);

	this.instance_17 = new lib.彩花碎片();
	this.instance_17.setTransform(310,141);

	this.instance_18 = new lib.彩花碎片();
	this.instance_18.setTransform(244,64);

	this.instance_19 = new lib.彩花碎片();
	this.instance_19.setTransform(274,11);

	this.instance_20 = new lib.彩花碎片();
	this.instance_20.setTransform(69,-33.9);

	this.instance_21 = new lib.彩花碎片();
	this.instance_21.setTransform(0,178);

	this.instance_22 = new lib.彩花碎片();
	this.instance_22.setTransform(51,130);

	this.instance_23 = new lib.彩花碎片();
	this.instance_23.setTransform(30,72);

	this.instance_24 = new lib.彩花碎片();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24,p:{x:0,y:0}},{t:this.instance_23,p:{x:30,y:72}},{t:this.instance_22,p:{x:51,y:130}},{t:this.instance_21,p:{x:0,y:178}},{t:this.instance_20,p:{x:69,y:-33.9}},{t:this.instance_19,p:{x:274,y:11}},{t:this.instance_18,p:{x:244,y:64}},{t:this.instance_17,p:{x:310,y:141}},{t:this.instance_16,p:{x:278,y:167}},{t:this.instance_15,p:{x:330,y:197}},{t:this.instance_14,p:{x:52,y:31}},{t:this.instance_13,p:{x:317,y:-19.9}},{t:this.instance_12,p:{x:326,y:27}},{t:this.instance_11,p:{x:264,y:210}},{t:this.instance_10,p:{x:70,y:199}},{t:this.instance_9,p:{x:110,y:106}},{t:this.instance_8,p:{x:226,y:-11.9}},{t:this.instance_7,p:{x:12,y:107}},{t:this.instance_6,p:{x:216,y:13}},{t:this.instance_5,p:{x:287,y:76}},{t:this.instance_4,p:{x:243,y:137}},{t:this.instance_3,p:{x:305,y:241}},{t:this.instance_2,p:{x:30,y:234}},{t:this.instance_1,p:{x:98,y:160}},{t:this.instance,p:{x:97,y:30}}]}).to({state:[{t:this.instance_24,p:{x:-0.9,y:-14.9}},{t:this.instance_23,p:{x:57,y:75}},{t:this.instance_22,p:{x:12,y:99}},{t:this.instance_21,p:{x:28,y:174}},{t:this.instance_20,p:{x:63,y:-15.9}},{t:this.instance_19,p:{x:268,y:-11.9}},{t:this.instance_18,p:{x:261,y:84}},{t:this.instance_17,p:{x:333,y:145}},{t:this.instance_16,p:{x:290,y:133}},{t:this.instance_15,p:{x:324,y:183}},{t:this.instance_14,p:{x:25,y:29}},{t:this.instance_13,p:{x:326,y:1}},{t:this.instance_12,p:{x:341,y:44}},{t:this.instance_11,p:{x:239,y:221}},{t:this.instance_10,p:{x:12,y:204}},{t:this.instance_9,p:{x:93,y:62}},{t:this.instance_8,p:{x:209,y:-4.9}},{t:this.instance_7,p:{x:60,y:141}},{t:this.instance_6,p:{x:237,y:24}},{t:this.instance_5,p:{x:306,y:61}},{t:this.instance_4,p:{x:237,y:141}},{t:this.instance_3,p:{x:297,y:220}},{t:this.instance_2,p:{x:66,y:235}},{t:this.instance_1,p:{x:92.1,y:184}},{t:this.instance,p:{x:102,y:11}}]},3).to({state:[{t:this.instance_24,p:{x:-8.9,y:4}},{t:this.instance_23,p:{x:64,y:86}},{t:this.instance_22,p:{x:1,y:110}},{t:this.instance_21,p:{x:39,y:182}},{t:this.instance_20,p:{x:62,y:5}},{t:this.instance_19,p:{x:281,y:2}},{t:this.instance_18,p:{x:252,y:94}},{t:this.instance_17,p:{x:319,y:155}},{t:this.instance_16,p:{x:299,y:135}},{t:this.instance_15,p:{x:335,y:194}},{t:this.instance_14,p:{x:34,y:45}},{t:this.instance_13,p:{x:310,y:14}},{t:this.instance_12,p:{x:342,y:60}},{t:this.instance_11,p:{x:246,y:227}},{t:this.instance_10,p:{x:6,y:213}},{t:this.instance_9,p:{x:102,y:79}},{t:this.instance_8,p:{x:213,y:14}},{t:this.instance_7,p:{x:49,y:149}},{t:this.instance_6,p:{x:253,y:44}},{t:this.instance_5,p:{x:300,y:75}},{t:this.instance_4,p:{x:248,y:152}},{t:this.instance_3,p:{x:289,y:237}},{t:this.instance_2,p:{x:56,y:240}},{t:this.instance_1,p:{x:100.1,y:197}},{t:this.instance,p:{x:90.1,y:26}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-32.7,339,280.5);


(lib.拆題成功 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B13C").s().p("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");
	this.shape.setTransform(338.8,76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(11));

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(12,1,1).p("ADwjHIAAGPInfAAIAAmPg");
	this.shape_1.setTransform(200.5,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjvDHIAAmNIHfAAIAAGNg");
	this.shape_2.setTransform(200.5,69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(12,1,1).p("AkDh3IIHAAIAADuIoHAAg");
	this.shape_3.setTransform(126,62.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkDB3IAAjtIIHAAIAADtg");
	this.shape_4.setTransform(126,62.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(12,1,1).p("ACJikIAAFJIkRAAIAAlJg");
	this.shape_5.setTransform(335.8,76.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiICkIAAlHIERAAIAAFHg");
	this.shape_6.setTransform(335.8,76.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(12,1,1).p("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");
	this.shape_7.setTransform(338.8,76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B13C").s().p("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");
	this.shape_8.setTransform(338.8,76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(11));

	// star1
	this.instance = new lib.star1();
	this.instance.setTransform(336.1,77.3,0.579,0.579,47.4,0,0,30.8,31.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:637,y:129.2,alpha:1},6).to({alpha:0},4).wait(1));

	// star1
	this.instance_1 = new lib.star1();
	this.instance_1.setTransform(336.1,77.3,0.351,0.351,101.6,0,0,30.9,31.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:427.3,y:17.4,alpha:1},6).to({alpha:0},4).wait(1));

	// star1
	this.instance_2 = new lib.star1();
	this.instance_2.setTransform(336.2,77.3,0.478,0.478,4.5,0,0,30.9,31.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:181.1,y:151.2,alpha:1},6).to({alpha:0},4).wait(1));

	// star2
	this.instance_3 = new lib.star2();
	this.instance_3.setTransform(336.1,77.4,0.654,0.654,70.2,0,0,23.2,23.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:494.9,y:149.5,alpha:1},6).to({alpha:0},4).wait(1));

	// star2
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(336.2,77.4,0.654,0.654,28.9,0,0,23.2,23.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:167.8,y:12.5,alpha:1},6).to({alpha:0},4).wait(1));

	// star2
	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(336.3,77.3,1.162,1.162,34.5,0,0,23.2,23.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:635,y:23.3,alpha:1},6).to({alpha:0},4).wait(1));

	// star2
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(336.2,77.4,1,1,0,0,0,23.2,23.3);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:23.9,y:135.6,alpha:1},6).to({alpha:0},4).wait(1));

	// star1
	this.instance_7 = new lib.star1();
	this.instance_7.setTransform(336.2,77.4,1,1,0,0,0,30.9,31.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:30.9,y:31.7,alpha:1},6).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.2,39.8,489.2,75.1);


(lib.拆解圖 = function() {
	this.initialize();

	// 圖層 1
	this.txt = new cjs.Text("如何蓋房子?", "bold 57px Microsoft JhengHei");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 65;
	this.txt.lineWidth = 523;
	this.txt.setTransform(266.3,213.9);

	this.b2 = new lib.問號();
	this.b2.setTransform(801.2,291.8,1,1,0,0,0,16.3,28.9);

	this.a2 = new lib.ansMc();
	this.a2.setTransform(653.2,251.3);

	this.b3 = new lib.問號();
	this.b3.setTransform(801.2,417.8,1,1,0,0,0,16.3,28.9);

	this.b1 = new lib.問號();
	this.b1.setTransform(801.2,163.7,1,1,0,0,0,16.3,28.9);

	this.b0 = new lib.問號();
	this.b0.setTransform(801.2,40.7,1,1,0,0,0,16.3,28.9);

	this.a0 = new lib.ansMc();
	this.a0.setTransform(651.4,-3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#84D7C7").ss(9.5).p("EAp9gJKIAASVQAACGhgBfQhfBgiGAAMhJvAAAQiGAAhfhgQhghfAAiGIAAyVQAAiGBghfQBfhgCGAAMBJvAAAQCGAABfBgQBgBfAACGg");
	this.shape.setTransform(268.5,244.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egk2AOQQiGAAhghgQhfhfAAiGIAAyVQAAiGBfhfQBghgCGAAMBJtAAAQCGAABgBgQBfBfAACGIAASVQAACGhfBfQhfBgiHAAg");
	this.shape_1.setTransform(268.5,244.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#84D7C7").ss(11.3).p("AFGAAIqLAA");
	this.shape_2.setTransform(615.7,168.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#84D7C7").ss(11.3).p("AF/AAIr9AA");
	this.shape_3.setTransform(616.8,298.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#84D7C7").ss(11.3).p("AF69pIq7AAMAAAA7TIKNAA");
	this.shape_4.setTransform(615.3,235.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#84D7C7").ss(11.3).p("AjqAAIHVAA");
	this.shape_5.setTransform(559.6,247.3);

	this.a3 = new lib.ansMc();
	this.a3.setTransform(653.2,379.4);

	this.a1 = new lib.ansMc();
	this.a1.setTransform(653.2,122.1);

	this.addChild(this.a1,this.a3,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.a0,this.b0,this.b1,this.b3,this.a2,this.b2,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3,955.7,478.6);


(lib.titleend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4));

	// 圖層 1
	this.instance = new lib.title();
	this.instance.setTransform(398.1,100,2.7,2.7,0,0,0,191.4,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2,scaleY:2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-29.8,1025.6,260.6);


(lib.bg1 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.書筆();
	this.instance.setTransform(750.9,607.4,1.329,1.38,0,0,0,45,17.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAB759").s().p("A0dC+IEUl7MAg6AAAIDsF7g");
	this.shape.setTransform(773.2,606.9,1.329,1.38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8B557").s().p("ANmJUIAArjIAAnEIEQAAIAASngAx1JUIAAynIERAAIAAHEIAALjg");
	this.shape_1.setTransform(772.2,741.1,1.329,1.38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3903E").s().p("AtlDiIAAnCIbLAAIAAHCg");
	this.shape_2.setTransform(772.3,690,1.329,1.38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C7A448").s().p("ARvBcIkRAAI7KAAIkQAAIihAAIAAi3MAo6AAAIAAC3g");
	this.shape_3.setTransform(773.2,646,1.329,1.38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_4.setTransform(776.8,626.8,1.329,1.38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_5.setTransform(778.2,572.7,1.329,1.38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_6.setTransform(777,594.7,1.329,1.38);

	this.instance_1 = new lib.課本攤開();
	this.instance_1.setTransform(218.2,604.5,1.617,1.641,0,0,0,47.1,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3903E").s().p("AsEDmIAAnLIYKAAIAAHLg");
	this.shape_7.setTransform(191.7,689.4,1.329,1.38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAB759").s().p("A2tCxIJblhMAj/AAAImMFhg");
	this.shape_8.setTransform(208,605.1,1.329,1.38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B18B38").s().p("AjVnLIB8AAIEtkZIACQ+ImrGLg");
	this.shape_9.setTransform(360.5,721.1,1.329,1.38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3A044").s().p("AjFBMIGLlhIAAC/IheBVIktEXg");
	this.shape_10.setTransform(374.9,619.1,1.329,1.38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D8B557").s().p("AL/JZIAArjIAAnOIEbAAIAASxgAwZJZIAAyxIEOAAIAAHOIAALjg");
	this.shape_11.setTransform(192.5,740.5,1.329,1.38);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C7A448").s().p("ARrBlIkaAAI4KAAIkOAAIkfAAIAAjJMAnNAAAIAADJg");
	this.shape_12.setTransform(181.7,643.5,1.329,1.38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_13.setTransform(238.9,626.8,1.329,1.38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_14.setTransform(240.3,572.7,1.329,1.38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_15.setTransform(239.1,594.8,1.329,1.38);

	this.instance_2 = new lib.課本攤開();
	this.instance_2.setTransform(1130.1,517.8,1.329,1.38,0,0,180,47.1,15.6);

	this.instance_3 = new lib.書筆();
	this.instance_3.setTransform(1262.4,601.5,1.329,1.11,0,-20,180,44.9,17.8);

	this.instance_4 = new lib.課本攤開();
	this.instance_4.setTransform(737,522.8,1.329,1.38,0,0,0,47.1,15.6);

	this.instance_5 = new lib.課本攤開();
	this.instance_5.setTransform(384.4,520.7,1.329,1.38,0,0,0,47.1,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3903E").s().p("AsEDmIAAnLIYJAAIAAHLg");
	this.shape_16.setTransform(1331.2,689.3,1.329,1.38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D8B557").s().p("AMMJZIAArjIAAnOIENAAIAASxgAwYJZIAAyxIEbAAIAAHOIAALjg");
	this.shape_17.setTransform(1330.4,740.5,1.329,1.38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C3A044").s().p("AhgAEIhkhbIAAi9IGJFfIAADLg");
	this.shape_18.setTransform(1148,619.1,1.329,1.38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B18B38").s().p("AjRFdIABw9IElERIB9AAIAASwg");
	this.shape_19.setTransform(1162.9,721.6,1.329,1.38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DAB759").s().p("AwhCxImLlgIAAgBMAkAAAAIJZFhg");
	this.shape_20.setTransform(1314.9,605.1,1.329,1.38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C7A448").s().p("APIBlIkNAAI4JAAIkbAAIh+AAIAAjJMAnOAAAIAADJg");
	this.shape_21.setTransform(1341.1,643.5,1.329,1.38);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_22.setTransform(1273,616.1,1.329,1.38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_23.setTransform(1274.4,562,1.329,1.38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_24.setTransform(1273.2,584.1,1.329,1.38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3903E").s().p("AoiCjIAAlFIRFAAIAAFFg");
	this.shape_25.setTransform(342,589.7,1.329,1.38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D8B557").s().p("AIeGpIAAoKIAAlHIDHAAIAANRgArkGpIAAtRIC+AAIAAFHIAAIKg");
	this.shape_26.setTransform(342.6,625.8,1.329,1.38);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DAB759").s().p("AwzCpII+lRIYpAAIl7FRg");
	this.shape_27.setTransform(360.1,524.1,1.329,1.38);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C7A448").s().p("AMfBHIjHAAIxFAAIi+AAIjLAAIAAiNIbtAAIAACNg");
	this.shape_28.setTransform(334.9,557.3,1.329,1.38);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B18B38").s().p("AiukvIBYAAIEDjxIACL+IldFEg");
	this.shape_29.setTransform(464.4,609.1,1.329,1.38);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C3A044").s().p("Ai8BhIF5lQIAACDIh2BsIkDDwg");
	this.shape_30.setTransform(478,533.9,1.329,1.38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B18B38").s().p("AiuDeIABr+IEEDxIBYAAIAANRg");
	this.shape_31.setTransform(1020.7,609.1,1.329,1.38);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C3A044").s().p("AhHAAIh1hsIAAiDIF5FQIAACPg");
	this.shape_32.setTransform(1007.1,533.9,1.329,1.38);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3903E").s().p("AohCjIAAlFIRDAAIAAFFg");
	this.shape_33.setTransform(1143.1,589.7,1.329,1.38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D8B557").s().p("AInGpIAAoKIAAlHIC+AAIAANRgArkGpIAAtRIDHAAIAAFHIAAIKg");
	this.shape_34.setTransform(1142.5,625.8,1.329,1.38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DAB759").s().p("Aq5CpIl6lRIYoAAII/FRg");
	this.shape_35.setTransform(1125,524.1,1.329,1.38);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C7A448").s().p("AKsBHIi/AAIxDAAIjIAAIhYAAIAAiNIbtAAIAACNg");
	this.shape_36.setTransform(1150.2,557.3,1.329,1.38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_37.setTransform(1094.9,532.6,1.063,1.104);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_38.setTransform(1096,489.3,1.063,1.104);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_39.setTransform(1095.1,507,1.063,1.104);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B3903E").s().p("AplCfIAAk9ITLAAIAAE9g");
	this.shape_40.setTransform(733.7,590.1,1.329,1.38);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DAB759").s().p("AucCwID+lfIVgAAIDbFfg");
	this.shape_41.setTransform(734.3,525.7,1.329,1.38);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D8B557").s().p("AJnGlIAAoKIAAk/IDAAAIAANJgAsmGlIAAtJIDBAAIAAE/IAAIKg");
	this.shape_42.setTransform(733.6,626.3,1.329,1.38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C7A448").s().p("AMiBBIjAAAIzMAAIjBAAIhxAAIAAiBIc5AAIAACBg");
	this.shape_43.setTransform(734.3,559.1,1.329,1.38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_44.setTransform(373.8,529.1,1.063,1.104);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_45.setTransform(374.9,485.8,1.063,1.104);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_46.setTransform(373.9,503.4,1.063,1.104);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C39001").s().p("AlYDUIAUmnIKdAAIgCGng");
	this.shape_47.setTransform(737.8,534.6,1.063,1.104);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFC515").s().p("AlPCzIAPllIKQAAIgCFlg");
	this.shape_48.setTransform(738.9,491.3,1.063,1.104);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E3AB00").s().p("AFWG9IABmqIAClkIAAhrIBGAAIgIN5gAmeG9IAstkIBAAAIgFBWIgPFkIgUGqg");
	this.shape_49.setTransform(737.9,509,1.063,1.104);

	this.instance_6 = new lib.fdfh("synched",0);
	this.instance_6.setTransform(751.2,435.6,1.329,1.38,0,0,0,565.4,315.6);

	this.addChild(this.instance_6,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.instance_1,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1508,871.2);


(lib.星星燈號組正式 = function() {
	this.initialize();

	// 圖層 1
	this.st5 = new lib.星星亮燈動畫5();
	this.st5.setTransform(305.9,60.1,1,1,0,0,0,30.2,30.2);

	this.st1 = new lib.星星亮燈動畫1();
	this.st1.setTransform(60.2,60.1,1,1,0,0,0,30.3,30.2);

	this.st2 = new lib.星星亮燈動畫2();
	this.st2.setTransform(121.6,60.1,1,1,0,0,0,30.2,30.2);

	this.st3 = new lib.星星亮燈動畫3();
	this.st3.setTransform(183.1,60.1,1,1,0,0,0,30.3,30.2);

	this.st4 = new lib.星星亮燈動畫4();
	this.st4.setTransform(244.5,60.1,1,1,0,0,0,30.2,30.2);

	this.addChild(this.st4,this.st3,this.st2,this.st1,this.st5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.1,4.8,295.8,46.2);


(lib.補間動畫16 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib._2D兔右耳();
	this.instance.setTransform(-14.7,75.8,0.994,1.047,0,19.3,-160.6,64,77.1);

	this.instance_1 = new lib._2D兔左耳();
	this.instance_1.setTransform(-21.5,82,0.994,1.047,19,0,0,23.3,72.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.4,-78.9,138.9,158.1);


(lib.補間動畫13 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib._2D白吃兔頭();
	this.instance.setTransform(3.2,-63,1,1,0,0,0,48.5,63.4);

	this.instance_1 = new lib._2D兔左手();
	this.instance_1.setTransform(-37,14.8,1,1,0,18.3,-161.6,-38.1,-0.5);

	this.instance_2 = new lib._2D兔肚();
	this.instance_2.setTransform(5,51.9);

	this.instance_3 = new lib._2D兔右腳();
	this.instance_3.setTransform(37.5,94.3,1,1,0,0,0,20.9,32.5);

	this.instance_4 = new lib._2D兔左腳();
	this.instance_4.setTransform(-24.9,94.3,1,1,0,0,180,20.9,32.5);

	this.instance_5 = new lib._2D兔右手();
	this.instance_5.setTransform(50.4,12.3,1,1,60,0,0,-31.8,11);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.8,-127,231.9,254.2);


(lib.補間動畫10 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib._2D肚皮();
	this.instance.setTransform(0.2,71.1,1.371,1.371);

	this.instance_1 = new lib.阿達兔01嘴();
	this.instance_1.setTransform(-12.1,-24.1,0.665,0.665,0,0,0,11,9.9);

	this.instance_2 = new lib._2D兔鼻();
	this.instance_2.setTransform(-9.8,-68.9,1,1,0,0,0,6.7,5.6);

	this.instance_3 = new lib.白吃兔01右眼亂動04();
	this.instance_3.setTransform(44.1,-78,0.791,0.791,0,0,180,15.5,15.5);

	this.instance_4 = new lib._2D兔左眼();
	this.instance_4.setTransform(-54.5,-78,0.791,0.791,0,0,0,15.5,15.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBB8AC").s().p("AghDtIgegDIgcgFQiDghgPh9IgDgUIAAgJIAAgFQgBg7Agg0QA/h0CKgoQAWgEAWgBIAFgBQDVgMgODqQgCAEAAAGIgEAcQgSBSg9A7QhQBDhWAFIgLABIgLgBg");
	this.shape.setTransform(-48.6,-76.7);

	this.addChild(this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.8,-100.5,129.2,204.7);


(lib._2D白吃兔01微笑動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.補間動畫10("synched",0);
	this.instance.setTransform(68.7,191.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:174.8},10).to({y:191.4},10).wait(1));

	// 圖層 2
	this.instance_1 = new lib.補間動畫13("synched",0);
	this.instance_1.setTransform(64,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:175.3},10).to({y:192},10).wait(1));

	// 圖層 3
	this.instance_2 = new lib.補間動畫16("synched",0);
	this.instance_2.setTransform(82.8,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-11.6},10).to({y:4.9},10).wait(1));

	// 圖層 4
	this.instance_3 = new lib.影子();
	this.instance_3.setTransform(69.9,318.3,3.065,2.036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-74,231.8,401.5);


(lib._2D白吃兔ingame反應 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ADAgenque:0,ADAwait:14});

	// 頭
	this.instance = new lib.白吃兔01嘴();
	this.instance.setTransform(64.8,168.6,0.999,0.999,-3.1,0,0,11,9.8);

	this.instance_1 = new lib.白吃兔01鼻();
	this.instance_1.setTransform(61,129.3,1.3,1.3,-3.1,0,0,6.6,5.5);

	this.instance_2 = new lib.絡腮鬍();
	this.instance_2.setTransform(65,169,1.031,0.873,-3.1,0,0,23.6,24.3);

	this.instance_3 = new lib.白吃兔01右眼();
	this.instance_3.setTransform(111.1,114.7,0.79,0.79,0,-3.1,176.8,15.5,15.6);

	this.instance_4 = new lib.白吃兔01左眼();
	this.instance_4.setTransform(11.7,120.2,0.79,0.79,-3.1,0,0,15.5,15.5);

	this.instance_5 = new lib.白吃兔01頭();
	this.instance_5.setTransform(65.3,132.8,0.999,0.999,-3.1,0,0,48.4,63.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]}).to({state:[{t:this.instance_5,p:{rotation:-9.9,x:57.5,y:133.3}},{t:this.instance_4,p:{rotation:-9.9,x:2.6,y:127.1}},{t:this.instance_3,p:{skewX:-9.9,skewY:170,x:100.9,y:109.8}},{t:this.instance_2,p:{regX:23.7,scaleX:1.032,rotation:-9.9,x:61.5,y:169.2}},{t:this.instance_1,p:{regX:6.7,regY:5.6,rotation:-9.9,x:52.9,y:130.4}},{t:this.instance,p:{rotation:-9.9,x:61.2,y:168.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]},2).to({state:[{t:this.instance_5,p:{rotation:-9.9,x:57.5,y:133.3}},{t:this.instance_4,p:{rotation:-9.9,x:2.6,y:127.1}},{t:this.instance_3,p:{skewX:-9.9,skewY:170,x:100.9,y:109.8}},{t:this.instance_2,p:{regX:23.7,scaleX:1.032,rotation:-9.9,x:61.5,y:169.2}},{t:this.instance_1,p:{regX:6.7,regY:5.6,rotation:-9.9,x:52.9,y:130.4}},{t:this.instance,p:{rotation:-9.9,x:61.2,y:168.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]},2).to({state:[{t:this.instance_5,p:{rotation:-9.9,x:57.5,y:133.3}},{t:this.instance_4,p:{rotation:-9.9,x:2.6,y:127.1}},{t:this.instance_3,p:{skewX:-9.9,skewY:170,x:100.9,y:109.8}},{t:this.instance_2,p:{regX:23.7,scaleX:1.032,rotation:-9.9,x:61.5,y:169.2}},{t:this.instance_1,p:{regX:6.7,regY:5.6,rotation:-9.9,x:52.9,y:130.4}},{t:this.instance,p:{rotation:-9.9,x:61.2,y:168.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]},2).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]},2).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:135.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:123.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:117.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:172}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:132.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:171.6}}]},1).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:137.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:125.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:119.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:174}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:134.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:173.6}}]},1).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:141.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:129.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:123.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:178}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:138.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:177.6}}]},1).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:137.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:125.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:119.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:174}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:134.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:173.6}}]},1).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:135.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:123.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:117.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:172}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:132.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:171.6}}]},1).to({state:[{t:this.instance_5,p:{rotation:-3.1,x:65.3,y:132.8}},{t:this.instance_4,p:{rotation:-3.1,x:11.7,y:120.2}},{t:this.instance_3,p:{skewX:-3.1,skewY:176.8,x:111.1,y:114.7}},{t:this.instance_2,p:{regX:23.6,scaleX:1.031,rotation:-3.1,x:65,y:169}},{t:this.instance_1,p:{regX:6.6,regY:5.5,rotation:-3.1,x:61,y:129.3}},{t:this.instance,p:{rotation:-3.1,x:64.8,y:168.6}}]},1).wait(3));

	// 肚
	this.instance_6 = new lib.白吃兔01絡腮鬍();
	this.instance_6.setTransform(68.9,262.5,1.371,1.371);

	this.instance_7 = new lib.白吃兔01肚();
	this.instance_7.setTransform(68.9,243.8);

	this.instance_8 = new lib.白吃兔01右腳();
	this.instance_8.setTransform(101.5,286.2,1,1,0,0,0,20.9,32.5);

	this.instance_9 = new lib.白吃兔01左腳();
	this.instance_9.setTransform(39,286.2,1,1,0,0,180,20.9,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).wait(3));

	// 右手
	this.instance_10 = new lib.棍子();
	this.instance_10.setTransform(193.4,138.8,1,1,0,0,0,49.3,88.2);

	this.instance_11 = new lib.白吃兔01右手();
	this.instance_11.setTransform(146.3,193.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3ED").s().p("AAGB4IAAgSQgBACgSgcQgVgcgJgWQgKgWAAglQgBggAEgNQAEgMAQgTQAQgVAeAGQAeAEAGArQAGAsgNA7QgMA8gTApIgIgHg");
	this.shape.setTransform(167,155.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFA792").s().p("AgJB+QARgpANg8QANg7gGgsQgGgrgdgEQgfgGgQAVQgRATgEAMQgDANAAAgQABAlAKAWQAIAWAWAcQAUAcAAgCIABASQgPgPgGgLQgIgOgYg5QgYg1AIgoIACgKQANgrAygVQApgSAZAMQATAJANAfQAdBFg8B6QgRAkgYApQgOgTgBgMg");
	this.shape_1.setTransform(169.5,155.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACGunIgIADQhbhXhDBSIhmdUQBQBRBWhaIBn9J");
	this.shape_2.setTransform(161.2,110.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D9D9D9","#FFFFFF"],[0,1],4.7,86.6,-1.7,-79.6).s().p("AiFOrIBl9UQBDhSBbBXIAIgDIABAAIhndJQgsAvgsAAQgoAAglgmg");
	this.shape_3.setTransform(161.2,110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:193.4,y:138.8,regX:49.3}}]}).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:-23,x:139.2,y:178.9}},{t:this.instance_10,p:{regY:88.1,scaleX:0.999,scaleY:0.999,rotation:-23.7,x:157.8,y:115.4,regX:49.3}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:191.4,y:141.1,regX:49.3}}]},2).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:-23,x:139.2,y:178.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:191.4,y:141.1,regX:49.3}}]},2).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:-23,x:139.2,y:178.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},2).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:191.4,y:141.1,regX:49.3}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:193.4,y:138.8,regX:49.3}}]},2).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:7.5,x:147.2,y:198.2}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:193.4,y:147.8,regX:49.3}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:11.3,x:147.5,y:200.9}},{t:this.instance_10,p:{regY:88.1,scaleX:1,scaleY:1,rotation:3.3,x:197.4,y:153.8,regX:49.2}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:11.3,x:147.5,y:200.9}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:3,x:196.4,y:153.4,regX:49.3}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:11.3,x:147.5,y:200.9}},{t:this.instance_10,p:{regY:88.1,scaleX:1,scaleY:1,rotation:6.3,x:201.4,y:153.1,regX:49.3}}]},1).to({state:[{t:this.instance_11,p:{scaleX:0.999,scaleY:0.999,rotation:7.5,x:147.2,y:198.2}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:196.4,y:145.8,regX:49.3}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1,scaleY:1,rotation:0,x:146.3,y:193.1}},{t:this.instance_10,p:{regY:88.2,scaleX:1,scaleY:1,rotation:0,x:193.4,y:138.8,regX:49.3}}]},1).wait(3));

	// 左手
	this.instance_12 = new lib.白吃兔01左手();
	this.instance_12.setTransform(26.9,206.6,0.998,0.998,128.1,0,0,-38.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({regX:-38.1,rotation:143.1},0).wait(2).to({regX:-38,rotation:128.1},0).wait(2).to({regX:-38.1,rotation:143.1},0).wait(2).to({regX:-38,rotation:128.1},0).wait(2).to({regX:-38.1,rotation:143.1},0).wait(2).to({regX:-38,rotation:128.1},0).wait(2).wait(1).to({rotation:132.4,y:206.7},0).wait(1).to({regY:-0.5,rotation:137.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:144.4,y:206.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:137.8,y:206.7},0).wait(1).to({regY:-0.4,rotation:132.4},0).wait(1).to({rotation:128.1,y:206.6},0).wait(3));

	// 耳
	this.instance_13 = new lib.白吃兔01右耳();
	this.instance_13.setTransform(63.8,88.8,0.993,1.046,0,-3.1,176.8,59,76);

	this.instance_14 = new lib.白吃兔01左耳();
	this.instance_14.setTransform(49.2,93,0.993,1.046,-3.1,0,0,20.2,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]}).to({state:[{t:this.instance_14,p:{rotation:-9.9,x:36.7,y:95.6}},{t:this.instance_13,p:{regY:76.1,skewX:-9.9,skewY:170,x:50.9,y:89.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-9.9,x:36.7,y:95.6}},{t:this.instance_13,p:{regY:76.1,skewX:-9.9,skewY:170,x:50.9,y:89.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-9.9,x:36.7,y:95.6}},{t:this.instance_13,p:{regY:76.1,skewX:-9.9,skewY:170,x:50.9,y:89.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:96}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:91.8}}]},1).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:98}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:93.8}}]},1).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:102}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:97.8}}]},1).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:98}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:93.8}}]},1).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:96}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:91.8}}]},1).to({state:[{t:this.instance_14,p:{rotation:-3.1,x:49.2,y:93}},{t:this.instance_13,p:{regY:76,skewX:-3.1,skewY:176.8,x:63.8,y:88.8}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-54,278.3,373.2);


(lib.按鈕再挑戰一次 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AHyCfQgFgHAAgFQAAgHAFgGQAuglATgcQARgZABgkIAAgoQAAgKAGgFQAFgEAKAAQAKAAAFAEQAFADAAAMIAAAmQAAAjANAUQAZAgA5AoQAFAEAAAIQAAAKgFAEQgFAHgNAAQgGAAgGgEQglgXgtg1IgDgBIgDABQggAwglAbQgIAGgHAAQgKAAgHgIgAquCjQgFgFAAgIIAAhBIgNAAQgIAAgFgFQgEgEAAgLQAAgIAEgFQAFgEAIAAIANAAIAAhgQAAgmAbAAIBbAAIAAggIh+AAQgKAAgFgEQgEgEAAgLQAAgKAEgFQAFgEAKAAIEjAAQALAAAEAEQAEAEAAALQAAAJgDAEQgFAGgLAAIh+AAIAAAgIBaAAQAdAAAAAmIAABgIAMAAQAJAAAFAEQADAEAAAJQAAAJgDAEQgFAHgJAAIgMAAIAAAyQAAASgIAGQgKAHgTAAQgsAAgWgJQgIgFgCgKQAAgUAQgBIALABQAXAGASAAQAGgBAAgGIAAgkIjFAAIAABBQAAAKgGAEQgFADgKAAQgKAAgEgEgAoWAwIBQAAIAAgeIhQAAgAqLAwIBOAAIAAgeIhOAAgAoWgPIBQAAIAAgaQAAgHgFAAIhLAAgAqLgpIAAAaIBOAAIAAghIhHAAQgHAAAAAHgAjqCeQgFgGgCgIQAAgHAGgGQAkgkAKgeQAKgaADgzIgeAAQgJAAgFgEQgFgEAAgLQAAgKAFgFQAFgEAJAAICoAAQALAAAEAEQAEAEAAALQAAAIgDAFQgFAGgLAAIgiAAIAACDQAAAGAFAAIAGAAQALgBABgNQACgKABgbQAAgFAFgEIAJgCIAMABQAIADABAMQAAAmgGAVQgHAVgVAEIgrAAQgWgCAAghIAAiMIgcAAQgCAvgKAhQgOA0glAjQgKAJgIAAQgJAAgGgGgAGOCSQgGgGgBgHQAAgFADgGQADgIAggzQAcguAHgJQAFgFAKAAQAEAAAGADQAGAFAAAFQAAAIgDAHQgEAOgZApQgcAzgMALQgDAEgKABQgFgBgHgGgAldCLQgDgFgBgJQAAgHAJgGIAlgOIAAhaIgZAAQgJAAgEgFQgFgDAAgJQAAgJAFgFQAEgEAJAAIAZAAIAAhLIgbAAQgIAAgFgFQgEgDAAgLQAAgJAEgFQAFgDAIAAIBdAAQAKAAAEADQADAEAAAKQAAAJgCAEQgFAGgKAAIgdAAIAABLIAcAAQAJAAAEAEQAEAEAAAKQAAAIgDADQgFAGgJAAIgcAAIAABMIAZgJIAMgCQAFAAAEAEQAGAFABAIQAAAIgHAFQgqAWg3ASQgGACgLAAQgGAAgFgGgAAqASQgLAAgGgFQgFgFAAgKQAAgLAFgGQAGgFALAAIEiAAQAMAAAFAFQAFAEAAANQAAAIgEAFQgGAHgMAAgAKXACQgFgCAAgGQAAgEADgJQAQgxAAgHQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIhuAAQgOAjgOAXQgFAMgOAAQgIgBgIgGQgEgGAAgIQAAgDAEgKQAeg2ASg8QAEgMAMAAQAJAAAGAEQAHAFAAAKQgBAOgHATIBzAAQAOAAAHAFQAIAGAAAOIgBANQgIAqgRAiQgCACgDACQgEAEgIAAQgKAAgGgGgAGahSQgJAAgFgEQgFgEAAgLQAAgJAFgFQAFgFAJAAIBSAAQAKAAAFAFQAEADAAALQAAAJgEAEQgFAGgKAAgAi8hmQgKAAgFgFQgFgDAAgLQAAgJAFgGQAFgEAKAAICGAAQALAAAEAEQAEAEAAALQAAAJgDAEQgFAGgLAAg");
	this.shape.setTransform(0.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AI4C1QgGgIAAgFQAAgJAGgGQA1gqAVggQATgdACgoIAAgvQAAgLAGgGQAGgFAMAAQALAAAGAFQAGAEgBANIAAArQAAApAPAWQAcAlBBAtQAHAFAAAKQAAAKgHAGQgGAHgOAAQgHAAgHgEQgqgbgzg8IgDgCQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgmA3gqAfQgJAHgIAAQgMgBgHgJgAsPC6QgFgGAAgJIAAhLIgPAAQgKAAgFgFQgFgEAAgMQAAgKAFgGQAFgEAKAAIAPAAIAAhuQAAgsAeAAIBpAAIAAgkIiQAAQgLAAgGgFQgGgEAAgNQAAgLAGgFQAGgFALAAIFMAAQALAAAGAFQAEAEAAAMQAAALgDAEQgHAHgLAAIiQAAIAAAkIBmAAQAiAAAAAsIAABuIANAAQALAAAEAEQAFAEAAAMQAAAKgEAEQgFAHgLAAIgNAAIAAA6QgBAVgJAGQgLAIgXAAQgxAAgZgKQgKgGgCgLQABgXASgBIAMABQAbAHAUAAQAHgBAAgHIAAgqIjhAAIAABLQAAALgHAFQgFAEgMAAQgLAAgFgFgAphA3IBbAAIAAgjIhbAAgArnA3IBaAAIAAgjIhaAAgAphgRIBbAAIAAgfQAAgHgGAAIhVAAgArngwIAAAfIBaAAIAAgmIhSAAQgIAAAAAHgAkMC0QgFgGgCgKQgBgIAIgHQApgpALgiQAMgdACg7IgiAAQgKAAgGgFQgFgFAAgMQAAgLAFgGQAGgEAKAAIDBAAQALAAAFAEQAGAFgBAMQAAAKgEAFQgGAHgLAAIgoAAIAACWQAAAHAHAAIAHAAQALgCACgPQACgLABgeQAAgGAGgFIAKgCIANABQAKADABAOQgBArgGAYQgJAZgWAEIgyAAQgZgDAAglIAAigIggAAQgCA2gLAlQgRA8gqAoQgMAKgIAAQgKAAgIgHgAHFCnQgHgHAAgJQAAgFAEgHQADgJAlg7IAng+QAGgGALAAQAFAAAHAEQAGAFAAAHQAAAIgDAIQgFARgcAvQggA5gOANQgDAEgLABQgGAAgJgHgAmPCeQgDgGAAgJQAAgJAKgHIApgQIAAhmIgdAAQgJAAgFgGQgGgDAAgLQAAgKAGgFQAFgFAJAAIAdAAIAAhWIgeAAQgKAAgFgFQgFgEAAgNQAAgKAFgFQAFgEAKAAIBqAAQALAAAFAEQADAEAAALQAAALgDAEQgFAHgLAAIgiAAIAABWIAgAAQALAAAFAFQAEAEAAALQAAAKgEADQgFAHgLAAIggAAIAABWIAcgKQAIgCAHAAQAGAAAEAEQAHAGABAKQAAAJgIAGQgwAZg+AUQgHADgNAAQgHAAgGgIgAAwAUQgMAAgHgFQgGgFgBgMQABgNAGgHQAHgGAMAAIFLAAQANAAAGAGQAGAFgBAPQABAJgFAFQgGAIgOAAgAL0ACQgGgCAAgHQABgFADgKQASg4AAgIQABgBgGAAIh9AAQgRAngPAbQgGAOgQAAQgJgCgJgGQgEgHgBgJQAAgEAFgLQAig+AVhEQAFgOANAAQALAAAGAFQAIAFAAAMQgCAQgHAWICDAAQARAAAHAGQAKAGAAAQQAAAHgCAJQgJAvgTAmIgGAGQgFAEgJAAQgMAAgGgHgAHUhdQgKAAgGgGQgGgEAAgMQAAgLAGgGQAGgFAKAAIBdAAQALAAAGAFQAEAEAAANQAAAKgEAEQgFAIgMAAgAjYh1QgKAAgGgFQgFgEAAgNQAAgKAFgGQAGgFAKAAICaAAQAMAAAFAFQAFAEAAAMQAAALgEAEQgGAHgMAAg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// 圖層 1
	this.instance = new lib.按鈕_底();
	this.instance.setTransform(0.1,0,1,1,0,0,0,105,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-29.9,210,60);


(lib.按鈕進入 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AFBChQgngqgkhLQgchAgKhRIgBgCQgCALgEAKQgWBMgkA6QgtBNgtAsQgGAHgJABQgJAAgFgGQgGgEAAgJQAAgNAMgQQAtgzAkg9QAjg9AVhEIhEAAQgKAAgGgHQgFgGAAgKQAAgLAGgGQAFgFAKAAIB2AAQAYAAAEAWQAJBjAhA5QAkBGA1AuQAHAHgBAKQAAAKgGAGQgHAHgNAAQgQgCgTgSgAi9CzQhYAAgcgXQgFgDgEAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgLAJgOAKQgHAFgFAAQgHAAgDgCQgIgHgFgKIgCgHQABgJAJgFQAOgIAQgMQAEgDAAgEIAAhQQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgYAAQgLgCgDgEQgFgEAAgMQAAgIAFgCQAFgGAJAAIAoAAQAaAAAAAWIAABiQADAMAPAGQAZAIA3ABIBggBIBDgBQAIAAAFADQAGAGAAAKQAAAMgFAGQgFAEgMABgAjlB1QgbAAAAgdIAAiBIgHAJQgFAGgKAAQgJAAgHgEQgDgDgBgEIgBABQgEAHgKACQgFAAgEgCQgFgCgEgEQgRgOgWgPIgEgDQgFgGgBgHQAAgIAGgGQAHgGAIAAQAFAAAFADQAdARATARQAGAHAAAEIAAgBQAog2ATg+QADgKAKgBQAJAAAHAEQAHADAAAKQgBAHgCAGIgGATIA5AAQAEgPADgQQAEgPAOAAQAJAAAHAFQAIAEAAAMIgBADQgCALgEALIA8AAQAKAAAEADQAFAEAAALQAAAJgDAEQgEAGgMAAIhBAAIAAAgIA3AAQALAAAEAFQAEAEAAAKQABAKgEADQgEAGgMAAIg3AAIAAAfIA3AAQALAAAEAFQAEADAAALQABAJgEAEQgEAGgMAAIg3AAIAAAhIBHAAQATAAAAASQAAAVgTAAgAjYBGQAAAIAEAAIA6AAIAAghIg+AAgAjYAHIA+AAIAAgfIg+AAgAjYg+IA+AAIAAggIg+AAgAk5hrIgIgFQgRgPgVgNIgEgEQgGgFABgHQgBgIAGgHQAGgGAIAAQAGAAAFADQAbARAUAQQAHAJgBAFQAAAHgEAGQgFAGgJAEQgFAAgFgDg");
	this.shape.setTransform(0.8,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AFBChQgngqgkhLQgchAgKhRIgBgCQgCALgEAKQgWBMgkA6QgtBNgtAsQgGAHgJABQgJAAgFgGQgGgEAAgJQAAgNAMgQQAtgzAkg9QAjg9AVhEIhEAAQgKAAgGgHQgFgGAAgKQAAgLAGgGQAFgFAKAAIB2AAQAYAAAEAWQAJBjAhA5QAkBGA1AuQAHAHgBAKQAAAKgGAGQgHAHgNAAQgQgCgTgSgAi9CzQhYAAgcgXQgFgDgEAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgLAJgOAKQgHAFgFAAQgHAAgDgCQgIgHgFgKIgCgHQABgJAJgFQAOgIAQgMQAEgDAAgEIAAhQQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgYAAQgLgCgDgEQgFgEAAgMQAAgIAFgCQAFgGAJAAIAoAAQAaAAAAAWIAABiQADAMAPAGQAZAIA3ABIBggBIBDgBQAIAAAFADQAGAGAAAKQAAAMgFAGQgFAEgMABgAjlB1QgbAAAAgdIAAiBIgHAJQgFAGgKAAQgJAAgHgEQgDgDgBgEIgBABQgEAHgKACQgFAAgEgCQgFgCgEgEQgRgOgWgPIgEgDQgFgGgBgHQAAgIAGgGQAHgGAIAAQAFAAAFADQAdARATARQAGAHAAAEIAAgBQAog2ATg+QADgKAKgBQAJAAAHAEQAHADAAAKQgBAHgCAGIgGATIA5AAQAEgPADgQQAEgPAOAAQAJAAAHAFQAIAEAAAMIgBADQgCALgEALIA8AAQAKAAAEADQAFAEAAALQAAAJgDAEQgEAGgMAAIhBAAIAAAgIA3AAQALAAAEAFQAEAEAAAKQABAKgEADQgEAGgMAAIg3AAIAAAfIA3AAQALAAAEAFQAEADAAALQABAJgEAEQgEAGgMAAIg3AAIAAAhIBHAAQATAAAAASQAAAVgTAAgAjYBGQAAAIAEAAIA6AAIAAghIg+AAgAjYAHIA+AAIAAgfIg+AAgAjYg+IA+AAIAAggIg+AAgAk5hrIgIgFQgRgPgVgNIgEgEQgGgFABgHQgBgIAGgHQAGgGAIAAQAGAAAFADQAbARAUAQQAHAJgBAFQAAAHgEAGQgFAGgJAEQgFAAgFgDg");
	this.shape_1.setTransform(0.8,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// 圖層 1
	this.instance = new lib.按鈕_底();
	this.instance.setTransform(0.1,0,1,1,0,0,0,105,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-29.9,210,60);


(lib.mc_2D白吃兔01甩手 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2D肚皮();
	this.instance.setTransform(68.9,262.5,1.371,1.371);

	this.instance_1 = new lib._2D兔嘴();
	this.instance_1.setTransform(64.5,164.6,1,1,0,0,0,11.1,9.8);

	this.instance_2 = new lib._2D兔鼻();
	this.instance_2.setTransform(58.8,122.4,1,1,0,0,0,6.7,5.6);

	this.instance_3 = new lib.絡腮鬍();
	this.instance_3.setTransform(63.7,165.3,1.032,0.874,0,0,0,23.8,24.2);

	this.instance_4 = new lib._2D兔右眼();
	this.instance_4.setTransform(112.8,113.3,0.791,0.791,0,0,180,15.5,15.5);

	this.instance_5 = new lib._2D兔左眼();
	this.instance_5.setTransform(14.1,113.3,0.791,0.791,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]}).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]},1).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]},1).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:258.5}}]},1).to({state:[{t:this.instance_5,p:{y:111.3}},{t:this.instance_4,p:{y:111.3}},{t:this.instance_3,p:{y:163.3}},{t:this.instance_2,p:{y:120.4}},{t:this.instance_1,p:{y:162.6}},{t:this.instance,p:{y:256.5}}]},1).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:258.5}}]},4).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]},1).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]},1).to({state:[{t:this.instance_5,p:{y:113.3}},{t:this.instance_4,p:{y:113.3}},{t:this.instance_3,p:{y:165.3}},{t:this.instance_2,p:{y:122.4}},{t:this.instance_1,p:{y:164.6}},{t:this.instance,p:{y:262.5}}]},1).wait(1));

	// 圖層 2
	this.instance_6 = new lib._2D白吃兔頭();
	this.instance_6.setTransform(67.1,128.9,1,1,0,0,0,48.5,63.4);

	this.instance_7 = new lib._2D兔左手();
	this.instance_7.setTransform(27,206.7,0.998,0.998,0,-32.2,147.7,-38.1,-0.6);

	this.instance_8 = new lib._2D兔肚();
	this.instance_8.setTransform(68.9,243.8);

	this.instance_9 = new lib._2D兔右腳();
	this.instance_9.setTransform(101.5,286.2,1,1,0,0,0,20.9,32.5);

	this.instance_10 = new lib._2D兔左腳();
	this.instance_10.setTransform(39,286.2,1,1,0,0,180,20.9,32.5);

	this.instance_11 = new lib._2D兔右手();
	this.instance_11.setTransform(114.3,204.2,0.998,0.998,48.6,0,0,-31.9,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{regX:-31.9,regY:11,scaleX:0.998,scaleY:0.998,rotation:48.6,x:114.3,y:204.2}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38.1,scaleX:0.998,scaleY:0.998,skewX:-32.2,skewY:147.7,x:27,y:206.7,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]}).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:10.9,scaleX:0.997,scaleY:0.997,rotation:25.3,x:114.4,y:204.2}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38,scaleX:0.997,scaleY:0.997,skewX:-7.3,skewY:172.6,x:26.9,y:206.7,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:10.9,scaleX:0.996,scaleY:0.996,rotation:12.5,x:114.4,y:204.1}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38,scaleX:0.996,scaleY:0.996,skewX:9.8,skewY:-170.1,x:26.9,y:206.6,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:11.1,scaleX:0.999,scaleY:0.999,rotation:-11.2,x:114.4,y:202.1}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:239.8}},{t:this.instance_7,p:{regX:-38.2,scaleX:0.998,scaleY:0.998,skewX:21.1,skewY:-158.8,x:27,y:204.7,regY:-0.5}},{t:this.instance_6,p:{y:128.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.9,regY:11,scaleX:0.999,scaleY:0.999,rotation:-18.5,x:114.4,y:202.1}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:237.8}},{t:this.instance_7,p:{regX:-38.1,scaleX:0.998,scaleY:0.998,skewX:28.9,skewY:-151,x:26.9,y:204.6,regY:-0.5}},{t:this.instance_6,p:{y:126.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:11.1,scaleX:0.999,scaleY:0.999,rotation:-11.2,x:114.4,y:202.1}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:239.8}},{t:this.instance_7,p:{regX:-38.2,scaleX:0.998,scaleY:0.998,skewX:21.1,skewY:-158.8,x:27,y:204.7,regY:-0.5}},{t:this.instance_6,p:{y:128.9}}]},4).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:10.9,scaleX:0.996,scaleY:0.996,rotation:12.5,x:114.4,y:204.1}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38,scaleX:0.996,scaleY:0.996,skewX:9.8,skewY:-170.1,x:26.9,y:206.6,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.8,regY:10.9,scaleX:0.997,scaleY:0.997,rotation:25.3,x:114.4,y:204.2}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38,scaleX:0.997,scaleY:0.997,skewX:-7.3,skewY:172.6,x:26.9,y:206.7,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]},1).to({state:[{t:this.instance_11,p:{regX:-31.9,regY:11,scaleX:0.998,scaleY:0.998,rotation:48.6,x:114.3,y:204.2}},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8,p:{y:243.8}},{t:this.instance_7,p:{regX:-38.1,scaleX:0.998,scaleY:0.998,skewX:-32.2,skewY:147.7,x:27,y:206.7,regY:-0.6}},{t:this.instance_6,p:{y:128.9}}]},1).wait(1));

	// 圖層 3
	this.instance_12 = new lib._2D兔右耳();
	this.instance_12.setTransform(89.2,72,0.994,1.047,0,0,180,42.7,68.8);

	this.instance_13 = new lib._2D兔左耳();
	this.instance_13.setTransform(80.4,83,0.994,1.047,0,0,0,42.7,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]}).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.993,rotation:-0.8,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:2.8,skewY:-177.1,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.993,rotation:-13.9,scaleY:1.046,x:80.5,y:81}},{t:this.instance_12,p:{skewX:8.3,skewY:-171.6,regX:57.6,regY:63.5,scaleX:0.993,scaleY:1.046,x:73.7,y:69}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.993,rotation:-0.8,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:2.8,skewY:-177.1,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},4).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).to({state:[{t:this.instance_13,p:{scaleX:0.994,rotation:0,scaleY:1.047,x:80.4,y:83}},{t:this.instance_12,p:{skewX:0,skewY:180,regX:42.7,regY:68.8,scaleX:0.994,scaleY:1.047,x:89.2,y:72}}]},1).wait(1));

	// 圖層 4
	this.instance_14 = new lib.影子();
	this.instance_14.setTransform(69.9,318.3,3.065,2.036);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-64.1,235.3,391.6);


(lib._2D阿達兔03標題pose動畫 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.白吃兔01扭左手();
	this.instance.setTransform(17,207.1,0.998,0.998,0,41.3,-138.6,-35.7,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,skewX:20.5,skewY:-159.3,x:18,y:205.2},4).to({scaleX:1,scaleY:1,skewX:41.3,skewY:-138.5,x:17,y:207.1},5).wait(5));

	// 圖層 2
	this.instance_1 = new lib.阿達兔03張嘴();
	this.instance_1.setTransform(61.8,174.7,0.765,0.705,0,-3.9,-4.9,10.9,9.7);

	this.instance_2 = new lib.白吃兔01鼻_1();
	this.instance_2.setTransform(58.8,122.4,1,1,0,0,0,6.7,5.6);

	this.instance_3 = new lib._2D兔右眼();
	this.instance_3.setTransform(112.8,113.3,0.791,0.791,0,0,180,15.5,15.5);

	this.instance_4 = new lib.阿達兔03左眼();
	this.instance_4.setTransform(14.1,113.3,0.791,0.791,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},4).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},5).wait(5));

	// 圖層 3
	this.instance_5 = new lib.白吃兔01頭_1();
	this.instance_5.setTransform(66.4,130.1,1,1,0,0,0,48.5,63.4);

	this.instance_6 = new lib.白吃兔01扭肚();
	this.instance_6.setTransform(92.5,309.8,1,1,0,0,180,56.6,61.2);

	this.instance_7 = new lib.白吃兔01扭右腳();
	this.instance_7.setTransform(14,286.2,1,1,0,0,180,20.9,32.5);

	this.instance_8 = new lib.白吃兔01扭左腳();
	this.instance_8.setTransform(101.8,286.2,1,1,0,0,0,20.9,32.5);

	this.instance_9 = new lib.阿達兔02右手();
	this.instance_9.setTransform(146.2,189.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},4).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},5).wait(5));

	// 圖層 4
	this.instance_10 = new lib.白吃兔01右耳_1();
	this.instance_10.setTransform(68,81.9,0.994,1.047,0,15,-164.9,64,78.2);

	this.instance_11 = new lib.阿達兔01左耳();
	this.instance_11.setTransform(63.7,90.4,0.993,1.046,9.8,0,0,25.8,75.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_11},{t:this.instance_10}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-71.5,260.3,390.2);


(lib.titleop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("don");
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(5).call(this.frame_10));

	// 圖層 1
	this.instance = new lib.title();
	this.instance.setTransform(0,-297.2,2.411,2.411);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:210.9},6).to({y:-17},2).to({y:-7},2).wait(1));

	// 圖層 2
	this.instance_1 = new lib.mc_2D白吃兔01甩手("single",0);
	this.instance_1.setTransform(467.1,383.8,1.33,1.33,0,0,0,72,131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regY:131.7,scaleY:1.2,rotation:3.7,y:408.9},0).wait(2).to({scaleY:1.33,rotation:0,y:383.9,mode:"independent"},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-297.2,915.9,941.4);


(lib._2D阿達兔03標題pose動畫跳躍 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._2D阿達兔03標題pose動畫();
	this.instance.setTransform(-0.5,-0.8,1,1,0,0,0,57.6,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.1},2).to({y:-11.7},2).to({y:-0.7},5).to({y:16.1},2).to({y:-0.7},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,-196,260.3,390.2);


(lib.發光 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{winner:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndPlay("winner");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(11).call(this.frame_15));

	// 圖層 5
	this.next_btn = new lib.b_next();
	this.next_btn.setTransform(1122.9,650.8,1,1,0,0,0,135.2,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_btn}]}).wait(16));

	// 圖層 6
	this.next2_btn = new lib.b_next2();
	this.next2_btn.setTransform(1122.9,650.8,1,1,0,0,0,135.2,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next2_btn}]}).wait(16));

	// 圖層 3
	this.instance = new lib.拆題成功();
	this.instance.setTransform(588.1,661.8,1,1,0,0,0,347.5,100.8);

	this.instance_1 = new lib._2D阿達兔03標題pose動畫跳躍();
	this.instance_1.setTransform(159.8,510.8,0.907,0.907,6.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhqxAAiIAAhDMDVjAAAIAABDg");
	this.shape.setTransform(637.5,562.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3D9FF").s().p("EhqxAMJIAA4RMDVkAAAIAAYRg");
	this.shape_1.setTransform(638.7,642.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]},5).wait(11));

	// 圖層 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("EBUHA4EMhABgqeQgeAYgfAYQk0DkmBBaMARhAkwI4XAAMAAAgj3QgeAAgeACIgiAAQleAAkqhZMgT6AlOI+gAAMAsDgn9QhYgzhUg+IgygnMhEaAqVIrnAAIAA2cMBLrgYcQhoiXgqiqMhJZAITIAA3OMBJLAH1QAkjEB1iuMhLkgYpIAA2tIPEAAMBAnAq4QAjgeAlgcQEOjIFLhdMgR1glZIdFAAMAAAAkFIg8AAIA8ADQEfAJD8BKMAUAglbMAhOAAAMgtSApEQArAcApAeQBWBBBJBEMBHMgsDIHLAAIAAZJMhKhAYEQBKCXAUCpMBJDgIPIAAUuMhJJgH1QgZCdhMCPMBKuAYZIAAYLg");
	this.shape_2.setTransform(640.1,359.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("EAgTA4QMgWDgmNQkqBnlfAHIguAAIgnAAIA9ABIAYAAMgAeAkFI8CAAMAS1glOQj7hEjViCIghgUMgsRAoQI7CAAIAAgQMBETgqQIgYgUQiGh5hViGMhLVAYmIAA0XMBJXgI5QgahsAAhzQAAgPACgRQACg+AJg8MhJKgG/IAA0uMBLKAWSQBlipCwiQQAggbAkgaQBFgzBKgtMgx9gpvMAiBAAAMAWdAm6QBbgcBggRQDKgnDeAAIBQABIAPACIAWjCMAAAginIbJAAMgTnAm2QCsAxCaBPQBDAjBAApIBPhIIAcASMAtSgpEIAAgIIdxAAMhI2As+QCRCFBVCYIALAVIBrgbMBKRgX/IAATrMhKcAJDQAOBWAABYQAABQgLBNIaDCcMAwWAFHIAAS2MhLogWbQh2D8kVDPIAAABMAybAqGg");
	this.shape_3.setTransform(641.7,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).wait(6));

	// 圖層 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(442.7,659.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhqxAAiIAAhDMDVjAAAIAABDg");
	this.shape_5.setTransform(646.6,573.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A3D9FF").s().p("EhqxAMJIAA4RMDVkAAAIAAYRg");
	this.shape_6.setTransform(647.8,652.6);

	this.instance_2 = new lib._2D白吃兔01微笑動畫();
	this.instance_2.setTransform(195.3,301.9,1.034,1.034,0,0,180);

	this.adatu = new lib._2D白吃兔ingame反應();
	this.adatu.setTransform(70.6,350.7,0.545,0.545,0,0,0,66,136.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("Ehj/A38MAAAhv3MDH+AAAMAAABv3g");
	this.shape_7.setTransform(640,360.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.adatu}]},3).to({state:[{t:this.shape_7}]},1).wait(11));

	// 圖層 4
	this.instance_3 = new lib.bar1();
	this.instance_3.setTransform(661.3,819.4,1,1,0,0,0,684.1,129.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:568.8},3).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,225.3,1368.2,505.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;