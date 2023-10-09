input.onButtonPressed(Button.A, function () {
    start_time = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
let start_time = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.runningTime() - start_time >= 5000) {
        basic.showIcon(IconNames.Sad)
    }
})
