const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");
const listNum = document.getElementById("listNum");

btnPrint.onclick = function() {
  const start = Date.now()
  const num = parseInt(inpNum.value);
  let c3 = 0;
  let c5 = 0;
  for (let i = 1; i <= num; i++) {
    const li = document.createElement('li')
    let text = ''
    c3++
    c5++
    if (c3 == 3)  {
      text += 'fizz'
      c3 = 0
    }
    if (c5 == 5)  {
      text += 'buzz'
      c5 = 0
    }
    if (text === '') text = i
    
    // innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.
    // it can act as both getter and setter
    // below sets the text content of the list item
    li.innerText = text

    // add the text object to list declared in index.html
    listNum.appendChild(li)
  }

  const end = Date.now()
  console.log("time taken: " + (end - start))
}

/** Example Output */
/**
 * 1
 * 2
 * fizz
 * 4
 * buzz
 * fizz
 * 7
 * 8
 * fizz
 * buzz
 * 11
 * fizz
 * 13
 * 14
 * fizzbuzz
 */