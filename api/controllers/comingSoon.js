const Mongoose = require('mongoose');

module.exports = {
    getContent: async (req, res, next) => {
        const pageSchema = new Mongoose.Schema({ name: String, constent: String });
        let Pages;
        if (Mongoose.models.Pages) {
            Pages = Mongoose.model('Pages');
        } else {
            Pages = Mongoose.model('Pages', pageSchema);
        }
        const docs = await Pages.find({ "name": "Coming Soon" });
        res.write(docs[0].toObject().content);
        res.end();
    }
};