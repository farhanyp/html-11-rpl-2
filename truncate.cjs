const fs = require('fs');
const pg = require('pg');
const env = fs.readFileSync('.env', 'utf8');
const match = env.match(/DATABASE_URL="(.+)"/);
if (!match) throw new Error("No database url");
const url = match[1];
const client = new pg.Client({ connectionString: url });
async function run() {
  await client.connect();
  await client.query('TRUNCATE TABLE question_options, questions, quiz_attempts, quiz CASCADE');
  await client.end();
}
run().then(()=>console.log('Done')).catch(console.error);
