import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from 'firebase/compat/app';
import {Record} from "../models/Record";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  collectionName = 'Records';
  fieldPath = new firebase.firestore.FieldPath('user', 'id')

  constructor(private afs: AngularFirestore) {
  }

  create(record: Record) {
    record.id = this.afs.createId();
    return this.afs.collection<Record>(this.collectionName).doc(record.id).set(record);
  }

  getByUserId(userId: string) {
    return this.afs.collection<Record>(this.collectionName, ref =>
      ref.where(this.fieldPath, '==', userId).orderBy('type')).valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<Record>(this.collectionName).doc(id).delete();
  }

  update(record: Record) {
    return this.afs.collection<Record>(this.collectionName).doc(record.id).update(
      {record:'[HIBÁS] ' + record.record});
  }
}
