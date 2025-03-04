import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { CreditsComponent } from './pages/public/credits/credits.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/private/users/users.component';
import { UserRegisterComponent } from './pages/private/users/user-register/user-register.component';
import { CategoriesComponent } from './pages/private/categories/categories.component';
import { CategoryRegisterComponent } from './pages/private/categories/category-register/category-register.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'dashboard/users', component: UsersComponent },
    { path: 'dashboard/categories', component: CategoriesComponent },
    { path: 'dashboard/user/new', component: UserRegisterComponent },
    { path: 'dashboard/category/new', component: CategoryRegisterComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];
