import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/servicie/ui.service';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  id:number=0;
  text:string="";
  day:string="";
  reminder:boolean=false;
  showAddTask:boolean=false;
  subscription!: Subscription;

  constructor( private uiService: UiService) { 
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
  }

  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){
      alert("Pleace add task!");
      return
    }
    const {id, text, day, reminder} = this
    const newTask={id,text, day, reminder}
    this.onAddTask.emit(newTask);
  }

}

