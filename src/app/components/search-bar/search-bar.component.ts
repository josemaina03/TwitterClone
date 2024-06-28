import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchDropdownComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      userId: ['']
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      if (this.users.length > 0) {
        this.userForm.controls['userId'].setValue(this.users[0].id);
        this.userService.setCurrentUser(this.users[0].id);
      }
    });

    this.userForm.controls['userId'].valueChanges.subscribe(userId => {
      this.userService.setCurrentUser(userId);
    });
  }
}
