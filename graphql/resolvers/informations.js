const { AuthenticationError, UserInputError } = require("apollo-server");
const Information = require("../../models/Information");

module.exports = {
  Query: {
    async getInformations() {
      try {
        const informations = await Information.find();
        return informations;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
