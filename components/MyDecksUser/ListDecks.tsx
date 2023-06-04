import React from 'react'

interface Props {
  decksUser: DecksUser[]
}
const ListDecks = ({ decksUser }: Props) => {
  return (
    <div>
      <ul className='grid gap-3 py-4'>
        {
          decksUser &&
          decksUser.map((decks) => {
            return (
              <li className='rounded-lg bg-slate-700 h-[50px] p-2 text-white font-semibold' key={decks.id}>
                <h3>
                  {decks.title}
                </h3>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListDecks