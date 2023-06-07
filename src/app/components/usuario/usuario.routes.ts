import { Routes } from '@angular/router';

import { UsuarioNuevoComponent } from '../usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from '../usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from '../usuario/usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
];
