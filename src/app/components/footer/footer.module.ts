import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterRoutingModule } from './footer-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        FooterRoutingModule
    ],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }
