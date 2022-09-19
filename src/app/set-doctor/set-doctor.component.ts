import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoDoctor } from '../entity/infoDoctor';
import { ServiceHospitalService } from 'src/app/service/service-hospital.service';

@Component({
  selector: 'app-set-doctor',
  templateUrl: './set-doctor.component.html',
  styleUrls: ['./set-doctor.component.css']
})
export class SetDoctorComponent implements OnInit {

  public doctor: InfoDoctor = {} as InfoDoctor;
  constructor(private service: ServiceHospitalService, private router: Router) { }

  ngOnInit(): void {
  }
  saveDoctor() {
    this.service.SetDoctor(this.doctor).subscribe({
      next: (data) => {
        alert("DOCTOR ADDED TO THE HOSPITAL DATABASE");
        this.router.navigate(['/']).then();

      },
      error: (e) => {
        this.router.navigate(['/doctors/doctor/add']).then();
        alert("Error occured ! Try again..");

      }
    })
  }
}