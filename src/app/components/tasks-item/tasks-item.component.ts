import { Component, OnInit,Input } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  constructor() { }

  @Input() task!:Task;

  ngOnInit(): void {
  }

}
