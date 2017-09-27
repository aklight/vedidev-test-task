import {Routes, RouterModule} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";


const APP_ROUTES = [
    { path: '', redirectTo: '/message', pathMatch: 'full'},
    { path: 'message', component: MessagesComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);