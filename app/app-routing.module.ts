import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { GroupsComponent } from './groups/groups.component';
import { GiveComponent } from './give/give.component';
import { AboutComponent } from './about/about.component';

export const COMPONENTS = [HomeComponent,GroupsComponent,GiveComponent,AboutComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//groupsTab:groups//giveTab:give//aboutTab:about)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "groups", component: GroupsComponent, outlet: "groupsTab" },
    { path: "give", component: GiveComponent, outlet: "giveTab" },
    { path: "about", component: AboutComponent, outlet: "aboutTab" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
