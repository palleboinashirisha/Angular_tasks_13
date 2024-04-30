import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  data : any = []
  itemName: string = ''
  formInfo : any

  display : boolean = false

  reactiveForm: FormGroup

  constructor(private dialogRef: MatDialogRef<any>, private http : HttpClient,private service:InformationService) { }

  ngOnInit(): void {
    // this.onSaveInfo()
    this.service.ApiInfo()
    // .subscribe((res)=>{
    //   this.data = res
    //   this.data = this.data.data
    // })

  this.reactiveForm = new FormGroup({
    ses : new FormControl(null, Validators.required),
    sr : new FormControl(null, Validators.required),
    rpo : new FormControl(null, Validators.required),
    contract : new FormControl(null, Validators.required),
    invoice : new FormControl(null, Validators.required),
    description : new FormControl(null, Validators.required),
    servicelocatioin : new FormControl(null, Validators.required),
    costcenter : new FormControl(null, Validators.required),
    amountExl : new FormControl(null, Validators.required),
    vat : new FormControl(null, Validators.required),
    total : new FormControl(null, Validators.required),
    lessRetention : new FormControl(null, Validators.required),
    netArAfterRetention : new FormControl(null, Validators.required),
    currency : new FormControl(null, Validators.required),
    currentHolder : new FormControl(null, Validators.required),
    currentHolderName : new FormControl(null, Validators.required),
    submissiondate : new FormControl(null, Validators.required),
    commments: new FormControl(null, Validators.required),
  })
} 
  onSubmit(){
    // console.log(this.reactiveForm,'formdata')
    if (this.reactiveForm.valid) {
      const formData = this.reactiveForm.value;
      // call post method
      this.service.saveFormData(formData).subscribe((response) => {
          // Form data saved successfully
          console.log('Form data saved:', response);
        },
        error => {
          // Error handling
          console.error('Error saving form data:', error);
        }
      );
    }
  }


  closeAddform(){
    this.display=true
  }
  onCancel(){
    this.dialogRef.close()
  }

  onSaveInfo(){
    this.formInfo = this.reactiveForm.value
     console.log(this.formInfo,'informtion of the form details...')
    const apiUrl = 'http://192.168.15.41:8086/WellService/api/v1/sesStatus';
    const headers={ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrcmlzaG5hIiwiYXV0aCI6IlRlc3RpbmdHcm91cCIsImlkIjoiNjQzZmQxNTM4NTRkMmYwZTE3MzFmMDFmIiwidXNlcm5hbWUiOiJrcmlzaG5hIiwiZW1haWxpZCI6InNya0BnbWFpbC5jb20iLCJleHAiOjE3MTQyMDI2MDR9.bZ9S0yu6cOjmKmfhTFhe6nPpKuQcuboxZCZNqafndyu8h9qDWUSQkof9c79d-bBIuSpdHInXX061SycMRvd7wA'}
    this.http.post<any>(apiUrl,this.formInfo, {headers}).subscribe((res)=>{
      this.data = res
      this.data = this.data.data
      // console.log(this.data,'reees')
      this.data =  this.service.ApiInfo()
      // .subscribe((res)=>{
        
      //   this.data = res
      //   this.data = this.data.data.content
      //    console.log(this.data,'service info')
      // })
    console.log(res,'response is called')
    })
  }
}
