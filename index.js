let count = 0
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

// Create an increment function
function increment() {
    count += 1
    countEl.innerHTML = count
    // console.log(count)
}

//  Create the Save function
function save() {
    let countStr = count + " - "
    saveEL.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
    // console.log(count)
    
}