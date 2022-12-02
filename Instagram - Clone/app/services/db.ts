import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";;
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBc1qhZve2bxnqCiGP2hFN1wfyWBw_Yc1s",
  authDomain: "databasea-bf62e.firebaseapp.com",
  projectId: "databasea-bf62e",
  storageBucket: "databasea-bf62e.appspot.com",
  messagingSenderId: "234482297919",
  appId: "1:234482297919:web:dee98a92ddcdca78b65c8a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);

        console.log("Email: ", email, " / ", "Password: ", password);
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        if(email != "" && password != ""){
          const docRef = await addDoc(collection(db,"usuarios"),{
              email,
              password
          });
          return true;
        }
    } catch (error) {
        return false;
    }
  }

  export const addPost = async ({
    image,
    description
  }:{
    image: any;
    description: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          user: "Juliibc_",
          pictureprofile: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          ubi: "Cali, Valle",
          content: image,
          likes: "0 Likes",
          description: description,
          coments: "0 coments",
          date: 'Just now',
          time: Date.now(),
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post) => {
        posts.push(post.data());
      });
      
      return posts;
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error');
    }
  }