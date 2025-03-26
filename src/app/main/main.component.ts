import { Component } from '@angular/core';
import { AddButtonComponent } from "../add-button/add-button.component";
import { ImgContainerComponent } from "../img-container/img-container.component";
import { NewimageFormComponent } from "../newimage-form/newimage-form.component";
import { Image } from '../models/image.model';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-main',
  imports: [AddButtonComponent, ImgContainerComponent, NewimageFormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newImageModalID:number=1;//Las imagenes se enumeran desde 1
  
  imgArray:Image[]=[]; //arreglo donde guardar las imagenes

  constructor(private imgService: ImgService){} // inyectar el uso del servicio

  ngOnInit():void{
    this.imgArray = this.imgService.getImages(); 
    //obtener imagenes del servicio guardarlar en el arreglo imgArray
  }

}
