//email: DemoUser@salu.pro
//username: DemoUser
// password: salupro
const contacts = require("MOCK_DATA.json");
conn = new Mongo();
db = conn.getDB("exampleDb");
db.people.findOne({ username : "DemoUser"}, (err, user) => {
        if (err || !user) {
            print('An error has occured');
        } else {
            contacts.forEach(contact => user.contacts.unshift(contacts));
            user.save();
        }
    })
});
