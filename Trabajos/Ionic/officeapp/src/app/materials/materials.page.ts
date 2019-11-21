import { Component, OnInit } from '@angular/core';
import { Material } from '../models/material.model';
import { MaterialsService } from '../materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  public loadedMaterials: Material[];

  constructor(private materialSrvc: MaterialsService) { }

  ngOnInit() {
    this.materialSrvc.materials.subscribe(materials => {
      this.loadedMaterials = materials;
    });
  }

}
