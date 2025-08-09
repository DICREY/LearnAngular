// Librarys
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Decors 
@Component({
  selector: 'nav-bar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

// class 
export class NavbarComponent {

}
