import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = {
    id: '',
    userName: '',
    password: '',
    email: '',
    name: ''
  }


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.userService.getUserById(userId).subscribe(data => {
        this.user = data;

      });
    });
  }

  onSaveEdit(form: NgForm): void {
    if (form.valid) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        this.router.navigate(['/admin/list-user']);
      });
    } else {
      console.log('Form is invalid');
    }
    console.log('Save button clicked');
  }

}
