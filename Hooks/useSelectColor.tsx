import { useEffect, useState } from "react"


const useSelectColors = (id: string) => {
  const [newValuesColors, setNewValuesColors] = useState<UseSelectColor[]>()
  const INITIAL_VALUE_COLOR:UseSelectColor[] = [
    {
      color: '1',
      active: false
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
    const rta = INITIAL_VALUE_COLOR.map(item => {
      if (item.color === id) {
        item.active = true
      }
      return item
    })
    setNewValuesColors(rta)
  }, [])

  return { newValuesColors }
}

export {useSelectColors}