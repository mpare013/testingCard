const textarea = document.getElementById("notepad");
const statusBar = document.querySelector(".status-bar span");

textarea.addEventListener("keyup", updateCursor);
textarea.addEventListener("click", updateCursor);

function updateCursor() {
  const text = textarea.value.substr(0, textarea.selectionStart);
  const lines = text.split("\n");
  const line = lines.length;
  const col = lines[lines.length - 1].length + 1;
  statusBar.textContent = `Ln ${line}, Col ${col}`;
}

function saveNote() {
  const blob = new Blob([textarea.value], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "note.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}

