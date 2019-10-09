import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SearchResponse } from './story.model'


const API_URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  constructor(private _httpClient: HttpClient) { }

  public fetch() {
    return this._httpClient.get<SearchResponse>(API_URL)
  }
}
