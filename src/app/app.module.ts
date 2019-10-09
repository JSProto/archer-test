import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from '@core/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '@core/material.module'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { StoryModule } from './story/story.module'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    NgZorroAntdModule,
    StoryModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
