import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    // Other modules
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [
    StudentService // Register StudentService here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
