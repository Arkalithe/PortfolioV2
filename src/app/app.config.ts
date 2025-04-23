import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import appRoutes from './app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(),
      importProvidersFrom( BrowserModule, FormsModule,TranslateModule.forRoot({
          defaultLanguage: 'fr',
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient],
          },
      })),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideZoneChangeDetection({ eventCoalescing: true }),]
};
