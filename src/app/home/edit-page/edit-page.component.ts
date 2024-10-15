import { Component,  Inject } from '@angular/core';
import { UserService } from '../../authmodule/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent{

  record: any;
  userDataForm !: FormGroup;
  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditPageComponent>,
    private fb:FormBuilder
  ) {
    this.record = data.record; 
    this.userDataForm = fb.group({
      userName:[''],
      userEmail:[''],
      userPass:[''],
      userType:['']
    })
  }




  public userData = {
    userName:'',
    userEmail: '',
    userPass: '',
    userType:''
  }; 
  ngOnInit() {
    this.userData = { ...this.record };
    this.userDataForm.patchValue(this.record);

    }

  handleEditDataUsingNgForm() {
    // const index = this.userService.getUserData().findIndex(user => user.id === this.record.id);
    const index = 1;
    // if (index !== -1) {
    //     const updatedUser = {
    //         ...this.userService.getUserData()[index],
    //         userName: this.userData.userName,
    //         userEmail: this.userData.userEmail, 
    //         userPass: this.userData.userPass,
    //         userType: this.userData.userType
        
    //     };
    //     this.userService.updateUserData(updatedUser)
    //     console.log("Updated Data", this.userService.getUserData());
    //     this.closeForm()
    // } 
    
}


  handleEditDataUsingRF(){
    // const index = this.userService.getUserData().findIndex(user => user.id === this.record.id);
    // if(index !== -1){

    //   const updatedUser = {
    //     ...this.userService.getUserData()[index],
    //     userName:this.userDataForm.value.userName,
    //     userEmail:this.userDataForm.value.userEmail,
    //     userPass: this.userDataForm.value.userPass,
    //     userType: this.userDataForm.value.userType,
    // };

    // this.userService.updateUserData(updatedUser)
    // console.log("Updated Data", this.userService.getUserData());
    // this.closeForm()
    
      
    // }
  }


  closeForm() {
    this.dialogRef.close({data:'Method Close...'});
  }

  formVisible : boolean = false;
  indexForm : boolean = false;

  changeForm(){
    this.indexForm = !this.indexForm
  }

  openForm(){
    this.formVisible = true
  }



}
