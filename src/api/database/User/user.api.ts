import { UserProfile } from "@/types/User/User.type";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "..";

export const createUserProfile = async (
  userData: UserProfile,
  userId: string
) => {
  return await setDoc(doc(db, "users", userId), userData);
};

export const updateUserProfile = async (
  userId: string,
  updatedUserData: UserProfile
) => {
  const docRef = doc(db, "users", userId);
  await updateDoc(docRef, updatedUserData);
};

export const getUserProfile = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const userProfileData = docSnap.data() as UserProfile;
    return userProfileData;
  }
};

const userAPI = {
  createUserProfile,
  updateUserProfile,
  getUserProfile,
};
export default userAPI;
