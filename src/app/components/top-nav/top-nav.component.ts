import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() selected: string | undefined

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    let menu = <HTMLDivElement>document.getElementById("mobile-menu")
    menu.style.right = "-100vw"
  }

  showMenu() {
    let menu = <HTMLDivElement>document.getElementById("mobile-menu")
    menu.style.right = "0"
  }

  login() {
    this.router.navigateByUrl('/login')
  }

}
