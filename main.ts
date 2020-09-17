input.onButtonPressed(Button.A, function () {
    basic.showString("" + (altura))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area triangulo =")
    Area_triángulo_ = base * altura / 2
    basic.showString("" + (Area_triángulo_))
})
let Area_triángulo_ = 0
let altura = 0
let base = 0
basic.showString("Angela")
basic.showString("A01286127")
base = 10
altura = randint(1, 100)
basic.forever(function () {
	
})
