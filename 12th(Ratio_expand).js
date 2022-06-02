class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
    add(target)
    {
        return this.a * target.b + target.a * this.b +"/"+ this.b * target.b;
    }
    sub(target){
        return this.a * target.b - target.a * this.b +"/"+ this.b * target.b;
    }
}

var r1 = new Ratio(1,3),r2 = new Ratio(2,4); 
var r3 = r1.add(r2); 
console.log(r3.toString());