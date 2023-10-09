input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
    mode = 1
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    mode = 0
})
let start_time = 0
let mode = 0
mode = 0
basic.forever(function () {
    if (mode == 1) {
        if (input.runningTime() - start_time >= 5000) {
            mode = 2
        }
    } else if (mode == 2) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    }
})
