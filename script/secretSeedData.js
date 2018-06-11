let secretSeedOptions = new Array(100),
  secretSeedSituations = new Array(50)

secretSeedOptions.fill(0)
secretSeedOptions = secretSeedOptions.map((ele, idx) => `option${idx}`)

secretSeedSituations.fill(0)
secretSeedSituations = secretSeedSituations.map((ele, idx) => `situation${idx}`)

module.exports = { secretSeedOptions, secretSeedSituations }
