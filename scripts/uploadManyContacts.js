//email: DemoUser@salu.pro
//username: DemoUser
// password: salupro
conn = new Mongo();
db = conn.getDB("exampleDb");
let tags = ['UCF', 'Work', 'Meetup', 'Conference'];
let sample_user = db.people.findOne({ username : "DemoUser"});
sample_user.contacts = [];
sample_contacts.forEach(contact => {
  let user_tags = [];
  Math.random() >= 0.4 && user_tags.push(tags[Math.floor(Math.random() * tags.length)]);
  Math.random() >= 0.4 && user_tags.push(tags[Math.floor(Math.random() * tags.length)]);
  sample_user.contacts.push(Object.assign({ _id: ObjectId(), tags: user_tags }, contact));
});
db.people.save(sample_user);
