import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { AffichestageComponent } from './affichestage/affichestage.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule,    ReactiveFormsModule,} from '@angular/forms';
import { DetaillestageComponent } from './detaillestage/detaillestage.component';
import { AjoutdemandeComponent } from './ajoutdemande/ajoutdemande.component';
import { AffichedemandeComponent } from './affichedemande/affichedemande.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AffichestageComponent,
    DetaillestageComponent,
    AjoutdemandeComponent,
    AffichedemandeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
