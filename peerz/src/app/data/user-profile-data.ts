import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UserProfile } from '../user/user-profile/user-profile';

export class UserProfileData implements InMemoryDbService {
  createDb() {
    const userProfile: UserProfile = 
      {
        id: 10,
        firstName: 'Guest',
        lastName: 'User',
      };
    return { userProfile };
  }
}