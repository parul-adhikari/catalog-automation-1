var pg =require("pg");

var conString = "pg://postgres:@localhost:5432/unity";
//
// var conString = "pg://qa:D3v3l0pm3nt@phppgadmin-staging.unityinfluence.com:5432/unity";
// var client = new pg.Client(conString);
//
// client.connect().then(() => {
//     client.query("SELECT first_name,last_name FROM influencer_influencer ").then(res => {
//     for(var i = 0; i < res.rows.length;i++){
//     console.log(res.rows[i]);
// }
// client.end()
// }).catch(e => {
//     client.end()
// console.error('query error', e.message, e.stack)
// })
// }).catch (e => {
//     console.error('connection error', e.message, e.stack)
// }
// );