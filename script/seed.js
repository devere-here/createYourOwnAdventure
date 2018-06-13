'use strict'

let { secretSeedOptions, secretSeedSituations } = require('./secretSeedData')

const db = require('../server/db'),
  {User, Option, Situation} = require('../server/db/models')

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
  "raise"],

  nouns = ["cap",
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
  "feeling"],

  adverbs = [
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
"seemingly"],

  situations = [
  `You're alone at night in a field. Suddenly you see a dark shadow in the distance`,

  `The shadow has gotten bigger. Whatever it is, it seems to be coming straight towards you`,
  `The shadow seems to be going away from you. You must have scared it off`,
  `The shadow seems pleased. It brought its friends. There are now 3 shadows in the distance`,
  `The shadow is confused? You can hear it say 'What!?'`,



  `The shadow stops dead in it's tracks.`,
  `The shadow is gaining speed. You can now visibly see teeth and claws`,
  `The shadow suddenly vanishes. Where did it go? Was it even real?`,
  `The shadow suddenly jumps 100 feet into the air`,

  `Damn. You really shouldn't have done that. The shadows back and is now 3 times it's original size.`,
  `The shadow tripped over a rock. What a dumb shadow.`,
  `The shadow stops and mimics what you just did`,
  `The shadow is coming back with two sets of gloves. It appears it wants to shadow box`,

  `All 3 shadows are now running directly at you`,
  `The shadows are all laughing at you. It's high school all over again.`,
  `The shadows scream 'Is there a post office near by?'`,
  `The shadows have begun to make a loud high pitch ringing sound`,

  `The shadow now says 'Oh, now I get it.`,
  `The shadow is angered by what it can't possibly hope to understand. It charges at you!`,
  `The shadow finds you to be unpleasant. It approaches you with an unapproving look that reminds you of your father`,
  `The shadow is still confused. It hurt itself in it's confusion`,



  `The shadow is dead. It slowly dissipates away. Your quick thinking has just saved your life!`,
  `The shadow seems to have tripped over a rock and has now died of embarrassment`,
  `The shadow started to run again and killed you`,
  `The shadow lunged at you and stole your shoes because you had those new Sketchers.`,

  `The shadow eats you`,
  `Oh. The shadow was really a cat. It's sooooo cute!`,
  `The shadow realizes that you are the local dentist and is now embarrased because you had clearly seen that the shadow does not floss`,
  `Oh. The shadow was really a cat. The cat eats you.`,

  `Lol. Of course the shadow wasn't real. Shadows are just an urban myth`,
  `The shadow was definitly real. It came back and it ate you`,
  `The shadow is behind you!!!!!!!!! Too late. It tied your Sketchers' shoelaces together`,
  `The shadow was going to eat you, but just remembered that today was it's wedding anniverary. It quickly left to go find a gift`,

  `The shadow lands on top of you and crushes you`,
  `The shadow lands on top of you and you're fine. Shadows don't weigh anything`,
  `The shadow continually keeps going higher and higher until it is finally gone`,
  `The shadow was actually Tony Hawk. That was such a wicked skateboarding move`,



  `Why on earth did you do that!?!?! The shadow eats you`,
  `The shadow eats your car, but it's ok because you live in an area with a reliable public transportation system.`,
  `The shadow is really famous sumo wrestler Asashōryū Akinori. He slaps you in the face`,
  `The shadow eats your legs.`,

  `Embarrased. The shadow eats you to get rid of all witnesses`,
  `The shadow asks you to come over and you two continually kick the rock for the rest of the night.`,
  `The shadow starts to cry and you feel bad (but not too bad)`,
  `The shadow gets up lunges at you again and trips over a different rock`,

  `Ew, the shadow didn't copy you when you did that`,
  `Lol the shadow copied you again. I can't believe the shadow did that. What a weirdo`,
  `The shadow is done playing around and it eats you`,
  `For some reason the shadow couldn't copy what you just did. Well I guess we all can't be as gifted as you are`,

  `You don't box. Violence is never the answer`,
  `The shadow beats you up and then eats you`,
  `The shadow floats like a butterfly and stings like a bee, but similiar to bees the shadow dies after it stings you`,
  `The shadow's form is terrible. You take it out by K.O. in the 5th round`,



  `They all eat you`,
  `They argue over who's going to eat you. As they argue you are able to slip away`,
  `The shadows start singing and they want you to sing as well. They need one more person to enter the big barber shop quartet competition`,
  `Oh. You need glasses. It was actually one shadow this entire time. The shadow eats you`,

  `The shadows now give you a wedgie`,
  `The shadows stop laughing. It's not funny to them anymore. It's just sad`,
  `The laughter dies down and the shadows eat you`,
  `The shadows have died of laughter`,

  `The shadow is uncomfortable. Decides to just look for the post office by itself`,
  `The shadow is confused. But realizes that kids these days probably don't even know what a post office is. The shadow gives up`,
  `Your actions is all the shadow needed to see. A lightbulb went off in its head and it knew where the post office was`,
  `The shadow realizes that it doesn't have enough stamps to ship it's package. It kills you on the off chance you might have been carrying some stamps`,

  `It is a dog whistle. Turns out you are really a lost dog and the shadows are your family searching for you. You reunite and go home`,
  `It was your alarm clock. You wake up in your bunk at ADX Florence a super maximum security prison in Fremont County Colorado`,
  `The shadows were all playing the recorder. They are all really bad at it, but you support them anyway`,
  `Why on earth did you do that!?!?!? The shadows eat you`,



  `The shadow celebrates its new found understanding by eating you`,
  `The shadow is confused again. It is angered by what it can't possibly hope to understand. It eats you!`,
  `The shadow now has more questions, but realizes that some questions are better left unanswered`,
  `The shadow knows that what you just did was the next logical move. It nods in approval`,

  `What you just did made perfect sense. The shadow now understands everything and thanks you for helping enlighten it`,
  `That made the shadow even angrier. It eats you`,
  `That made the shadow even angrier. It's blinded by its rage. It can't see you so you escape`,
  `The shadow realizes that you are just being you. Being angry at you for what you did would be equivalent to being angry at a bird for flying or a fish for swimming. It realizes that its anger is pointless because you will never change.`,

  `It is your father. He isn't mad. He's just dissapointed`,
  `The shadow approves of what you did and accepts you for who are. You begin to cry.`,
  `The shadow's disapproval has turned into rage. It scolds you for 5 minutes and then eats you`,
  `It is both your father and mother. All their hopes for your future have suddenly disappeared`,

  `The shadow is no longer confused. It eats you`,
  `The shadow is now more confused than anyone could possibly imagine. It screams 'WHY!!!' continually until the sun comes up`,
  `What you just did made perfect sense to the shadow now. The shadow feels silly for not understanding what you were doing before`,
  `The shadow is even more confused. It cries because it realizes it lives in a world that it can't possibly understand`
]

