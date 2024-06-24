import { Injectable } from '@angular/core';
import { role } from 'src/models/role'; // Assurez-vous que le chemin est correct
import { User } from 'src/models/user'; // Assurez-vous que le chemin est correct
import { Person } from 'src/models/person.enum'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class userAuthService {

  role: role;

  constructor(){}

  public isExpert(): boolean {
    this.role = this.getRole();
    return this.role.roleName == "Expert";
  }

  public isOrganisateure(): boolean {
    this.role = this.getRole();
    return this.role.roleName == "Organisateure";
  } 

  public isEntrepreneure(): boolean {
    this.role = this.getRole();
    return this.role.roleName == "Entrepreneure";
  }

  public setUserInfo(user: User): void {
    if (user) {
      if (user.userFirstName) localStorage.setItem('userFirstName', user.userFirstName);
      if (user.userLastName) localStorage.setItem('userLastName', user.userLastName);
      if (user.userName) localStorage.setItem('userName', user.userName);
      if (user.userEmail) localStorage.setItem('userEmail', user.userEmail);
      if (user.userProfilePicture) localStorage.setItem('userProfilPicture', user.userProfilePicture);
      if (user.userCoverPicture) localStorage.setItem('userCoverPicture', user.userCoverPicture);
      if (user.userIdCountry) localStorage.setItem('userIdCountry', user.userIdCountry);

      if (user.userType) localStorage.setItem('userType', JSON.stringify(user.userType));
      if (user.userStars) localStorage.setItem('userStars', JSON.stringify(user.userStars));
      if (user.userCreatedAt) localStorage.setItem('userCreatedAt', user.userCreatedAt.toISOString());
      if (user.userIsApproved !== undefined && user.userIsApproved !== null) {
        localStorage.setItem('userIsApproved', JSON.stringify(user.userIsApproved));
      }

      this.setRole(user.role);
      this.setPerson(user.Person);
    }
  }

  public setUserNames(firstName: string, lastName: string): void {
    if (firstName) localStorage.setItem('userFirstName', firstName);
    if (lastName) localStorage.setItem('userLastName', lastName);
  }

  public setUserName(userName: string): void {
    if (userName) localStorage.setItem('userName', userName);
  }

  public setUserEmail(userEmail: string): void {
    if (userEmail) localStorage.setItem('userEmail', userEmail);
  }

  public setPerson(person: Person): void {
    if (person) localStorage.setItem('Person', person);
  }

  public getPerson(): Person {
    return localStorage.getItem('Person') as Person;
  }

  public getFirstName(): string {
    return localStorage.getItem('userFirstName');
  }

  public getLastName(): string {
    return localStorage.getItem('userLastName');
  }

  public getUserName(): string {
    return localStorage.getItem('userName');
  }

  public getUserEmail(): string {
    return localStorage.getItem('userEmail');
  }

  public setRole(role: role): void {
    if (role) localStorage.setItem('role', JSON.stringify(role));
  }

  public getRole(): role {
    const roleString = localStorage.getItem('role');
    return roleString ? JSON.parse(roleString) as role : null;
  }

  public setToken(jwtToken: string): void {
    if (jwtToken) localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  public clear(): void {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return !!this.getRole() && !!this.getToken();
  }
}
