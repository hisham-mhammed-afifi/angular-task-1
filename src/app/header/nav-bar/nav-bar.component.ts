import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../app/sharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() clientName: String = '';
  @Input() categories: ICategory[] = [];
  constructor() {}

  ngOnInit(): void {}
}
