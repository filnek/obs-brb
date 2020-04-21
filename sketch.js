var i=0, y=0, z=0, x=0;
var dog = new doggo();
var dino = new diino();
function preload() {
	bg=loadImage('background.png');
	dino1=loadImage('dino1.png');
	dino2=loadImage('dino2.png');  
	img1 = loadImage('1.png');
	img2 = loadImage('2.png');
	img3 = loadImage('3.png');
	foreground = loadImage('foreground.png');
	clouds = loadImage('clouds.png');
	//  tree = loadImage('tree.png');
}


function setup() {
	createCanvas(1280, 720);
	background(200);
frameRate(50);

}

function draw() {
	//background(173,213,215);
	image(bg,0,0,1280,720);
	i+=4;	
	u=i*2;
	strokeWeight(8);	
	line(width - u,height+10,width - u,height-150);
	line(width - u,height-150,width -u -  (u*(100/640))  + 100,height-200);
	line(width - u,height,width -u -  (u*(100/640))  + 100,height-200);
	line(width - u,height-150,width -u -  (u*(100/640))  + 100,height);
	strokeWeight(10);
	line(width  -u - (u*(100/640)) + 100,height+10,width -u -  (u*(100/640))  + 100,height-200);

	if(i>=1280) i=0;

	if(i==200) dog.jump();
	if(i==580) dog.land();

	dog.draw();


	//x+=2;
	//image(tree,-x+1280,480);
	//if(x>=1280) x=0;
	if(frameCount%120==0){
		if(Math.random() > 0.99 && dino.running==false) dino.running=true;
	}
	if (dino.running)dino.draw();


	y+=8+8*(100/640);
	z++;
	image(foreground,-y,690);
	image(foreground,-y+1280,690);
	image(clouds,-z,0);
	image(clouds,-z+1280,0);
	if(y>=1280) y=0;
	if(z>=1280) z=0;


}

function diino(){
	this.frame=0;
	this.x=-40;
	this.y=580;
	this.xspeed=10;
	this.running=false;
	
	this.draw=function(){	
		if(this.frame<15)
			image(dino1,this.x,this.y);
		else
			image(dino2,this.x,this.y);
		this.frame++;
		if(this.frame>30) this.frame=0;
		
		this.x+=this.xspeed;
		if(this.x>=1280){
			dino.running=false;
			this.x=-100;
		}
	}
}

function doggo(){
	this.i=0;
	this.height=510;
	this.isJumping=false;
	this.yspeed=0;
	this.y=this.height;
	this.draw = function(){
		if(!this.isJumping){
				this.i++;
				if(this.i<15)
				image(img1,200,this.y);
				else
				image(img2,200,this.y);
			if(this.i>30) this.i=0;
				
			}else{
				this.yspeed+=0.2;
				if(i>420) this.yspeed+=0.1;
				this.y+=this.yspeed;
				image(img3,200,this.y);
			}
		}
	
	this.jump=function(){
		this.yspeed=-10;
		this.isJumping=true;
	}
	this.land=function(){
		this.i=0;
		this.y=this.height;
		this.isJumping=false;
	}
	
}
