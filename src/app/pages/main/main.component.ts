import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isSidenavOpen = true;
  isSidenavFixed = false;
  static path = () => ['main'];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onToggeleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  logout() {
    this.router.navigate(['auth/login']);
  }
}
