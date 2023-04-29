import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, createUrlTreeFromSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service.service';
import { StorageService } from '../storage.service';

export const ClientGuard = (next: ActivatedRouteSnapshot) => {
  const service = inject(StorageService);
  if(service.isLoggedIn()){
  return   (service.getUser().user.role == "CLIENT")  ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
}else{
  return createUrlTreeFromSnapshot(next, ['/', 'login']);
}
};
export const Salle7Guard = (next: ActivatedRouteSnapshot) => {
  const service = inject(StorageService);
  if(service.isLoggedIn()){
  return   (service.getUser().user.role == "SALLE7")  ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
}else{
  return createUrlTreeFromSnapshot(next, ['/', 'login']);
}
};
export const AdminGuard = (next: ActivatedRouteSnapshot) => {
  const service = inject(StorageService);
  if(service.isLoggedIn()){
  return   (service.getUser().user.role == "ADMIN")  ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
}else{
  return createUrlTreeFromSnapshot(next, ['/', 'login']);
}
};