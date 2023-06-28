import { createPortal } from "react-dom";
import styles from '../styles/DeleteDeckModal.module.css'
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/ContextGlobal";
import { updateFlashCard } from "../Reducer/UserFlashCards";

interface PropsDeleteDeck {
  showModalUpdateFlashcard: boolean;
  setShowModalUpdateFlashcard: React.Dispatch<React.SetStateAction<boolean>>;
  flascardData: Flashcards | undefined
}

const UpdateFlashcardModal = ({
  showModalUpdateFlashcard, setShowModalUpdateFlashcard,flascardData
}: PropsDeleteDeck) => {
  const { globalData,handleUpdateFlashCardTest,SelectDeck } = useGlobalContext()
  const { idUser, currentlyDeck, decksUser } = globalData
  const [currentlyValuesFlashcard, setCurrentlyValuesFlashcard] = useState<Flashcards | undefined>(flascardData)
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }

  useEffect(() => {
    setCurrentlyValuesFlashcard(flascardData)
  },[])

  const onChangeValueFlashcard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentlyValuesFlashcard({
      ...currentlyValuesFlashcard,
      [e.target.name]: e.target.value
    })
  }
  const handleUpdateFlashcard = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // updateFlashCard(idUser, currentlyDeck, currentlyValuesFlashcard)
    handleUpdateFlashCardTest(idUser, currentlyDeck, currentlyValuesFlashcard)
    SelectDeck(currentlyDeck,idUser,decksUser)
    setShowModalUpdateFlashcard(!showModalUpdateFlashcard)
  }
  return container
    ? createPortal(
      <div className={styles.containerModal}>
        {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
        <form onSubmit={handleUpdateFlashcard} className={styles.containerDelete}>
          <h3 className={styles.title}>editar flashcard</h3>
          <div>
            <label>pregunta</label>
          <textarea id="pregunta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.pregunta} name="pregunta"/>
          </div>
          <div>
            <label>respuesta</label>
          <textarea id="respuesta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.respuesta} name="respuesta"/>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonDelete}>guardar</button>
          </div>
        </form>
      </div>,
      container
    )
    : null;
};

export default UpdateFlashcardModal;