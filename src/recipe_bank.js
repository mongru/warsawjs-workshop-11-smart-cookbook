const recipes = [
  {
    name: "Baleron w kartoflach pod keczupem",
    description: "Można podawać z kabanosem",
    ingredients: ["baleron", "kartofle", "keczup", "kabanos"],
    image: "http://via.placeholder.com/150x150/"
  },
	{
    name: "Chleb z masłem",
    description: "Prosty przepis na przysmak - chleb z masłem. Weż składniki i połącz",
    ingredients: ["chleb", "masło", "nóż", "kuchnia", "ręce", "chęci"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
    name: "Jajko na twardo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ingredients: ["jajko", "woda", "garnek"],
    image: "http://via.placeholder.com/150x150/"
	},
  {
    name: "Pasztet",
    description: "Idealny do chleba z masłem",
    ingredients: ["mięso" , "cebula" , "sórowe jajko" , "sól" , "pieprz"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
    name: "Burger",
    description: "Burger z soczystą wolowina",
    ingredients: ["Bułka", "wołowina", "ogórek", "pomidor"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
    name: "Basic Muffin",
    description: "Preheat the oven to 375°F. Butter muffin pans. Mix the flour, baking powder, salt, and sugar in a large bowl. Add the egg, milk, and butter, stirring only enough to dampen the flour; the batter should not be smooth. Spoon into the muffin pans, filling each cup about two-thirds full. Bake for about 20 to 25 minutes each.",
    ingredients: ["sugar", "flour", "butter"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
    name: "Chleb smarowany nożem",
    description: "Weż chleb i nóż, a potem zacznij smarować",
    ingredients: ["Nóż", "chleb", "powietrze"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
    name: "Kurżak",
    description: "Kurżak z Radomia",
    ingredients: ["Bułka", "kurżak", "ogórek", "pomidor"],
    image: "http://via.placeholder.com/150x150/"
  },
  {
  	name: "Szarlotka",
    description: "Zwyczajna szarlotka",
    ingredients: ["mąka", "mleko", "masło", "jabłka"],
    image: "http://via.placeholder.com/150x150/"
  }
]

export default function RecipeService() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(recipes), 1500)
    })
}
