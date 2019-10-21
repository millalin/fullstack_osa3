const mongoose = require('mongoose')

if (process.argv.length < 3) {

  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://millalin:${password}@cluster0-k26ow.mongodb.net/person_phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'Tiina Testi',
  number: '040435333',
})

person.save().then(response => {
  console.log(`${response} saved to phonebook`)
  mongoose.connection.close()
})
