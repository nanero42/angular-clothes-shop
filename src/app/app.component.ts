import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showMenu = true;
  showNavbar = false;

  showMenuOnPages = ['/'];
  showNavbarOnPages = ['/'];

  appStyle: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.watchURLChanges$().subscribe();
  }

  watchURLChanges$() {
    return this.router.events.pipe(
      tap((route) => {
        if (route instanceof NavigationEnd) {
          const { url } = route;

          this.showHideMenu(url);
          this.showHideNavbar(url);
        }
      })
    );
  }

  showHideMenu(url: string): void {
    this.showMenuOnPages.some((path) => path === url)
      ? this.showMenu = false
      : this.showMenu = true;
  }

  showHideNavbar(url: string): void {
    if (this.showMenuOnPages.some((path) => path === url)) {
      this.showNavbar = true;
      this.appStyle['padding-bottom'] = '70px';
    } else {
      this.showNavbar = false;
      this.appStyle['padding-bottom'] = '';
    }
  }
}
