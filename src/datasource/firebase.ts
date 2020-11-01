// import { RESTDataSource } from 'apollo-datasource-rest';
import * as admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount as never),
  databaseURL: 'https://api-project-318826714706.firebaseio.com',
};

export default class FirebaseAPI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public firebase: any = null;

  constructor() {
    this.firebase = admin.initializeApp(firebaseConfig);

    return this.firebase;
  }

  public getPhoneBook() {
    const phoneBookCollection = this.firebase.firestore().collection('phonebook');

    phoneBookCollection.onSnapshot((snapshot: any) => {
      snapshot.docChanges().forEach(({ type, doc }: any) => {
        const data = doc.data();
        console.log(data, type);
      });
    });
  }
}
