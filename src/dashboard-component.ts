import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<main class="mdl-layout__content" style="padding-left:15px">
      <div class="page-content">
				<h2 class=".mdl-typography--display-3, .mdl-typography--display-3-color-contrast">Dashboard</h2>
				<div>Hello {{name}}</div>

				<div class="mdl-textfield mdl-js-textfield">
					<input class="mdl-textfield__input" type="text" id="sample1" [(ng-model)]="name"/>
					<label class="mdl-textfield__label" for="sample1"></label>
				</div>
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
				(click)="show()">Show in console</button>
			</div>
    </main>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	name = 'john';

	show() {
		console.log(`Name = ${this.name}`);
	}
}
