function insertAtCaret(text) {
  const textarea = document.querySelector('textarea')
  textarea.setRangeText(
    text,
    textarea.selectionStart,
    textarea.selectionEnd,
    'end'
  )
}

setInterval(() => insertAtCaret('Hello'), 3000)

<textarea cols="60">Stack Overflow Stack Exchange Starbucks Coffee</textarea>
//https://stackoverflow.com/questions/11076975/how-to-insert-text-into-the-textarea-at-the-current-cursor-position
