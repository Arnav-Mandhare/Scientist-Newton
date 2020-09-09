class Bob{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x = x;
		this.y = y;
		this.radius = r;
		this.body=Bodies.circle(this.x, this.y,this.radius/2, options);
		this.radius = r;
		World.add(world, this.body);
        
	}
  display(){
	    var pos=this.body.position;	
		push();	
		translate(pos.x,pos.y);		
		ellipseMode(CENTER);
		fill("pink");	
		ellipse(0,0,this.radius,this.radius);
		pop();
 }
    }