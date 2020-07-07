var cheerio = require("cheerio");
var axios = require("axios");

console.log("\n-=#=--=#=--=#=--=#=--=#=--=#=-\n" +
    "Grabbing Healthy Recipies\n" +
    "from allrecipies.com:" +
    "\n-=#=--=#=--=#=--=#=--=#=--=#=-\n");

axios.get("https://www.allrecipes.com/recipes/84/healthy-recipes/").then(function (response) {

    var $ = cheerio.load(response.data);

    var results = [];

    $(".fixed-recipe-card").each(function (i, element) {

        var title = $(this)
            .find(".fixed-recipe-card__title-link")
            .first()
            .text()
            .trim();

        var sum = $(this)
            .find(".fixed-recipe-card__description")
            .text()
            .trim();

        var link = $(this).find("a")

            .attr("href");

        results.push({
            title: title,
            summary: sum,
            link: link
        });
    });

    console.log(results);
});