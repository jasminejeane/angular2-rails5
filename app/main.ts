import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic allows us to run the application in the browser
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

