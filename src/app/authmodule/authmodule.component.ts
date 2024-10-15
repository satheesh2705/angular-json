import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authmodule',
  templateUrl: './authmodule.component.html',
  styleUrl: './authmodule.component.scss'
})
export class AuthmoduleComponent{

  selectedValue:string|null = null;
  constructor( private route:Router ,private fb:FormBuilder){
  }

  selections = [
    {
      id:1,
      name:'login',
    },
    {
      id:2,
      name:'signup'
    },
    
  ]
  
  valueChange(){
    console.log(this.selectedValue)
    this.route.navigate([`index/auth/${this.selectedValue}`])

  }

 
}
