import { createPortal } from "react-dom";
import styles from '../styles/UpdateFLashCards.module.css'
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/ContextGlobal";
import { updateFlashCard } from "../Reducer/UserFlashCards";

interface PropsDeleteDeck {
  showModalUpdateFlashcard: boolean;
  setShowModalUpdateFlashcard: React.Dispatch<React.SetStateAction<boolean>>;
  flascardData: Flashcards | undefined;
  forceUpdate?:React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateFlashcardModal = ({
  showModalUpdateFlashcard, setShowModalUpdateFlashcard, flascardData,forceUpdate
}: PropsDeleteDeck) => {
  const { globalData, handleUpdateFlashCardTest, SelectDeck } = useGlobalContext()
  const { idUser, currentlyDeck, decksUser,idDeck } = globalData
  const [currentlyValuesFlashcard, setCurrentlyValuesFlashcard] = useState<Flashcards | undefined>(flascardData)
  let container;
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }

  useEffect(() => {
    setCurrentlyValuesFlashcard(flascardData)
  }, [])

  const onChangeValueFlashcard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentlyValuesFlashcard({
      ...currentlyValuesFlashcard,
      [e.target.name]: e.target.value
    })
  }
  const handleUpdateFlashcard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(idUser && idDeck) {
    handleUpdateFlashCardTest(idUser, idDeck, currentlyValuesFlashcard)
    setShowModalUpdateFlashcard(!showModalUpdateFlashcard)
    }else {
      handleUpdateFlashCardTest(idUser, currentlyDeck, currentlyValuesFlashcard)
      SelectDeck(currentlyDeck, idUser, decksUser)
      setShowModalUpdateFlashcard(!showModalUpdateFlashcard)
    }
  }
  console.log('idDeck',idDeck)
  console.log('idUser',idUser)
  console.log('flascardData',flascardData)
  return container
    ? createPortal(
      <div className={styles.containerModal}>
        {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
        <form onSubmit={handleUpdateFlashcard} className={styles.containerUpdate}>
          <div onClick={()=>setShowModalUpdateFlashcard(!showModalUpdateFlashcard)} className={styles.closeContainer}>
            {/* x */}
            <p className={styles.close}>x</p>
          </div>
          <h3 className={styles.title}>editar flashcard</h3>
          <div className={styles.textareaContainer}>
            <label className={styles.textareaTitle}>pregunta</label>
            <textarea className={styles.textareaPregunta} id="pregunta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.pregunta} name="pregunta" />
          </div>
          <div className={styles.textareaContainer}>
            <label className={styles.textareaTitle}>respuesta</label>
            <textarea className={styles.textareaPregunta} id="respuesta-text-area" onChange={onChangeValueFlashcard} value={currentlyValuesFlashcard?.respuesta} name="respuesta" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonUpdate}>guardar</button>
          </div>
        </form>
      </div>,
      container
    )
    : null;
};

export default UpdateFlashcardModal;