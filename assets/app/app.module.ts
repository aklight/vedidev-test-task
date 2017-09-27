import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";

@NgModule({
    declarations: [AppComponent, MessageComponent, MessageListComponent, MessageInputComponent, MessagesComponent],
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}