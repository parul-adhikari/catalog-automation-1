let pg = require('pg');
let rows;
exports.pgAdmin = {

    ConnectDatabase : function () {
        // ConnectDatabase = function () {
        this.connectionString = {
            user: 'postgres',
            host: 'staging-catalog.czjhp5bklmv4.us-west-1.rds.amazonaws.com',
            database: 'stag_catalog',
            password: 'D3v3l0pm3nt',
            port: 5432,
        };
    },

    ExecuteQuery : function (queryToExecute, successCallBack) {
        let connectDatabase = new this.ConnectDatabase()
        let pgClient = new pg.Pool(connectDatabase.connectionString);

        pgClient.connect(function (err, client) {

            const query = client.query(new pg.Query(queryToExecute));
            query.on('row', row => successCallBack(row));

                // return Object.keys(row).forEach(function (keyItem) {
                //
                //     global.rows = row[keyItem];
                //     console.log(rows)
                // })
                // console.log(JSON.stringify(row));
            // });
            query.on('end', (res) => {
                console.log("ending");
                pgClient.end()
            })
            query.on('error', (res) => {
                console.log(res);
            })
        });

    }
};
