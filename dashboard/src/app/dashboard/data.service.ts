import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

	readonly data = [
        ['January', 33],
        ['February', 68],
        ['March', 49],
        ['April', 15],
        ['May', 80],
        ['June', 27]
    ]

	constructor() {}

	/**
	 * Returns an observable containing data to display in chart.
	 *
	 * @return Observable<any>
	 */
	fetchData(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.data);
			observable.complete();
		});
	}

}
