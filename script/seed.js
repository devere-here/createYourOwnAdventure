'use strict'

const db = require('../server/db')
const {User, AdventureNode} = require('../server/db/models')

const verbs = ['attach',
  "embarrass",
  "terrify",
  "relax",
  "drag",
  "place",
  "knit",
  "watch",
  "squeeze",
  "escape",
  "suggest",
  "trouble",
  "rot",
  "melt",
  "excuse",
  "explode",
  "tumble",
  "introduce",
  "suffer",
  "thaw",
  "drop",
  "desert",
  "worry",
  "fax",
  "soak",
  "challenge",
  "charge",
  "borrow",
  "guide",
  "compare",
  "scold",
  "defend",
  "nod",
  "tease",
  "open",
  "discover",
  "attack",
  "burn",
  "admire",
  "raise"]

const nouns = ["cap",
  "hole",
  "poison",
  "mailbox",
  "pin",
  "sort",
  "trains",
  "surprise",
  "pail",
  "teaching",
  "soda",
  "chicken",
  "bottle",
  "cattle",
  "soap",
  "rice",
  "uncle",
  "stomach",
  "canvas",
  "smell",
  "hobbies",
  "belief",
  "meeting",
  "event",
  "street",
  "size",
  "cent",
  "amount",
  "motion",
  "wrist",
  "metal",
  "airplane",
  "example",
  "badge",
  "trouble",
  "stew",
  "cow",
  "skate",
  "money",
  "feeling"]

const adverbs = [
  "throughly",
"twice",
"virtually",
"truthfully",
"basically",
"jubilantly",
"shrilly",
"loudly",
"deeply",
"regularly",
"bleakly",
"already",
"suspiciously",
"easily",
"wonderfully",
"tediously",
"rudely",
'coyly',
"mindlessly",
"eagerly",
"silently",
"greedily",
"majestically",
"finally",
"restfully",
"acidly",
"devotedly",
"daintily",
"frenetically",
"eternally",
'firmly',
"upright",
"significantly",
"solemnly",
"verbally",
"gracefully",
"sloppily",
"joyously",
"weakly",
"seemingly"
]

const situations = [
  `You're alone at night in a field. Suddenly you see a dark shadow in the distance`,

  `The shadow has gotten bigger. Whatever it is, it seems to be coming straight towards you`,
  `The shadow seems to be going away from you. You must have scared it off`
  `The shadow seems pleased. It brought its friends. There are now 3 shadows in the distance`,
  `The shadow is confused? You can hear it say 'What!?'`,

  `The shadow stops dead in it's tracks.`,
  `The shadow is gaining speed. You can now visibly see teeth and claws`,
  `The shadow suddenly vanishes. Where did it go? Was it even real?`,
  `The shadow suddenly jumps 100 feet into the air`,

  `Damn. You really shouldn't have done that. The shadows back and is now 3 times it's original size.`,
  `The shadow tripped over a rock. What a dumb shadow.`,
  `The shadow stops and suddenly seems to be a light purple color`,
  `The shadow is gone. You look down and realize the shadow forgot its driver's license. You can tell it belongs to the shadow because the name on the license is 'Spooky Cloud'. You scream out the shadow's name`,

  `All 3 shadows are now running directly at you`,
  `The shadows are all laughing at you. It's high school all over again.`,
  `The shadows scream 'Is there a post office near by?'`,
  `The shadows have begun to make a loud high pitch ringing sound`,

  `The shadow now says 'Oh, now I get it.`,
  `The shadow is angered by what it can't possibly hope to understand. It charges at you!`,
  `The shadow finds you to be unpleasant. It approaches you with an unapproving look that reminds you of your father'`,
  `The shadow is still confused. It hurt itself in it's confusion`,






]

function CreateAdventureNode(situation, image) {
  this.situation = situation
  this.image = image
}

function CreateOption(adverb, verb, noun) {
  this.phrase = `${adverb} ${verb} ${noun}`
}


let adventureNodeArray = []

for (let i = 0; i < 341; i++){
  adventureNodeArray.push(new CreateAdventureNode(i))
}



/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const adventureNodes = await Promise.all([
    AdventureNode.create({situation: 'a situation', optionA: 'a', optionB: 'b', optionC: 'c', optionD: 'd'})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .then(() => {
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')

    })
    .catch(err => {
      console.log('in the console error')
      console.error(err)
      process.exitCode = 1
    })
    // .finally(() => {
    //   // `finally` is like then + catch. It runs no matter what.

    // })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
