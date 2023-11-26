import { FormEvent, useState } from 'react'
import FormStyle from "../style/Form.module.css"
import ButtonDelete from './ButtonDelete';



interface Item{
  id: string,
  text: string 
}


function Searcher() {
  const [item, setItem] = useState<Item[]>();

  const handleSubmit = (Event: FormEvent<HTMLFormElement>) =>{
    Event.preventDefault()

    const {elements} = Event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement

    if(!isInput || isInput===null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value
    }

    setItem((prevItems) => [...(prevItems ?? []), newItem]);
    
    input.value = ''
  }

  return (
    <>
      <aside>
        <form onSubmit={handleSubmit}>
          <input className={FormStyle.input} type="text" required name='item' placeholder='tarea nueva...'/>
        </form>
      </aside>
      <section>
        
          {
            item?.length == undefined || item.length == 0 ? (<p>no hay tareas pendientes...</p>) : 
            (item?.map(items => (
            <ul  key={items.id}>
              <li className={FormStyle.li}>
                {items.text}
                <ButtonDelete items={items} setItem={setItem}/>
              </li>
            </ul>
            )))
          }
      </section>
    </>
  )
}

export default Searcher