import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbarrestrito',
  templateUrl: './navbarrestrito.component.html',
  styleUrls: ['./navbarrestrito.component.css']
})
export class NavbarrestritoComponent {
  faBars = faBars;
}
