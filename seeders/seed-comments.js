const db = require('../models')

// To use await, we need an async function.
async function seed() {
     // Get the place, H-Thai-ML
     let place = await db.Place.findOne({ name: 'Sushi-rest' })

     // Create a fake sample comment.
     let comment = await db.Comment.create({
          author: 'Famished Fran',
          rant: false,
          stars: 5.0,
          content: 'Wow, simply amazing! Highly recommended!'
     })

     let comment2 = await db.Comment.create({
          author: "Disgusted Dave",
          rant: true,
          stars: 1.0,
          content: 'It\s hard to say which was more terrible, the service or the food. At least the service didn\'t make me throw up the way the food did.'
     })

     // Add that comment to the place's comment array.
     place.comments.push(comment.id, comment2.id)

     //save the place now that it has comment
     await place.save()

     // Exit the program
     process.exit()
}

seed()