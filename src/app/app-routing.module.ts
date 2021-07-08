import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { StaticPagesComponent } from './components/static-pages/static-pages.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'chat',
        component:ChatComponent
      },
      {
        path:'friends',
        component:FriendsComponent
      },
      {
        path:'post',
        component:PostComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'static-pages',
        component:StaticPagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
