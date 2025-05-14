import { Component, inject, OnInit } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { Oauth2AuthService } from './auth/oauth2-auth.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToastService } from './shared/toast/toast.service';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ConversationsComponent } from './conversations/conversations.component';
import { HeaderComponent } from './layout/header/header.component';
import { SendComponent } from './messages/send/send.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'wac-root',
  standalone: true,
  imports: [
    NgbToast,
    NavbarComponent,
    HeaderComponent,
    ConversationsComponent,
    MessagesComponent,
    SendComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private oauth2Service = inject(Oauth2AuthService);
  protected toastService = inject(ToastService);

  ngOnInit(): void {
    this.initFontAwesome();
    this.initAuthentication();
    this.configDayJs();
  }

  private configDayJs() {
    dayjs.extend(relativeTime);
  }

  private initAuthentication(): void {
    this.oauth2Service.initAuthentication();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
