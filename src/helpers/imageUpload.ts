import firebaseApp from '@/config/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImagesToFirebaseAndGetUrls = async (files: any[]) => {
  try {
    const storage = getStorage(firebaseApp);
    const urls = [];

    for (const file of files) {
      const storageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      urls.push(downloadUrl);
    }

    return urls;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
