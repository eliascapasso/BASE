import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { TopBarModule } from '../top-bar/top-bar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
        TopBarModule,
        FooterModule,
        ContactRoutingModule
    ],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule { }
