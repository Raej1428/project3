
var db = require("../../server/db/index.js");
var scrape = require("./scrape");

module.exports = {
    scrapeRecipes: function (req, res) {

        return scrape()
            .then(function (results) {
                // then insert articles into the db
                return db.fituserdb.create(results);
            })
            .then(function (fituserdb) {
                if (fituserdb.length === 0) {
                    res.json({
                        message: "No new articles today. Check back tomorrow!"
                    });
                }
                else {
                    // Otherwise send back a count of how many new recipes we got
                    res.json({
                        message: "Added " + fituserdb.length + " new recipes!"
                    });
                }
            })
            .catch(function (err) {
                // This query won't insert recipes with duplicate headlines, but it will error after inserting the others
                res.json({
                    message: "Scrape complete!!"
                });
            });
    }
};
