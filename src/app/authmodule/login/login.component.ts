import { Component } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginForm!: FormGroup;
  isLoggedIn : boolean = false ;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });

  }

  rough(){
    this.userService.storeAllData()
  }



  checkUserThroughReactive() {
    
   
    
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(email);
      const allUserData = this.userService.getUserData();
      console.log("user : ",allUserData);       
      const matchedUser = allUserData.find((user) => user.userEmail === email);
      console.log(matchedUser);
      
      if (matchedUser && matchedUser.userPass === password) {
        this.isLoggedIn = true;
        sessionStorage.setItem('User_Type',JSON.stringify(matchedUser.userType))  
        this.router.navigate(['home/dash-board/details'])

      } else {
        alert('User data does not match.');
        this.isLoggedIn = false;
      }

      this.loginForm.reset( )
    }
  }

  public userData = {
    email: '',
    password: '',
  };

  checkUserThroughNgForm() {

    const currentUserData = this.userData; 
    const allUserData = this.userService.getUserData(); 
    console.log(allUserData,"all");
    
    const matchedUser = allUserData.find((user) => user.userEmail === currentUserData.email);
    console.log(matchedUser);
    
    if (matchedUser && matchedUser.userPass === this.userData.password) {
      this.isLoggedIn = true;
      sessionStorage.setItem('User_Type',JSON.stringify(matchedUser.userType))  
      this.router.navigate(['home/dash-board/details'])
    } else {
      alert('User data does not match.');
    }
  }

  activeBtn: boolean = true;

  toggleButton() {
    this.activeBtn = !this.activeBtn;
  }
}
