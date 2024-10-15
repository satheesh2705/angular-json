import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  @ViewChild('formDirective') private formDirective!: NgForm;

  activeBtn : boolean = true;
  userForm : FormGroup;
  id !: number;

  constructor(private fb: FormBuilder, private userService:UserService) {
    this.userForm = this.fb.group({
      id :1,
      userName: ['',[Validators.required,Validators.minLength(5)]],
      userEmail:['',[Validators.required,Validators.email]],
      userPass:['',[Validators.required,Validators.minLength(5)]],
      userType:['',[Validators.required]]
    });
  }

  onSubmit(){
    const tId = Math.floor(Math.random()*999)
    this.userForm.patchValue({id:tId});
    this.userService.addUser(this.userForm.value).subscribe(
      resp => console.log("Response ", resp),
      error => console.error("Error occurred:", error)
  );
    console.log("User Data  ",this.userService.getAllData());
    this.formDirective.resetForm();
    
  }

  toggleButton(){
    this.activeBtn = !this.activeBtn;

  }

 public  userData = {
    id:0  ,
    userName: '',
    userEmail:'',
    userPass: '',
    userType:''
  };


  onSubmitNgForm(form: NgForm){

    if (form.valid) {
     
      const id = Math.floor(Math.random()*999)
      this. userData = {...this.userData, id}
      this.userService.addUser(this.userData).subscribe(
        resp => console.log("Response ", resp),
        error => console.error("Error occurred:", error)
    );
      console.log('User Data:',this.userService.getUserData());
      form.resetForm();
    } else {
      console.error('Form is invalid');
    }

  }

}
