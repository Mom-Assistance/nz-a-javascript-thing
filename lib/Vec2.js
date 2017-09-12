const RTD=180/Math.PI;

function Vec2(x, y){
    this.x = (typeof x=="number")?x:0,
    this.y = (typeof y=="number")?y:0;
}

Vec2.prototype.set = function(x, y){
  this.x = x;
  this.y = y;
};

Vec2.prototype.add = function(other){
  this.x += other.x;
  this.y += other.y;
};

Vec2.prototype.sub = function(other){
  this.x -= other.x;
  this.y -= other.y;
};

Vec2.prototype.mult = function(scalar){
    if(typeof scalar == "number"){
        this.x *= scalar;
        this.y *= scalar;
    }else{
        this.x *= scalar.x;
        this.y *= scalar.y;
    }
};

Vec2.prototype.div = function(scalar){
    if(typeof scalar == "number"){
        this.x /= scalar;
        this.y /= scalar;
    }else{
        this.x /= scalar.x;
        this.y /= scalar.y;
    }
};

Vec2.prototype.fromAngle = function(angle, dist){
  angle = radians(angle);
  this.x = Math.cos(angle) * dist;
  this.y = Math.sin(angle) * dist;
};

Vec2.prototype.copy = function(){
    return new Vec2(this.x, this.y);
};
