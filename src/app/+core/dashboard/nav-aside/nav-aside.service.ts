import { Injectable } from '@angular/core';

@Injectable()
export class NavAsideService {

    menu: IMenu[] = [
        { label: 'Analytics', icon: 'trending_up', path: 'analytics' },
        { label: 'News', icon: 'description', path: 'news' },
        { label: 'Broad Brief', icon: 'assignment', path: 'broadbrief' },
        { label: 'Briefcase', icon: 'card_travel', path: 'briefcase' }
    ];

    closeMenu: IMenu = { label: 'Close menu', icon: 'navigate_before' };

}

interface IMenu {
    label: string;
    icon: string;
    path?: string;
}
