import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppShellModule } from './app/app-shell.module';

registerLocaleData(localePt, 'pt-BR');

platformBrowserDynamic().bootstrapModule(AppShellModule)
  .catch(err => console.error(err));