import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from './restrito.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';

const routes: Routes = [
    { path: 'restrito', component: RestritoComponent, children: [
        { path: 'cadastro', component: CadastroProdutoComponent },
        { path: 'lista', component: ListaProdutoComponent },
        { path: 'editar/:id', component: AtualizaProdutoComponent }
    ] },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }