import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,
    private route:Router) {
    super();
  }
  roles:any=[];
  userArray:any=['Harshavardhan'];
  selectedRole:any=[];

  isClicked = false;
  item2Left = '0';

  ngOnInit(): void {}

  toggleItem2(): void {
    this.isClicked = !this.isClicked;
    this.item2Left = this.isClicked ? '-30%' : '0';
  }
  logout() {
    this.route.navigateByUrl('/login');
  }

  setUserType(option) {
    console.log(option);

    if (option == 'SuperAdmin') {
      console.log(option);
    } else {
      console.log(option);
    }
  }
}
