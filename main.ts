input.onButtonPressed(Button.A, function () {
    choicee = randint(0, 3)
    if (choicee == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (choicee == 1) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (choicee == 2) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
    if (choicee == 3) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    }
    if (choicee == 4) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C G G F E D C5 G ", 150)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
let choicee = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
