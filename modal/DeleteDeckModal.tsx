import { createPortal } from "react-dom";
import styles from '../styles/DeleteDeckModal.module.css'
import { deleteDeck } from "../Reducer/UserDecks";
interface PropsDeleteDeck {
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  getIdDeck:string;
  idUser:string;
}

const DeleteDeckModal = ({
  showDeleteModal, setShowDeleteModal,getIdDeck,idUser
}: PropsDeleteDeck) => {
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }
  return container
    ? createPortal(
      <div className={styles.containerModal}>
        {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
        <div className={styles.containerDelete}>
          <h3 className={styles.title}>estas seguro que quieres eliminar este set de estudio?, esto no se puede deshacer.</h3>
          <div className={styles.buttonContainer}>
            <button onClick={()=>setShowDeleteModal(!showDeleteModal)} className={styles.buttonCancel}>cancelar</button>
            <button onClick={()=>{deleteDeck(idUser,getIdDeck);setShowDeleteModal(!showDeleteModal)}} className={styles.buttonDelete}>OK</button>
          </div>
        </div>
      </div>,
      container
    )
    : null;
};

export default DeleteDeckModal;