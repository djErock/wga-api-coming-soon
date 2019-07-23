
let DBinstances = {};

module.exports = {
    getConnection: (dbName) => DBinstances[dbName],
    storeConnection: async (conn, dbName) => {
        if (DBinstances.hasOwnProperty(dbName)) {
            return DBinstances[dbName];
        }
        DBinstances[dbName] = conn;
    },
};
