var pg = require('pg')
require('pg-promise')


    var connectionString = "pg://postgres:@1234@localhost:5432/unity"

    var  pgClient = new pg.Client(connectionString);
    pgClient.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        console.log('CONNECT PASSED');
        pgClient.query('SELECT first_name from influencer_influencer', function (err, result)
        {
            if (err) {
                return console.error('error running query', err);
            }
            console.log('QUERY PASSED')
            console.log(result.rows[0]);
            //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
            pgClient.end();
        })
    })