// const images = [
//   'https://img00.deviantart.net/3d99/i/2010/133/2/4/dark_field_by_dreamca7cher.png',

//   'https://images.techhive.com/images/article/2016/10/scary-mac-limbo3-100689862-orig.jpg',
//   'https://ak6.picdn.net/shutterstock/videos/12149396/thumb/1.jpg',
//   'https://c1.staticflickr.com/5/4048/4692663232_d8a32c62fe_b.jpg',
//   'https://imgix.bustle.com/rehost/2016/9/13/809bfbc3-bc7a-41b7-b68c-fa126a8896c1.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',

//   'https://imgix.bustle.com/rehost/2016/9/13/809bfbc3-bc7a-41b7-b68c-fa126a8896c1.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
//   'https://imgix.bustle.com/rehost/2016/9/13/809bfbc3-bc7a-41b7-b68c-fa126a8896c1.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70',
//   'https://img00.deviantart.net/49f9/i/2012/114/1/1/dark_field_by_fuguestock-d4xekbx.jpg',
//   'http://s3.amazonaws.com/everystockphoto/fspid31/23/54/25/9/dailyshoot-leaf-shadow-2354259-o.jpg',


//   'https://images.techhive.com/images/article/2016/10/scary-mac-limbo3-100689862-orig.jpg',


// ]

function CreateSituation(situation, secret) {
  this.situation = situation
  this.secret = secret
}

function CreateOption(adverb, verb, noun, secret) {
  this.option = `${adverb} ${verb} ${noun}`
  this.secret = secret
}


let situationArray,
  optionArray = []

situationArray = situations.map(situation => new CreateSituation(situation, false))
secretSeedSituations = secretSeedSituations.map(secretSituation => new CreateSituation(secretSituation, true))

situationArray = situationArray.concat(secretSeedSituations)



for (let i = 0; i < 150; i++){
  let adverbIndex = Math.floor(Math.random() * 40),
    verbIndex = Math.floor(Math.random() * 40),
    nounIndex = Math.floor(Math.random() * 40)

  optionArray.push(new CreateOption(adverbs[adverbIndex], verbs[verbIndex], nouns[nounIndex], false))
}

secretSeedOptions = secretSeedOptions.map(secretOption => new CreateOption(secretOption, secretOption, secretOption, true))

optionArray = optionArray.concat(secretSeedOptions)


/**
 *
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

  await Promise.all(situationArray.map(situation => Situation.create(situation)))

  await Promise.all(optionArray.map(option => Option.create(option)))

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

  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
