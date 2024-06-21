import { Component, OnInit, HostListener, } from '@angular/core';
@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  ngOnInit() {
  }
  // dropdownOpen = false;

  //   toggleDropdown(dropdownMenu: HTMLElement) {
  //     event.preventDefault();
  //       this.dropdownOpen = !this.dropdownOpen;
  //       if (this.dropdownOpen) {
  //           dropdownMenu.classList.add('show');
  //       } else {
  //           dropdownMenu.classList.remove('show');
  //       }
  //   }
    
  //   constructor() { }

  //   @HostListener('document:click', ['$event.target'])
  // onClick(targetElement: HTMLElement) {
  //   event.preventDefault();

  //   const dropdownToggle = document.querySelector('.dropdown-toggle');
  //   const dropdownMenu = document.querySelector('.dropdown-menu');

  //   if (dropdownToggle.contains(targetElement)) {
  //     dropdownMenu.classList.toggle('show');
  //   } else {
  //     dropdownMenu.classList.remove('show');
  //   }
  // }
}
