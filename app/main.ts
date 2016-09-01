import { bootstrap, platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
//import { APP_ROUTER_PROVIDERS } from './app.routing';


platformBrowserDynamic().bootstrapModule( AppModule );

/*bootstrap( AppComponent, [
    APP_ROUTER_PROVIDERS
])
.catch( err => console.error( err ));*/

