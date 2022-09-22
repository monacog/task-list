import { Component, OnInit } from '@angular/core';
import { UiService } from '../../servicie/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private uiService: UiService, 
    private router:Router
    ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  title: String = ' Task list';
  showAddTask: boolean = true;
  subscription!: Subscription;

  toggleAddTask = () => {
    this.uiService.toggleAddTask();
  };
  hasRoute(route:string){
    return this.router.url === route
  

  }
  ngOnInit(): void {}
}
