import { AfterViewInit, Component, OnInit, ViewChild, inject, model, signal } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../authmodule/user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPageComponent } from '../edit-page/edit-page.component';

export interface UserList {
  id: string;
  userName: string;
  userEmail: string;
  userType: string;
  userPass: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {

  constructor(private userService:UserService){
  }


  readonly dialog = inject(MatDialog)
  isEdit : boolean = false;
  isAdmin: boolean = false;
  DUP_DATA = [];


  displayedColumns: string[] = ['userName', 'userEmail', 'userType', 'userPass', 'action'];
  dataSource = new MatTableDataSource(this.DUP_DATA);
  pageSizeOptions = [2, 10, 25]; 
  selectedPageSize = 5;
  
  
  ngAfterViewInit() {
    this.DUP_DATA = JSON.parse(JSON.stringify(this.userService.getUserData()));
    this.dataSource.data = this.DUP_DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTable(){
    this.DUP_DATA = JSON.parse(JSON.stringify(this.userService.getUserData()));
      this.dataSource.data = this.DUP_DATA;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  editData : any = [];

  openDialog(record:any){
    const dialogRef = this.dialog.open(EditPageComponent,{data:{record}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
      this.reloadTable()
    });
  }

    deleteUser(userId: number){

    this.userService.deleteUserData(userId)
    this.reloadTable()
    }

}
