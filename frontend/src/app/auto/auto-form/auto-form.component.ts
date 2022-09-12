import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/interfaces/Auto';
import { AutosProvider } from 'src/app/providers/Auto.provider';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {

  patente?: string;
  modelo?: number;
  marca?: string;

  isEdit: boolean = false;

  constructor(private autoProvider: AutosProvider, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["patente"]){
      this.isEdit = true;
      this.autoProvider.getById(this.route.snapshot.params["patente"]).subscribe({
        next:(response: Auto) => {
          this.patente = response.patente;
          this.marca= response.marca;
          this.modelo= response.modelo; 
          
          console.log(response);         
        },
        error:(error) => console.error(error),
        complete:() => console.info('complete')
      });
    }
  }

  onCreate(){
    this.autoProvider.create(this.patente,this.modelo,this.marca).subscribe({
      next:(response: Auto) => {
        this.patente = response.patente;
        alert("Auto insertado");
        console.log(response);
        this.router.navigate(["auto"]);
      },
      error:(error) => console.error(error),
      complete:() => console.info('complete')      
    })
  }

  onEdit(){
    this.autoProvider.edit(this.patente,this.marca,this.modelo).subscribe({
      next:(response: Auto) => {
        alert("auto editado");
        console.log(response);
      },
      error:(error) => console.error(error),
      complete:() => console.info('complete')      
    })
  }

  onCancel(){
    this.router.navigate(["auto"])
  }

}
