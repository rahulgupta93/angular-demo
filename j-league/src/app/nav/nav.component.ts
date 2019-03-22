import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    navItems: {}[];

    ngOnInit() {
        this.navItems = [{
            name: 'Home',
            url: '/home',
            iconPath: ''
        }, {
            name: 'Clubs',
            url: '/clubs',
            iconPath: ''
        }, {
            name: 'Matches',
            url: '/matches',
            iconPath: ''
        }, {
            name: 'Schedule',
            url: '/schedule',
            iconPath: ''
        }, {
            name: 'History',
            url: '/history',
            iconPath: ''
        }, {
            name: 'About',
            url: '/about',
            iconPath: ''
        }, {
            name: 'Store',
            url: '/store',
            iconPath: ''
        }];
    }

}
