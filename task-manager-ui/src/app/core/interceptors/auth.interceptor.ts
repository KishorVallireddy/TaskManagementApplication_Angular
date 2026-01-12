import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn
} from '@angular/common/http';

/**
 * Functional HTTP interceptor (Angular 16+)
 * Adds JWT token to Authorization header
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const token = localStorage.getItem('token');

 if (token && !req.url.includes('/login') && !req.url.includes('/register')) {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}

  return next(req);
};
