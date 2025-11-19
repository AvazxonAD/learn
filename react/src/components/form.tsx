import { useRef, type FormEvent } from "react"

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      alert(inputRef.current.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firname" ref={inputRef} />
      <button>submit</button>
    </form>
  )
}

export default Form