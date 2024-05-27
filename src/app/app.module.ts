import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LeadService } from './services/lead.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        LeadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
