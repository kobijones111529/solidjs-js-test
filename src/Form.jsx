import { createEffect, createSignal } from "solid-js"

const Form = () => {
  let firstNameInput
  const [firstName, setFirstName] = createSignal('')
  const [lastName, setLastName] = createSignal('')
  const [id, setID] = createSignal('')

  const beforeInput = mask => e => {
    if (e.data === null) return

    if (!mask(e.data)) e.preventDefault()
  }
  const idMask = id => /^[0-9]*$/.test(id)

  return (
    <form>
      <input ref={firstNameInput} type="text" value={firstName()} onInput={e => {
        setFirstName(e.target.value)
      }} onBeforeInput={beforeInput} autofocus />
      <input type="text" value={lastName()} onInput={e => setLastName(e.target.value)} />
      <input type="text" inputmode="numeric" value={id()} onInput={e => setID(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
