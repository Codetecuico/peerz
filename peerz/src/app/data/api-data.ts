import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IUserProfile } from '../shared/interfaces';
import { IStudent } from '../shared/interfaces';

export class ApiData implements InMemoryDbService {
  createDb() {
    const userProfile: IUserProfile = 
      {
        id: 10,
        firstName: 'Guest',
        lastName: 'User',
      };

      const students: IStudent[] = [
        {
          id: 1,
          firstName: 'Jose',
          lastName: 'Rizal',
        },
        {
          id: 2,
          firstName: 'Apolinario',
          lastName: 'Mabini',
        },
        {
          id: 3,
          firstName: 'Gregorio',
          lastName: 'del Pilar',
        },
        {
          id: 4,
          firstName: 'Andres',
          lastName: 'Bonifacio',
        },
        {
          id: 5,
          firstName: 'Diego',
          lastName: 'Silang',
        }];
        
    return { userProfile, students };
  }
}