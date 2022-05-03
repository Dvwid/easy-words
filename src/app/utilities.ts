import {map} from "rxjs";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";

export function createDocumentId(ref: AngularFirestoreCollection<unknown>) {
  return ref.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Object;
      const id = a.payload.doc.id;
      return {id, ...data};
    }))
  );
}
