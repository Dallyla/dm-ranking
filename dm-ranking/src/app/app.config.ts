import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),

    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                  prefix: 'p',
                  darkModeSelector: 'system',
                  cssLayer: false
              }
            },
            ripple: true,
            zIndex: {
              modal: 1100,    // dialog, sidebar
              overlay: 1000,  // dropdown, overlaypanel
              menu: 1000,     // overlay menus
              tooltip: 1100   // tooltip
          }
      }),
  ]
};
