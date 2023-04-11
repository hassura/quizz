 answers = ["A", "C", "B"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    var a =document.getElementById("hassu");
    a.setAttribute("value",getScore());
    if (getScore() > 2) {
        console.log("Bravo");
    }
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbx76ag2ASHanGCa6LurQyVJQG_BSPnk4e0iCwHHy8rRa_IdXL2euNY9ohDclt3xSl8/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
