import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const errorToast = (message) => {
  /** error alert is fired from here */
  toast.error(message);
};

export const infoToast = (message) => {
  /** info alert is fired from here */
  toast.info(message);
};

export const successToast = (message) => {
  /** success alert is fired from here*/

  toast.success(message);
};
