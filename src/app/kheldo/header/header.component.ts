import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  viewportScroller: any;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToElement(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
