import { Component,NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SugerenciaService } from '../../servicios/sugerencia.service'; // Importa tu servicio
import { Router } from '@angular/router'; // para redireccion de botones 
import { Platform } from '@ionic/angular'; // abrir la url externa 

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})

export class SugerenciasPage  {
  correo: string = ''; 
  mensaje: string = ''; 
  constructor(
    private toastController: ToastController,
    private sugerenciaService: SugerenciaService, // Inyecta el servicio en el constructor
    private ngZone: NgZone, //limpiar campos
    private router: Router, // redireccion botones 
    private platform: Platform // para abrir links externos 
  ) {}

  async enviarFormulario(correo: string, mensaje: string) {
  
    if (!correo || !mensaje) {
      this.mostrarToast('Completa el formulario');
      return;
    }

    // Verificar si el correo electrónico es válido
    const correoValido = this.validarCorreoElectronico(correo);
    if (!correoValido) {
      this.mostrarToast('correo electrónico invalido');
      return;
    }

    // Verificar si el mensaje tiene al menos 30 caracteres
    if (mensaje.length < 30) {
      this.mostrarToast('Por favor ingresa un mensaje con al menos 30 caracteres');
      return;
    }

    // Llama al método enviarFormulario() del servicio y pasa los datos del formulario
    try {
      //await this.sugerenciaService.enviarFormulario(correo, mensaje);
      await this.sugerenciaService.enviarFormulario(correo, mensaje);
      this.mostrarToast('Mensaje enviado correctamente');
      this.ngZone.run(() => {
        this.limpiarCampos();
      });
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
      this.mostrarToast('Error al enviar, por favor intenta de nuevo');
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, 
      position: 'bottom' 
    });
    toast.present();
  }

  validarCorreoElectronico(correo: string): boolean {
    // Expresión regular para validar el correo electrónico
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
  } 
  limpiarCampos() {
    // Asigna valores vacíos a los campos de texto
    this.correo = "";
    this.mensaje = '';
  }
  redireccionarCrearPeticion() {
    this.router.navigateByUrl('https://bogota.gov.co/sdqs/crear-peticion');
  }

  redireccionarConsultarPeticion() {
    this.router.navigateByUrl('https://bogota.gov.co/sdqs/consultar-peticion');
  }
  abrirURL(url: string) {
    console.log("esta entrado al metodo abril url");
    if (this.platform.is('cordova')) {
      // Si estamos en una aplicación móvil, utiliza el plugin InAppBrowser
      window.open(url, '_system');
    } else {
      // Si estamos en una aplicación web, utiliza window.open() estándar
      window.open(url, '_blank');
    }
  }
}
