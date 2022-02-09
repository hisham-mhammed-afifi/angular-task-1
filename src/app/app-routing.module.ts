import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesComponent } from './notes/notes.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { WithDiscountComponent } from './products/with-discount/with-discount.component';
import { WithoutDiscountComponent } from './products/without-discount/without-discount.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'with-discount', component: WithDiscountComponent },
      { path: 'without-discount', component: WithoutDiscountComponent },
    ],
  },

  { path: 'products/:id', component: ProductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'posts/:id', component: CommentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reactive-login', component: ReactiveLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reactive-register', component: ReactiveRegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
