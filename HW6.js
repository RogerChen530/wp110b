class vector {
  
    constructor(array) {
      this.Ro = array
    }
  
    length() {
      let Ge = 0;
      for(let i = 0 ; i < this.Ro.length ; i++){
        Ge += this.Ro[i]*this.Ro[i]
      }
      return Math.sqrt(Ge)
    }
  
    neg() {
      for(let i = 0 ; i < this.Ro.length ; i++){
        this.Ro[i] = -this.Ro[i]
      }
      return new vector(this.Ro)
    }
  
    add(p2) {
      let Ge = [];
      for(let i = 0 ; i < this.Ro.length ; i++){
        Ge[i] = this.Ro[i] + p2.Ro[i]
      }
      return new vector(Ge)
    }
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    distance(p2) {
      return this.sub(p2).length()
    }
  
    dot(p2){
      let Ge = 0;
      for(let i = 0 ; i < this.Ro.length ; i++){
        Ge += this.Ro[i]*p2.Ro[i]
      }
      return Ge
    }

    toString() {
      return this.Ro.toString()
    }
  }
  let p = new vector([2,3])
  let p2 = new vector([1,2])
  console.log('p.length()=', p.toString())
  console.log('p.length()=', p.length())
  console.log('p.add()=',p.add(p2))
  console.log('p.sub()=',p.sub(p2))
  console.log('p.distance()=',p.distance(p2))
  console.log('p.dot()=',p.dot(p2))