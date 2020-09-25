input.onButtonPressed(Button.A, function () {
    radio.sendString("Yo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Dude")
})
radio.setGroup(1)
