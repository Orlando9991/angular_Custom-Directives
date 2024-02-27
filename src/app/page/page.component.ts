import { Component, Input } from '@angular/core';
import { PagClassDirective } from '../directive/page/pag-class.directive';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    PagClassDirective,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  @Input() title: string = '';
  @Input() url: string = '';;
}
