import { Component, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../../app/sharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() clientName: String = '';
  @Input() categoryList: ICategory[] = [];
  @Output() name: String = '';
  @Output() categories: ICategory[] = [];
  constructor() {}

  ngOnInit(): void {}
}
