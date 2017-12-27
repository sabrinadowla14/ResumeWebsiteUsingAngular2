import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MsgComponent } from './msg.component';
import { ProjectItemComponent }  from './project-item.component';
import { ProjectDetailsComponent } from './project-details.component';

import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
  AppComponent, ProjectItemComponent, ProjectDetailsComponent, SearchPipe, MsgComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }