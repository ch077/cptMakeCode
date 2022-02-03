function trackWater (num: number, unit: string) {
    if (unitText == "cups") {
        if (num < 8) {
            plantText.sayText("Drink more water!")
            if (num <= 1) {
                plantImage = list[0]
                plantSlot.setImage(plantImage)
            } else if (num <= 3) {
                plantImage = list[1]
                plantSlot.setImage(plantImage)
            } else if (num <= 5) {
                plantImage = list[2]
                plantSlot.setImage(plantImage)
            } else if (num <= 7) {
                plantImage = list[3]
                plantSlot.setImage(plantImage)
            }
        } else if (num >= 8) {
            plantText.sayText("You have finished your daily water intake!")
            plantImage = list[4]
            plantSlot.setImage(plantImage)
        }
    } else {
        if (num < 2) {
            plantText.sayText("Drink more water!")
            plantImage = list[num]
            plantSlot.setImage(plantImage)
        } else if (num >= 2) {
            plantText.sayText("You have finished your daily water intake!")
            plantImage = list[4]
            plantSlot.setImage(plantImage)
        }
    }
}
let plantImage: Image = null
let unitText = ""
let plantText: Sprite = null
let plantSlot: Sprite = null
let list: Image[] = []
list = [
sprites.skillmap.decoration12,
sprites.swamp.swampTile3,
sprites.skillmap.decoration13,
sprites.duck.log1,
sprites.skillmap.seasonalTree2
]
plantSlot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
plantText = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
unitText = game.askForString("Cups or Quarts? (lowercase)", 6)
let functionNum = game.askForNumber("How many cups of water did you drink today?", 1)
trackWater(functionNum, unitText)
