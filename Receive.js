radio.onReceivedString(function (receivedString) {
    if (receivedString == "02") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            . # # # #
            # . # . #
            # . # # #
            # . # . .
            . # # # #
            `)
    }
    if (receivedString == "01") {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
    if (receivedString == "00") {
        pins.servoWritePin(AnalogPin.P1, 55)
        basic.showLeds(`
            . # . . #
            # . # # #
            # . # . #
            # . # . #
            . # . # #
            `)
    }
    if (receivedString == "1") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (receivedString == "2") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (receivedString == "3") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (receivedString == "4") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
})
radio.setGroup(1)
pins.servoSetPulse(AnalogPin.P1, 1500)
pins.servoWritePin(AnalogPin.P1, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
