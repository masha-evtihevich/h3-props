const Text = ({ text, fontSize, colorText, underline }) => {
  return (
    <div
      className="text"
      style={{ fontSize: fontSize, color: colorText, textDecoration: underline ? 'underline' : 'none' }}
    >
      {text}
    </div>
  )
}

export default Text;