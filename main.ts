function part5 () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    part1()
    Part2()
    part1()
    Part3()
    par4()
    part5()
    par4()
    part6()
})
function part6 () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Double))
}
function par4 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function Part2 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.B, function () {
    part6()
})
function Part3 () {
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function part1 () {
    music.setVolume(152)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
