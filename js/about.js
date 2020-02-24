function replaceText() {
  const header = document.querySelector("h1");
  const aboutText = document.querySelectorAll("p");

  let newHeader = header.innerText;
  newHeader = newHeader.replace(/The /g, "Replaced ");
  header.innerText = newHeader;

  for (let i = 0; i < 2; i++) {
    let newText = aboutText[i].innerText;
    newText = newText
      .replace(/the /g, "replaced ")
      .replace(/The /g, "Replaced ");
    aboutText[i].innerText = newText;
  }
}
setTimeout(replaceText, 4000);
