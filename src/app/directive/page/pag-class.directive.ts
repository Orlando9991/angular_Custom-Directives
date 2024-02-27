import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPagClass]',
  standalone: true
})
export class PagClassDirective {
  constructor(private element: ElementRef) {}

  @Input('appPagClass') set classNames (classObj : any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
