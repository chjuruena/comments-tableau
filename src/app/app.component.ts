import { Component, OnInit, Type } from "@angular/core";
import {Observable, Observer} from 'rxjs';
import { MatTabChangeEvent } from "@angular/material/tabs";

import { TableComponent } from "./dashboard/table/table.component";

  import { CommentsComponent } from "./comments/components/comments/comments.component";
import { CommentsDashComponent } from "./comments/components/comments-dash/comments-dash.component";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface ExampleTab {
  label: string;
  content: any;
    cssClass: string;
}

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: "Table", content: TableComponent, cssClass:"tableComponent" },
          { label: "Comments", content: CommentsDashComponent, cssClass: "commentsComponent" }
        ]);
      }, 1000);
    });
  }
  
  
  tabChanged(event: MatTabChangeEvent) {
    console.log("Tab changed:", event);
  }
 
  ngOnInit() { }

}
