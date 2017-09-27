import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent {

    constructor( private messageService: MessageService) {
    }
    onSubmit(form: NgForm){
        var message = new Message(form.value.content, form.value.username);
        this.messageService.addMessage(message).subscribe(
                data => console.log(data),
                error => console.log(error)
        );

        form.resetForm();
    };
}