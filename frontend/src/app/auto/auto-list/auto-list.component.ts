import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auto } from 'src/app/interfaces/Auto';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {

  @Input() autos?: Auto[];  
  @Output() createEvent = new EventEmitter(); 
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    this.createEvent.emit();
  }

  edit(patente: string){
    this.editEvent.emit(patente);
  }

  delete(patente: string){
    this.deleteEvent.emit(patente);
  }

}
