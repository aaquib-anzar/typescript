//An abstract class is a class that cannot be instantiated directly
//const hc = new TakePhoto("test", "Test") this is not allowed
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime():number {
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter) 
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
const hc = new Instagram("test", "Test", 3)
hc.getReelTime()