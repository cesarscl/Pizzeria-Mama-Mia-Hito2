// Muestra un mensaje de éxito o error solo cuando existe un texto que mostrar.
const Message = ({ type, text }) => {
  if (!text) return null

  return (
    <div className={`alert alert-${type === "success" ? "success" : "danger"} mt-3 mb-0`} role="alert">
      {text}
    </div>
  )
}

export default Message
