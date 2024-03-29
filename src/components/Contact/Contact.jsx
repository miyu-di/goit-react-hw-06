import css from "./Contact.module.css";

import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.card}>
      <div>
        <p className={css.name}>
          <MdPerson className={css.person} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.phone} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
