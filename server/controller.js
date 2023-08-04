module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ["A hunch is creativity trying to tell you something.", "A friend asks only for your time not your money.", "Allow compassion to guide your decisions.", "Believe in yourself and others will too.", "Do not let ambitions overshadow small success."]

        let randomNum = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomNum];

        res.status(200).send(randomFortunes)
    }

}