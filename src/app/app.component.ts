import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagClassDirective } from './directive/page/pag-class.directive';
import { PageComponent } from './page/page.component';
import { TimesDirective } from './directive/times/times.directive';
import { ImagePage } from './ImagePage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    PagClassDirective,
    TimesDirective,
    PageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;
  pageSize = 3;
  currentPageSize = this.pageSize;

  images : ImagePage[] = [
    new ImagePage(
      'At the Beach',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    ),
    new ImagePage(
      'Desert',
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'Snow tree',
      'https://images.unsplash.com/photo-1707141709645-3b15148daca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'City walk',
      'https://images.unsplash.com/photo-1708921047448-389333bac8f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'Food time',
      'https://images.unsplash.com/photo-1708771862265-f54741c65a89?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'Desert',
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'Snow tree',
      'https://images.unsplash.com/photo-1707141709645-3b15148daca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'City walk',
      'https://images.unsplash.com/photo-1708921047448-389333bac8f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ),
    new ImagePage(
      'Food time',
      'https://images.unsplash.com/photo-1708771862265-f54741c65a89?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    )
  ]


  getClass(index: number): string[]{
    const classes: string[] = [];

    if(index === this.currentPage){
      classes.push("active");
    }
    return classes;
  }

  setCurrentPage(index: number){
    this.currentPage = index;
    if(index%this.pageSize==0){
      this.currentPageSize = index === this.currentPageSize ?
      this.currentPageSize + this.pageSize : this.currentPageSize;
    }
    if(index===(this.currentPageSize - this.pageSize)-1){
      this.currentPageSize -= this.pageSize
    }
  }

  getInLimitPageSize(index: number){
    return index>this.currentPageSize-(this.pageSize+1) && index<this.currentPageSize
  }


  getNextPageClass():string[]{
    const nextPageClass: string[] = [];

    if(this.currentPage === this.images.length-1){
        nextPageClass.push("disabled");
    }
    return nextPageClass;
  }

  getPreviousPageClass(){
    const prevousPageClass: string[] = [];

    if(this.currentPage === 0){
      prevousPageClass.push("disabled");
    }
    return prevousPageClass;
  }
}
