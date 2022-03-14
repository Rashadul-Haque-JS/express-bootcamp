function randomize(texts) {
    const randomIndex = Math.floor(Math.random() * texts.length)
    console.log(texts[randomIndex])
    return texts[randomIndex]
}
module.exports = { randomize }