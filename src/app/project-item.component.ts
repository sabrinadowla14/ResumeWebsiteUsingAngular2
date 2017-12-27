import { Component } from '@angular/core';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: [ './css/project-item.css'],
  inputs: ['project']
})
export class ProjectItemComponent  { }