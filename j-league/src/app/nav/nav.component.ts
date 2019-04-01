import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { navigationData } from './navigation.constants';
import { NavigationItem } from './navigation.type';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    navItems: {}[];

    @Output() routeChange = new EventEmitter<NavigationItem>();

    ngOnInit() {
        this.navItems = navigationData;
    }

}
