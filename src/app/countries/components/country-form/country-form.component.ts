import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styles: [],
})
export class CountryFormComponent implements OnInit {
  @Input()
  placeholder = '';

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  term = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  search(): void {
    this.onEnter.emit(this.term);
  }

  keyPressed(): void {
    this.debouncer.next(this.term);
  }
}
