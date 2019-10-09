import { NgModule } from '@angular/core'
import { NzTableModule } from 'ng-zorro-antd'
import { SharedModule } from '@core/shared.module'
import { MaterialModule } from '@core/material.module'
import { StoryComponent } from './story.component'
import { StoryService } from './story.service'
import { ModalDialogComponent } from './modal/modal.component'


@NgModule({
  declarations: [
    StoryComponent,
    ModalDialogComponent
  ],
  entryComponents: [
    ModalDialogComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    NzTableModule
  ],
  exports: [
    StoryComponent
  ],
  providers: [
    StoryService
  ]
})
export class StoryModule { }
