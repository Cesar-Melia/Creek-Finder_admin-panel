import { Component, OnInit } from '@angular/core';
import { CreeksService } from '../../services/creeks.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Creek } from '../../models/Creek';

@Component({
  selector: 'app-create-creek',
  templateUrl: './create-creek.component.html',
  styleUrls: ['./create-creek.component.scss'],
})
export class CreateCreekComponent implements OnInit {
  createCreekForm: FormGroup;
  imageURL: string;

  constructor(
    private creeksService: CreeksService,
    private formBuilder: FormBuilder

  ) {
    this.imageURL = '';


    this.createCreekForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: [null, [Validators.required]],
      province: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lng: ['', [Validators.required]],
    });

  }
  ///////

  ngOnInit(): void { }

  submitForm(): void {
    let newCreek = {
      name: this.createCreekForm.value.name,
      img: this.createCreekForm.value.img,
      province: this.createCreekForm.value.province,
      type: this.createCreekForm.value.type,
      description: this.createCreekForm.value.description,
      lat: this.createCreekForm.value.lat,
      lng: this.createCreekForm.value.lng,
    };
    this.creeksService
      .postCreek(newCreek)
      .subscribe((createCreekData: Creek) => {
        console.log('Cala creada: ', createCreekData);
      });
  }

  // onFileSelected(event: any): void {
  //   // console.log(event.target.files[0]);
  //   const selectedFile = (event.target as Element);
  //   this.createCreekForm.patchValue({ img: selectedFile });
  //   this.createCreekForm.get('img')?.updateValueAndValidity();

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imageURL = reader.result as string;
  //   }
  //   reader.readAsDataURL(selectedFile)


  // }


}
