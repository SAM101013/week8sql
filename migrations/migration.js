// "use strict";

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn("Books", "AuthorId", {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: "Authors",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "SET NULL",
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn("Books", "AuthorId");
//   },
// };
