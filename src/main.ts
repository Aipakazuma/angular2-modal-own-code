import 'reflect-metadata/Reflect.js';
import 'zone.js';
import 'rxjs/Rx';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);