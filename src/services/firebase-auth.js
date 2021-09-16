import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
