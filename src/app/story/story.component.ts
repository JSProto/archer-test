import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Hit } from './story.model'
import { StoryService } from './story.service'
import { timer, Subject } from 'rxjs'

import { takeUntil } from 'rxjs/operators'

import filter from 'lodash/filter'
import { MatDialog } from '@angular/material'
import { ModalDialogComponent } from './modal/modal.component'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit, OnDestroy {

  public searchInput = new FormControl('')
  public hits: Hit[] = []
  public display: Hit[] = []

  private destroy$ = new Subject()

  constructor(
    private _storyService: StoryService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    timer(0, 10000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refresh())

    this.searchInput.valueChanges.subscribe((searchText) => {
      this.display = this.filter(this.hits, searchText)
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  refresh() {
    this._storyService.fetch().subscribe((response) => {
      this.hits = this.hits.concat(response.hits)
      this.display = this.filter(this.hits, this.searchInput.value)
    })
  }

  filter(data: Hit[], search: string) {
    return filter(data, (hit: Hit) => {
      return hit.title.toLowerCase().includes(search)
    })
  }

  onClickRow(data: Hit) {
    const dialogRef = this._dialog.open(ModalDialogComponent, {
      width: '500px',
      data
    })
  }

}
