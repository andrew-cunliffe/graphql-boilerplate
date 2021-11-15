import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
    declarations: [PublicComponent, LandingComponent],
    imports: [PublicRoutingModule, SharedModule],
})
export class PublicModule {}
