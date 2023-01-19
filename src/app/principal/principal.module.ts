import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaComponent } from './vista/vista.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BusquedaComponent,
    MenuComponent,
    FormularioComponent,
    VistaComponent
  ],
  imports: [
    CommonModule,
    RouterLink, //importantes para usar routerlink
    RouterLinkActive,
    FormsModule
  ],
  exports: [
    MenuComponent //comprobando si funciona exportar solo el menu ya que usamos rutas
  ]
})
export class PrincipalModule { }
