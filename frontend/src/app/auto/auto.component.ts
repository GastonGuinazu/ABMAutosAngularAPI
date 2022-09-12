import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../interfaces/Auto';
import { AutosProvider } from '../providers/Auto.provider';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  autos?: Auto[];
  constructor(private autoProvider: AutosProvider, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.autoProvider.getAll().subscribe({
      next: (response: Auto[]) => { this.autos = response; console.log(this.autos) },
      error: (error) => console.log(error),
      complete: () => console.log("llamada completada")
    });
  }

  create() {
    this.router.navigate(["form"], { relativeTo: this.route })
  }

  edit(patente: string) {
    this.router.navigate(["form", patente], { relativeTo: this.route });
  }

  delete(patente: string) {
    this.autoProvider.delete(patente).subscribe({
      next: () => {
        this.autos = this.autos?.filter((autos) => autos.patente != patente);
        console.log(this.autos)
      },
      error: (error) => console.log(error),
      complete: () => console.log("Auto elimido")
    });
  }
}
