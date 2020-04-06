const myContacts = [
    {
        id: 1,
        name: 'Alpha Avalon',
        phone : '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags:['popular','cool']
    },{ 
        id : 2,
        name: 'Betty Brave',
        phone : '+62 812 242424',
        email : 'betty@braverian.com'
    }, 
    {
        id : 3, 
        name: 'Gamma Gacurio',
        phone : '+63 813 363636',
        email: ' gamma@gacurio.dev'
    }
]

// create contact console with method add contact, filter contact and delete contact

/// Add contact 
myContacts.push({id : 4, name: 'Agnes Jocelyn', phone : '+63 122 111111', email : 'Agnesjocelyn@gmail.com'}, 
                {id : 5, name : 'Alvi Geovanny', phone : '+62 444 222222', email : 'AlviGeo@gmail.com'}, 
                {id : 6, name : 'Vincent', phone : '+62 655 999999', email : 'Vincent@gmail.com'})
console.log(myContacts);

/// filter contact 
// const newContact = myContsacts.filter(item => item.id > 2)
// console.log(newContact);
// console.log(newContact.length);

/// delete contact 
myContacts.pop()
console.log(myContacts);

