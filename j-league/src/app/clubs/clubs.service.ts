import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Club } from '../shared/models/club.model';

import { baseUrl } from '../contants';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClubsService {

    clubsUrl: string;

    constructor(private http: HttpClient) {
        this.clubsUrl = baseUrl + 'clubs';
    }

    getAllClubs(): Observable<Club[]> {
        return this.http.get<Club[]>(this.clubsUrl);
    }
}
