import { Component, OnInit } from '@angular/core';
import { InfoDoctor } from '../entity/infoDoctor';
import { ServiceHospitalService } from 'src/app/service/service-hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-doctor',
  templateUrl: './display-doctor.component.html',
  styleUrls: ['./display-doctor.component.css']
})
export class DisplayDoctorComponent implements OnInit {

  public doctor: InfoDoctor[] = [];
  public errorMessage: string | null = null;
  public name: string | null = null;
  public doc: InfoDoctor = {} as InfoDoctor;
  hidden = true;

  constructor(private activatedRoute: ActivatedRoute, private service: ServiceHospitalService) { }

  ngOnInit(): void {
    this.service.listAllDoctors().subscribe({
      next: (data) => {
        this.doctor = data;
      }
    });
  }

  displayDoctorInfo(docId: any) {

    console.log(docId);
    this.service.showDoctor(docId).subscribe({
      next: (data) => {
        console.log(data);
        this.doc = data;
      },
      error: (e) => {
        this.errorMessage = e;
      }
    })

  }

  hidetable() {
    this.hidden = false;

  }

  deleteListedDoc(id: number) {
    alert("Are you want to delete this Doctor");

    this.service.deleteDoctor(id).subscribe(data => { })
    this.hidden = true;
    this.service.listAllDoctors();
  }
}