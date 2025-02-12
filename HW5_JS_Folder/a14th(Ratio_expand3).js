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
    mul(target){
        return target.a * this.a + "/" + target.b * this.b;
    }
    div(target){
        return target.a * this.b + "/" + target.b * this.a;
    }
    reduce(){
        var min;
        if(this.a > this.b) min = this.b;
        else min = this.a;

        for(var i = 2 ; i <= min ; i++){
            if(this.a % i == 0 && this.b % i == 0){
                this.a /= i;
                this.b /=i;
                min /=i;
                i=2;
            }
        }
    }
}

var r1 = new Ratio(6,9); 
r1.reduce();
console.log(r1.toString());