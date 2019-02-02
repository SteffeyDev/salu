//email: DemoUser@salu.pro
//username: DemoUser
// password: salupro
conn = new Mongo();
db = conn.getDB("exampleDb");
let sample_user = db.people.findOne({ username : "DemoUser"});
sample_contacts.forEach(contact => sample_user.contacts.push(contact));
db.people.save(sample_user);
