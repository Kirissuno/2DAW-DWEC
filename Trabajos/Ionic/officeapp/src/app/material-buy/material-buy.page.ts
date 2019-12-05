import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialsService } from '../materials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Material } from '../models/material.model';

@Component({
  selector: 'app-material-buy',
  templateUrl: './material-buy.page.html',
  styleUrls: ['./material-buy.page.scss'],
})
export class MaterialBuyPage implements OnInit {

  form: FormGroup;
  public loadedMaterial: Material;

  constructor(
    private materialSrvc: MaterialsService,
    private route: ActivatedRoute, private navCrtl: NavController, private toastCtrl: ToastController, private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('materialId')) {
        this.navCrtl.navigateBack('/materials');
        return;
      }

      this.materialSrvc.getMaterial(paramMap.get('materialId')).subscribe(material => {
        this.loadedMaterial = material;

        this.form = new FormGroup({
          quantity: new FormControl(this.loadedMaterial.quantity, {
            updateOn: 'change',
            validators: [Validators.required, Validators.min(1)]
          })
        });
      });
    });
  }

  sumar() {
    let sumando = 0;
    const precio: number = parseInt(document.getElementById('precio').textContent);
    const cantidad = (document.getElementById('cantidadSumar') as HTMLInputElement).value;
    
    sumando = sumando + (parseInt(cantidad) * precio);
    document.getElementById('precioTotal').innerHTML = sumando.toString() + '€';
  }

  buyMaterial() {
    this.materialSrvc.sumMaterial(
      this.loadedMaterial.id)
    .subscribe(() => {
      this.toastCtrl.create({
        animated: true,
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        message: 'El elemento se compró correctamente'
      }).then(toastEl => {
        toastEl.present();
        this.router.navigate(['/materials']);
      });
    });
  }

}
