import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  const token: string | null = localStorage.getItem("admin");
  const router = inject(Router);

  if(!token) {
    router.navigateByUrl('/main')
    return false
  }


  return true;
};
