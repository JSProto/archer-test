import { NgModule } from '@angular/core'

import {
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatToolbarModule,
  MatSortModule
} from '@angular/material'

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatSortModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatSortModule,
  ]
})

export class MaterialModule {
    static forRoot() {
        return {
            ngModule: MaterialModule
        }
    }
}
