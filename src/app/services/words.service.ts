import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {WordsDto} from "../dtos";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import {createDocumentId} from "../utilities";

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private wordsCollection: AngularFirestoreCollection<WordsDto>;

  constructor(private readonly afs: AngularFirestore) {
    this.wordsCollection = afs.collection<WordsDto>('words');
  }

  getLastCreatedWords(limit: number): Observable<any> {
    const wordsRef = this.afs.collection<WordsDto>('words', ref => ref.orderBy('createdAt', 'desc').limit(limit));
    return createDocumentId(wordsRef);
  }

  getAllDocuments(): Observable<any> {
    const wordRef = this.afs.collection<WordsDto>('words');
    return createDocumentId(wordRef);
  }

  deleteWord(id: string) {
    const ref = this.wordsCollection.doc(id).ref;
    return from(ref.delete());
  }

  addWord(obj: WordsDto) {
    const ref = this.wordsCollection.ref;
    return from(ref.add(obj));
  }

  updateWord(id: string, obj: WordsDto) {
    const ref = this.wordsCollection.doc(id).ref;
    return from(ref.update(obj));
  }
}
