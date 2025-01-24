function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('lol').style.position = 'absolute'
document.getElementById('lol').style.scale = 1

MoveTo(document.getElementById('lol'), 500, 500, 1000, 3.5)

await sleep(1000)

MoveTo(document.getElementById('lol'), 250, 500, 1000, 3.5)

await sleep(1000)

MoveTo(document.getElementById('lol'), 250, 250, 1000, 3.5)

await sleep(1000)

MoveTo(document.getElementById('lol'), 500, 250, 1000, 3.5)

await sleep(1000)

MoveTo(document.getElementById('lol'), 375, 375, 1000, 3.5)

await sleep(1000)

MoveTo(document.getElementById('lol'), 0, 0, 1000, 3.5)