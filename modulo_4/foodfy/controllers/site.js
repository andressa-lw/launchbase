const data = require("../data.json")

exports.redirect = function(req, res) {
  return res.redirect("/site")
}

exports.index = function(req, res) {
  return res.render("site/index", { recipes: data.recipes })
}

exports.about = function(req, res) {
  const sobre = {
    titulo: "Sobre o Foodfy",
    conteudo1: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
    conteudo2: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
    subtitulo1: "Como tudo começou…",
    subtitulo2: "Nossas receitas",
  }
  return res.render("site/sobre", { sobre })
}

exports.showrecipes = function(req, res) {
  return res.render("site/receitas", { recipes: data.recipes })
}

exports.showrecipe = function(req, res) {
  const { id } = req.params
  const foundRecipe = data.recipes.find(function(recipe)  {
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const recipe = {
    ...foundRecipe
  }

  return res.render("site/receita", { recipe })
}