import {Injectable} from '@angular/core';
import {from, map, Observable} from "rxjs";
import {WordsDto} from "../dtos";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private wordsCollection: AngularFirestoreCollection<WordsDto>;

  constructor(private readonly afs: AngularFirestore) {
    this.wordsCollection = afs.collection<WordsDto>('words');
  }

  getAllWords(): Observable<WordsDto[]> {
    return this.wordsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as WordsDto;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getLastCreatedWords(limit: number): Observable<any> {
    const historyRef = this.afs.collection<History>('words', ref => ref.orderBy('createdAt', 'desc').limit(limit));
    return historyRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as History;
          const docId = a.payload.doc.id;
          return { docId, ...data };
        })
      })
    )
  }

  deleteWord(id: string) {
    const ref = this.wordsCollection.doc(id).ref;
    return from(ref.delete());
  }

  addWord(obj: WordsDto) {
    const ref = this.wordsCollection.ref;
    return from(ref.add(obj));
  }
}
