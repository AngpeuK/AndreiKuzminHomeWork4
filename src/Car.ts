class Car {
    brand : string
    speed : number

    constructor(brand: string, speed: number) {
        this.brand = brand
        this.speed = speed
    }

    accelerate (): void {
        this.speed = this.speed + 20
    }
    newSpeed (){
        return this.speed
    }
}

const car = new Car('Toyota', 100)
car.accelerate () // After fixing: will print 120
console.log(car.newSpeed())
