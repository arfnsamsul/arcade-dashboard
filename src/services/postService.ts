import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Post } from "@/types/Post"; // Ensure this points to your Post type

// Function to create a new post
export const createPost = async (postData: Omit<Post, "id">) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), postData);
    console.log("Post created with ID: ", docRef.id);
  } catch (error) {
    console.error("Error creating post: ", error);
  }
};

// Function to fetch a post by ID
export const getPostById = async (postId: string) => {
  try {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Post;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post: ", error);
  }
};

// Function to update a post by ID
export const updatePost = async (postId: string, postData: Omit<Post, "id">) => {
  try {
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, postData);
    console.log("Post updated successfully!");
  } catch (error) {
    console.error("Error updating post: ", error);
  }
};
