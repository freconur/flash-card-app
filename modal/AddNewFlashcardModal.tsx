import { createPortal } from "react-dom";
import styles from '../styles/UpdateFLashCards.module.css'
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/ContextGlobal";
import { addNewFlashcard } from "../Reducer/UserFlashCards";

interface PropsDeleteDeck {
  showAddNewFlashcardModal: boolean;
  setShowAddNewFlashcardModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewFlashcardModal = ({
  showAddNewFlashcardModal, setShowAddNewFlashcardModal
}: PropsDeleteDeck) => {
  const { globalData, handleUpdateFlashCardTest, SelectDeck } = useGlobalContext()
  const { idUser, currentlyDeck, decksUser, idDeck } = globalData
  // const { idUser, currentlyDeck, decksUser } = globalData
  const [currentlyValuesFlashcard, setCurrentlyValuesFlashcard] = useState<Flashcards | undefined>()
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }

  const onChangeValueFlashcard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentlyValuesFlashcard({
      ...currentlyValuesFlashcard,
      [e.target.name]: e.target.value
    })
  }
  const handleAddNewFlashcard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewFlashcard(idUser, currentlyDeck ? `${currentlyDeck?.id}` : idDeck, currentlyValuesFlashcard)
    SelectDeck(currentlyDeck, idUser, decksUser)
    setShowAddNewFlashcardModal(!showAddNewFlashcardModal)
  }
  return container
    ? createPortal(
      <div className={styles.containerModal}>
        {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
        <form onSubmit={handleAddNewFlashcard} className={styles.containerUpdate}>
          <div onClick={() => setShowAddNewFlashcardModal(!showAddNewFlashcardModal)} className={styles.closeContainer}>
            <div className={styles.close}>x</div>
          </div>
          <h3 className={styles.title}>nuevo flashcard</h3>
          <div className={styles.textareaContainer}>
            <label className={styles.textareaTitle}>pregunta</label>
            <textarea className={styles.textareaPregunta} id="pregunta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.pregunta} name="pregunta" />
          </div>
          <div className={styles.textareaContainer}>
            <label className={styles.textareaTitle}>respuesta</label>
            <textarea className={styles.textareaPregunta} id="respuesta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.respuesta} name="respuesta" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonUpdate}>agregar</button>
          </div>
        </form>
      </div>,
      container
    )
    : null;
};

export default AddNewFlashcardModal;