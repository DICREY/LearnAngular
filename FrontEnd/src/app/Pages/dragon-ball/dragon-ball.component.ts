// Librarys 
import { Component, signal } from '@angular/core';

interface Character {
  id: number
  name: string
  power: number
}

// Decor 
@Component({
  imports: [

  ],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css'
})

// Class 
export class DragonBallComponent {
  name = signal('Dicrey')
  power = signal(0)
  characters = signal <Character[]> ([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Gohan', power: 10001 },
    { id: 4, name: 'Yamcha', power: 500 },
  ])
  
  changeName (value = '') {
    this.name.set(value)
  }
  
  changePower (value = 0) { 
    this.power.set(value)
  }

  addCharacter () {
    const ver = this.characters().some(val => val.name === this.name())
    if (ver || this.power() <= 0) return
    this.characters.update(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name: this.name(),
        power: this.power(),
      }
    ])
  }
}