import { Routes } from '@angular/router';
import { FormTourComponent } from 'src/app/form-tour/form-tour.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MailboxComponent } from 'src/app/mailbox/mailbox.component';
import { RichMarkdownComponent } from 'src/app/rich-markdown/rich-markdown.component';
import { StoreComponent } from 'src/app/store/store.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { title: 'Home', path: 'home', component: HomeComponent },
    { title: 'Form Validation Tour', path: 'form-tour', component: FormTourComponent },
    { title: 'Mailbox Service', path: 'mailbox', component: MailboxComponent },
    { title: 'Rich Markdown Editor', path: 'rich-markdown', component: RichMarkdownComponent },
    { title: 'Store Service', path: 'store', component: StoreComponent },
];
