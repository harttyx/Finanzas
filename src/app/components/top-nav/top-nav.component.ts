import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() selected: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    let menu = <HTMLDivElement>document.getElementById("mobile-menu")
    menu.style.left = "-100vw"
  }

  showMenu() {
    let menu = <HTMLDivElement>document.getElementById("mobile-menu")
    menu.style.left = "0"
  }

}
