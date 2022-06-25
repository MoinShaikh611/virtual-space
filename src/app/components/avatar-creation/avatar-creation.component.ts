import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// install Swiper modules
@Component({
  selector: 'app-avatar-creation',
  templateUrl: './avatar-creation.component.html',
  styleUrls: ['./avatar-creation.component.css'],
})
export class AvatarCreationComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}
  isMobile = false;

  ngOnInit() {
    this.isScrollAnimation();
    //get all the elements with calss list-group-item
    let avatarListStylesItems = document.querySelectorAll('.avatar-list-item');
    avatarListStylesItems.forEach(function (item) {
      // iterate and add event lstener to each of them
      item.addEventListener('click', function (elem: any) {
        // check if any element have a class active
        // if so then remove the class from it
        let getElemWithClass = document.querySelector(
          '.avatar-list-item.active'
        );
        if (getElemWithClass !== null) {
          getElemWithClass.classList.remove('active');
        }
        //add the active class to the element from which click event triggered
        item.classList.add('active');
      });
    });

    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  ngAfterViewInit() {}

  isScrollAnimation() {
    ScrollTrigger.create({
      trigger: '.avatar-creation-costume-wrapper',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
  }

  avatarCostumes = [
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-1.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-2.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-3.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-4.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-5.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-6.png',
    },
    {
      avatarImg: '../../../assets/images/avatar-creation/shirts/shirt-7.png',
    },
  ];
}
