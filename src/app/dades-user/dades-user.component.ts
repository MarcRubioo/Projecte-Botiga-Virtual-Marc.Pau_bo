import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dades-user',
  templateUrl: './dades-user.component.html',
  styleUrls: ['./dades-user.component.css']
})
export class DadesUserComponent implements OnInit {
  nom: string = '';
  cognom: string = '';
  telefon: string = '';
  email: string = '';
  passw: string= '';

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.getPerfilData();
  }

  getPerfilData() {
    const email = 'correo@example.com'; // Reemplaza con el correo electrónico del usuario
    const docRef = this.firestore.collection('usuaris').doc(email);

    docRef.get().subscribe((doc) => {
      if (doc.exists) {
        const data = doc.data();
        this.nom = data.nom;
        this.cognom = data.cognom;
        this.telefon = data.telefon;
        this.email = data.email;
        this.passw = data.passw;
      } else {
        console.log('El documento no existe');
      }
    });
  }
}



