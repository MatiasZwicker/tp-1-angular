import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Marcar el componente como independiente
  imports: [FormsModule] // Importar FormsModule aquí
})
export class AppComponent {
  title = 'hola-app';
  name: string = '';  // Definir la propiedad name
  submittedName: string = ''; // Propiedad para mostrar el nombre enviado

  onSubmit(form: any) {
    this.submittedName = this.name; // Guardar el nombre enviado
    this.name = 'nombre_persona'; // Reiniciar el campo name
    form.resetForm(); // Reiniciar el formulario
  }
}
