import { useEffect, useReducer, useState } from "react"


const useSelectColors = (id: string) => {
  const [newValuesColors, setNewValuesColors] = useState<UseSelectColor[]>()
  // const [state, dispatch] = useReducer(first, second, third)
  const INITIAL_VALUE_COLOR:UseSelectColor[] = [
    {
      color: '1',
      active: true
    },
    {
      color: '2',
      active: false
    },
    {
      color: '3',
      active: false
    },
    {
      color: '4',
      active: false
    },
    {
      color: '5',
      active: false
    },
    {
      color: '6',
      active: false
    },
  ]

  useEffect(() => {
    // INITIAL_VALUE_COLOR.map(item => {
    //   item.active = false
    // })
    const rta = INITIAL_VALUE_COLOR.map(item => {
      item.active = false
      if (item.color === id) {
        item.active = true
      }
      return item
    })
    setNewValuesColors(rta)
  }, [id])

  return {newValuesColors} 
}

export {useSelectColors}