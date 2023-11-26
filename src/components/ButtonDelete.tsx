interface Props{
  setItem: any,
  items: any
}

function ButtonDelete({ setItem, items} : Props) {

  const handleRemove = (id: string) => () =>{
    setItem((prevItem: any) =>{ 
      return prevItem?.filter((currentItem: any) => currentItem.id != id)
    })
}

  return (
    <button onClick={handleRemove(items.id)}>
      eliminar
    </button>
  )
}
export default ButtonDelete