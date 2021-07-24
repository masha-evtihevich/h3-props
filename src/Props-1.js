// Создать компонент Text который можно настраивать по четырем параметрам 
// - выводить с его помощью разный текст
// - изменять размер текста, задавая его целым числом
// - изменять цвет текста
// - возможность делать текст подчеркнутым - передавая true или false проп

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