var i=0, y=0, z=0, x=0;
var dog = new doggo();

function preload() {
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
  foreground = loadImage('foreground.png');
  clouds = loadImage('clouds.png');
  tree = loadImage('tree.png');
}


function setup() {
 createCanvas(1280, 720);
  background(200);


}

function draw() {
  background(133,210,255);
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


x+=2;
image(tree,-x+1280,480);
if(x>=1280) x=0;





y+=8+8*(100/640);
z++;
image(foreground,-y,690);
image(foreground,-y+1280,690);
image(clouds,-z,0);
image(clouds,-z+1280,0);
if(y>=1280) y=0;
if(z>=1280) z=0;


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
				if(this.i<30)
				image(img1,200,this.y);
				else
				image(img2,200,this.y);
			if(this.i>60) this.i=0;
				
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