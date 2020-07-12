import scrape from "./scrape";
import firestoreDB from "../../BlogPage/firebase-redux/firestore";

export default function fetchList(req, res) {

    return scrape()
        .then(function (res) {
            // then insert articles into the db
            firestoreDB.collection("Recipes").add(res)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    reset("blogForm");
                }).catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        })
        .then(function (res) {
            if (res.length === 0) {
                res.json({
                    message: "No new articles today. Check back tomorrow!"
                });
            }
            else {
                // Otherwise send back a count of how many new recipes we got
                res.json({
                    message: "Added " + res.length + " new recipes!"
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

