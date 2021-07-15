import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Juego{
  Nombre:string;
  Descripcion:string;
  CreadoPor:string;
  id:string;
  imagenUrl:string;
}
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Juego>;
  items$: Observable<Juego[]>;
  private itemDoc: AngularFirestoreDocument<Juego>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Juego>('items');
    this.items$ = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Juego;
        data.id = a.payload.doc.id;
        return data;
      })));
    this.itemDoc = afs.doc<Juego>('items/1');
  }
  agregarJuego(item: Juego) {
    this.itemsCollection.add(item);
  }
  listaJuegos(){
    return this.items$;
  }
  eliminarJuego(item:Juego){
    this.itemDoc= this.afs.doc<Juego>(`/items/${item.id}`);
    this.itemDoc.delete();
  }
  actualizarJuego(item:Juego) {
    this.itemDoc= this.afs.doc<Juego>(`/items/${item.id}`);
    this.itemDoc.update(item);
  }
}
