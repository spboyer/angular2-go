import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters-component';
import {DashboardComponent} from './dashboard-component';

@Component({ selector: 'my-app' })
@View({
  template: `
    <header class="mdl-layout__header">
      <div class="mdl-layout-icon"></div>
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">angular2-go</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [router-link]="['./dashboard']">Dashboard</a>
          <a class="mdl-navigation__link" [router-link]="['./characters']">Characters</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">angular2-go</spano
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" [router-link]="['./dashboard']">Dashboard</a>
        <a class="mdl-navigation__link" [router-link]="['./characters']">Characters</a>
      </nav>
    </div>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'dashboard', component: DashboardComponent },
  { path: '/characters', as: 'characters', component: CharactersComponent }
])
export class AppComponent { }

