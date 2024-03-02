import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  ngOnInit(): void {
      AOS.init();
  }

  constructor(private router: Router) { }

  navigateToCourses() {
    this.router.navigate(['/hero-courses']);
  }
}
