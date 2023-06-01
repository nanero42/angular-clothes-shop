import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showNavbar = true;
  pages = ['/'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.hideShowNavbar$().subscribe();
  }

  hideShowNavbar$() {
    return this.router.events.pipe(
      tap((route) => {
        if (route instanceof NavigationEnd) {
          this.pages.some((url) => url === route.url)
            ? this.showNavbar = false
            : this.showNavbar = true;
        }
      })
    );
  }
}
