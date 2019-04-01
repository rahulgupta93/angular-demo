import { NavigationItem } from './navigation.type';

export const navigationData: NavigationItem[] = [
    { name: 'Home', url: '/home', heading: '', iconPath: '' },
    { name: 'Clubs', url: '/clubs', heading: '', iconPath: '' },
    { name: 'Matches', url: '/matches', heading: '', iconPath: '' },
    { name: 'Schedule', url: '/schedule', heading: '', iconPath: '' },
    { name: 'History', url: '/history', heading: '', iconPath: '' },
    { name: 'About', url: '/about', heading: '', iconPath: '' },
    { name: 'Store', url: '/store', heading: '', iconPath: '' }
];

export const navigationPath = {
    home: 'home',
    clubs: 'clubs',
    matches: 'matches',
    schedule: 'schedule',
    history: 'history',
    about: 'about',
    store: 'store'
};
