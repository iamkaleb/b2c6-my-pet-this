const pet = {
    name: "charlie",
    species: "dog",
    nicknames: ["boy", "good boy", "josh"],
    age: 13,
    favoriteToys: [],
    play: function (toy) {
      if (toy.includes("rubber")) {
        this.favoriteToys.push(toy);  
      }
    }
}

pet.play("rubber ball");

console.log(pet);