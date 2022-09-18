import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title : String = " Task list"
  
  count:number=0;
  toggleAddTask = ()=>{
    console.log("Impreso desde el componenete HEADER y NO desde el componenete BUTTON " + this.count++);

  }

  ngOnInit(): void {
  }

}
