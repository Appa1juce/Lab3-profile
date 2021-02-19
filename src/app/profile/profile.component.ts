import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interface/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: UserProfile;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfileByService();
  }

  getProfileByService = (): void => {
    this.profile = this.profileService.getUserProfile();
    console.log(this.profile);
  };
}
