import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
    constructor(private router: Router) {}

  currentYear = new Date().getFullYear();
 scrollTo(section: string) {
    // First navigate to home to ensure we're on the right page
    this.router.navigate(['/']).then(() => {
      // Then scroll to the section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
