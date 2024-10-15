import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  userId: number;
  userName: string;
  userEmail: string;
  userType: string;
  userPass: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }

  private userData: User[] = []; 

  ngOnInit() {
    this.storeAllData(); // Fetch initial data on service initialization
  }

  // Add user data
  setUserData(data: User) {
    this.userData.push(data);
  }

  // Get all user data
  getUserData(): User[] {
    return this.userData;
  }

  // Fetch and store all user data from the server
  storeAllData() {
    this.getAllData().subscribe(data => {
      this.userData = data; // Update userData with fresh data from the server
      console.log(this.getUserData(), "Updated User Data");
    });
  }

  // Update user data
  updateUserData(updatedUser: User) {
    const index = this.userData.findIndex(user => user.userId === updatedUser.userId);
    if (index !== -1) {
      this.userData[index] = updatedUser; // Update local data
      this.updatePost(updatedUser.userId, updatedUser).subscribe(() => {
        this.storeAllData(); // Fetch updated data from the server
      });
    }
  }

  // Delete user data
  deleteUserData(userId: number) {
    this.deletePost(userId).subscribe(() => {
      this.userData = this.userData.filter(user => user.userId !== userId); // Remove from local data
      this.storeAllData(); // Fetch updated data from the server
    });
  }

  apiUrl = "http://localhost:3500";
  
  // API call to get all users
  getAllData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // API call to get user by ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  // API call to add a user
  addUser(post: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, post);
  }

  // API call to update a user
  updatePost(id: number, post: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, post);
  }

  // API call to delete a user
  deletePost(id: number): Observable<any> {
    
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
