export default class Voice {


    constructor(ctx, freq, out){
        //things that need to happen on intialization
        this.context = ctx;
        this.frequency = freq;
        this.output = out;
    }
    start(){
        //things that happen when we start a note
        let now = this.context.currentTime;

        this.osc = this.context.createOscillator();
        this.osc.frequency.setValueAtTime(this.frequency, now);
        this.osc.connect(this.output);
        this.osc.start();
    }
     stop(){
            //things that happen to stop a note
    }

    dispose(){
        //what should happen when you are done with the audio stuff
    }
}