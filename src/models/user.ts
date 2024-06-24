import {role} from "./role"; 

import { Person } from '../models/person.enum'; // Assurez-vous du chemin correct pour l'énumération

export class User {
  userName: string;
  userEmail: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  userProfilePicture: string;
  userCoverPicture: string;
  userIdCountry: string;
  userType: number;
  userStars: number;
  userCreatedAt: Date;
  userIsApproved: boolean;
  role: role;
  Person: Person; // Utilisation de typePerson au lieu de TypePerson


}
