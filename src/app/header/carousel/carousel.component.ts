import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  imgSrc = [
    'assets/images/image-one.jpg',
    'assets/images/image-one.jpg',
    'assets/images/image-one.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
