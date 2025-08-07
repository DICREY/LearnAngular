// Librarys 

import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    imports: [UpperCasePipe],
    templateUrl: './hero.component.html'
})

export class HeroComponent {
    name = signal('IronMan')
    age = signal(45)

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`
    }

    changeHero () {
        this.name.set('Spiderman')
        this.age.set(22)
    }

    resetForm() {
        this.name.set('IronMan')
        this.age.set(45)
    }

    changeAge () {
        this.age.set(60)
    }

    
    capitalize(value: string) :string {
        const capValue = computed(() => value.toUpperCase())
        return capValue()
    }

    // capitalize = computed((value) => {
    //     const capValue = value.toUpperCase()
    //     return capValue
    // })
}