import { CanActivateFn } from '@angular/router';

export const applicantGuard: CanActivateFn = (route, state) => {
  return true;
};
