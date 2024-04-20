import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    { path: '', component: StudentsComponent }, // Set default route to StudentsComponent
    { path: 'home', component: HomeComponent },
    { path: 'student', component: StudentsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
