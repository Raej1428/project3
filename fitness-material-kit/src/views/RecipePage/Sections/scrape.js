import axios from "axios";
import cheerio from "cheerio";

export default function scrape() {
    console.log("\n-=#=--=#=--=#=--=#=--=#=--=#=-\n" +
        "Grabbing Healthy Recipies\n" +
        "from allrecipies.com:" +
        "\n-=#=--=#=--=#=--=#=--=#=--=#=-\n");

    axios.get("https://www.allrecipes.com/recipes/84/healthy-recipes/").then(function (response) {

        let $ = cheerio.load(response.data);

        const results = [];

        $(".fixed-recipe-card").each(function (i, element) {
            this = element;
            const title = $(this)
                .find(".fixed-recipe-card__title-link")
                .first()
                .text()
                .trim();

            const sum = $(this)
                .find(".fixed-recipe-card__description")
                .text()
                .trim();

            const link = $(this).find("a")

                .attr("href");

            results.push({
                title: title,
                summary: sum,
                link: link
            });
        });

        console.log(results);
    });
}