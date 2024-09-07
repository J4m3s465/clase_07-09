import { CanActivateFn, CanMatchFn } from '@angular/router';

export const privadoGuard: CanActivateFn = (route, state) => {
  
  let acceso = false

  if ( sessionStorage.getItem("login") == 'true' ){
    acceso = true
  }

  return acceso;
};

export const galeriaGuard: CanMatchFn = (route, state) => {
  
  let acceso = true

  if (sessionStorage.getItem('login') == 'true' ){
    acceso = false
  }
  return acceso;
};
