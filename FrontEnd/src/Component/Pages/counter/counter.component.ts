// Librarys
import { Component, signal } from "@angular/core";

// Decor
@Component({
    templateUrl: './counter.component.html'
})

// Class 
export class CounterComponent {
    name = 'Dicrey'
    counter = 0
    counterSignal = signal(10)

    increment(v: number) {
        this.counter += v
        this.counterSignal.update(current => current + v)
    }

    resetCounter () {
        this.counter = 0
        this.counterSignal.set(0)
    }
}