function randomize(texts) {
    const randomIndex = Math.floor(Math.random() * texts.length)
    console.log(texts[randomIndex])
    const object = texts[randomIndex]
    return object.insult
}


function createObject(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let object = {}
        object.id = i + 1
        object.insult = arr1[i]
        arr2.push(object)
    }
}



module.exports = { randomize, createObject }