import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'v-verse';
  currentUrl = '/landing';

  constructor(private router: Router) {}
  ngOnInit() {}
  navigate(route: string) {
    this.router.navigate([route]);
  }

  layout() {
    this.router.events.forEach((event: any) => {
      if (event['url'] != undefined) {
        this.currentUrl = event['url'];
      }
    });
  }
}
