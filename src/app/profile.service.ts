import { Injectable } from '@angular/core';
import { UserProfile } from './interface/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Dominick',
    contact: 'dominickv1998@gmail.com',
    bio: 'I drive toy cars',
  };
  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (userprofile: UserProfile): void => {
    this.userProfile = userprofile;
  };
}
