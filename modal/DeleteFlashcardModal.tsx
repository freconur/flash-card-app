import { createPortal } from "react-dom";
import styles from '../styles/DeleteDeckModal.module.css'
import { deleteDeck } from "../Reducer/UserDecks";
import { deleteFlashcard } from "../Reducer/UserFlashCards";
import { useGlobalContext } from "../context/ContextGlobal";
interface PropsDeleteDeck {
  showModalDeleteFlashcard: boolean;
  setShowModalDeleteFlashcard: React.Dispatch<React.SetStateAction<boolean>>;
  currentlyDeck: DecksUser | undefined;
  idUser: string
  flascardData: Flashcards | undefined
}

const DeleteFlashcardModal = ({
  showModalDeleteFlashcard, setShowModalDeleteFlashcard, currentlyDeck, idUser, flascardData
}: PropsDeleteDeck) => {
  const { SelectDeck,globalData } = useGlobalContext()
  const { decksUser } = globalData
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }

  const handleDeleteFlashcard = () => {
    deleteFlashcard(idUser, currentlyDeck, flascardData)
    SelectDeck(currentlyDeck,idUser,decksUser)
    setShowModalDeleteFlashcard(!showModalDeleteFlashcard)
  }
  
  return container
    ? createPortal(
      <div className={styles.containerModal}>
        {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
        <div className={styles.containerDelete}>
          <h3 className={styles.title}>estas seguro que quieres eliminar este flashcard?, esto no se puede deshacer.</h3>
          <div className={styles.buttonContainer}>
            <button onClick={() => setShowModalDeleteFlashcard(!showModalDeleteFlashcard)} className={styles.buttonCancel}>cancelar</button>
            <button onClick={handleDeleteFlashcard} className={styles.buttonDelete}>OK</button>
          </div>
        </div>
      </div>,
      container
    )
    : null;
};

export default DeleteFlashcardModal;