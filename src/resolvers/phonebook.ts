// import { CountriesResponseQueryI } from '../types/countries';
// import countriesDataSource from '../datasource/countries';

import { IPhoneBook } from '../types';
import FirebaseAPI from '../datasource/firebase';

const fb: any = new FirebaseAPI();

export const getPhonebookResolver = async (): Promise<any> => {
  const phoneBookRef = fb.firestore().collection('phonebook');
  const phoneBookCollection = await phoneBookRef.get();

  const result: IPhoneBook[] = [];
  phoneBookCollection.forEach((doc: any) => {
    const data = doc.data();

    result.push({
      id: doc.id,
      ...data,
    });
  });

  return result;
};

export const editPhonebookResolver = async (_: any, { doc }: any): Promise<any> => {
  const phoneBookRef = fb.firestore().collection('phonebook').doc(doc.id);
  const newDoc = { ...doc };
  delete newDoc.id;

  try {
    await phoneBookRef.update(newDoc);

    return {
      code: 200,
      message: 'Phonebook updated successfully!',
      success: true,
    };
  } catch (error) {
    return {
      code: 500,
      message: error.message,
      success: false,
    };
  }
};

export const addPhonebookResolver = async (_: any, { doc }: any): Promise<any> => {
  const phoneBookRef = fb.firestore().collection('phonebook').doc();
  const newDoc = { ...doc };
  delete newDoc.id;

  try {
    await phoneBookRef.set(newDoc);

    return {
      code: 200,
      message: 'Phonebook added successfully!',
      success: true,
    };
  } catch (error) {
    return {
      code: 500,
      message: error.message,
      success: false,
    };
  }
};

export const deletePhonebookResolver = async (_: any, { id }: any): Promise<any> => {
  const phoneBookRef = fb.firestore().collection('phonebook').doc(id);

  try {
    await phoneBookRef.delete();

    return {
      code: 200,
      message: 'Phonebook deleted successfully!',
      success: true,
    };
  } catch (error) {
    return {
      code: 500,
      message: error.message,
      success: false,
    };
  }
};
