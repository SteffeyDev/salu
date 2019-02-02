//email: DemoUser@salu.pro
//username: DemoUser
// password: salupro
conn = new Mongo();
db = conn.getDB("exampleDb");
let tags = ['UCF', 'Work', 'Meetup', 'Conference'];
let sample_user = db.people.findOne({ username : "DemoUser"});
sample_user.contacts.forEach(c => c.remove());
sample_contacts.forEach(contact => {
  let tag = Math.random() >= 0.4 ? tags[Math.floor(Math.random() * tags.length)] : null;
  sample_user.contacts.push(Object.assign({ _id: ObjectId() }, contact));
});
db.people.save(sample_user);
