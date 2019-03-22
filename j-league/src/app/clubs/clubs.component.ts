import { Component, OnInit } from '@angular/core';
import { Club } from '../shared/models/club.model';
import { ClubsService } from './clubs.service';

@Component({
    selector: 'app-clubs',
    templateUrl: './clubs.component.html',
    styleUrls: ['./clubs.component.scss'],
    providers: [ClubsService]
})
export class ClubsComponent implements OnInit {

    clubs: Club[] = [];

    constructor(private clubsService: ClubsService) {}

    ngOnInit() {
        this.getAllClubs();
    }

    getAllClubs(): void {
        this.clubsService.getAllClubs().subscribe(clubs => {
            this.clubs = clubs;
            console.log('List of clubs', this.clubs);
        }, error => {
            console.log('Error occured!');
        });
    }
}
