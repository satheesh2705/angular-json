import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './authmodule/user.service';
import { log } from 'console';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  emittedValues: any;
  constructor(
    private matIcon : MatIconRegistry,
    private domSant : DomSanitizer,
    private userService:UserService
  ){
    this.matIcon.addSvgIcon(
      'custom',
      this.domSant.bypassSecurityTrustResourceUrl('assets/edit.svg')
    )
    this.matIcon.addSvgIcon(
      "face",
      this.domSant.bypassSecurityTrustResourceUrl("assets/svgOne.svg")
    );
  }

  getAllData() {
    console.log("hello..");
    this.userService.getAllData().subscribe((data: any) => {
          
      console.log("Filtered Data with ID 101:", data);
    });
  }

  getDataById(){
    this.userService.getUserById(1).subscribe(data =>
      console.log("Data ",data)          
    )
  }

  // getDataById(){
  //   this.userService.getPostById(1).subscribe({
  //     next:(value)=>{
        
  //     },
  //     error:(err)=>{
        
  //     },
  //     complete:()=>{
        
  //     }
  //   })
  // }
  addPost() {
    const data = {
        userId: 3,
        userName: 'Alone',
        userEmail: 'alone3@gmail.com',
        userType:'User',
        userPass:'Alone123'
    };
    
    this.userService.addUser(data).subscribe(
        resp => console.log("Response ", resp),
        error => console.error("Error occurred:", error)
    );
}

deleteUser(userId: number) {
  if (confirm('Are you sure you want to delete this user?')) { 
    this.userService.deletePost(userId).subscribe(() => {
      console.log(`User with ID ${userId} deleted`); 
      this.getAllData(); 
    }, (error) => {
      console.error('Error deleting user:', error); // Handle error case
    });
  }
}

}