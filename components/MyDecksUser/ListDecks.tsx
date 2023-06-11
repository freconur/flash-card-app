import { useGlobalContext } from '../../context/ContextGlobal'
import { RiMore2Fill } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import { COLOR_TO_DECK } from '../../utils/colorToDeck';
interface Props {
  decksUser: DecksUser[],
  idUser: string
}
const ListDecks = ({ decksUser, idUser }: Props) => {
  const context = useGlobalContext()
  const { SelectDeck } = context
  //usare el localstorage para pasarle estos valores a la pagina de flashcards y actualizarlo acada vez que algun valor en local storage cambie
  
  return (
    <div className=''>
      <ul className='grid gap-3 py-4'>
        {
          decksUser &&
          decksUser.map((decks, index) => {
            return (
              <div id={`${index}`}
                onClick={() => SelectDeck(`${decks?.id}`, idUser, decksUser)}
                className={`${decks?.colorDeck && COLOR_TO_DECK[Number(decks?.colorDeck)]} ${decks?.focus ? "p-[1.5px] pl-2" : "pl-2"} cursor-pointer rounded-md`}
                key={decks.id}>
                <div className={`p-2 pl-5 rounded-r-md overflow-hidden w-full h-full bg-slate-800  ${decks?.focus ? "" : "border-gray-400 border-t-[0.1px] border-r-[0.1px] border-b-[0.1px]"}`}>
                  <div className='flex justify-between'>
                    <h3 className='capitalize font-semibold text-lg'>
                      {decks.title}
                    </h3>
                    <RiMore2Fill className='text-xl mt-1 font-bold' />
                  </div>
                  <div className='my-2'>
                    <span className='text-gray-200 text-sm capitalize'>{decks.countCards} tarjetas</span>
                  </div>
                  <div className='hover:border-gray-400 border-[0.1px] w-full border-gray-500 rounded-md p-1 flex justify-center capitalize font-semibold text-sm items-center gap-2'>
                    <RxPlus className='font-light text-lg text-slate-50' />
                    <span className='text-slate-50'>agregar tarjetas</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListDecks