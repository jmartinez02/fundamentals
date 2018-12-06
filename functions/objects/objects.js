var netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"},
            { episode: 6, episodeName: "Secret Shopper"},
            { episode: 7, episodeName: "Color Wars"},
            { episode: 8, episodeName: "Wedding Day Sale"},
            { episode: 9, episodeName: "All-Nighter"},
            { episode: 10, episodeName: "Demotion"},
            { episode: 11, episodeName: "Labor"}
          ]
        }
      },
      season2: {},
      season3: {}
    };

    console.log("All data:", netflix)
    console.log("Just season info: ", netflix.season1.seasonInfo)
    console.log("Episode Number", netflix.season1.seasonInfo.episodeInfo[2])

/*
Challenge:
pick an episode to show
using dot nothing, walk through the netlfix object and print off both the episode and the episode name
*/
console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName)




let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

 // console.log(Object.keys(spaceJam.toonSquad))
  console.log(Object.values(spaceJam.nbaPlayers.newYorkNicks))



  let garden = {
      vegatable: 'zucchini',
      flower: 'sun flower',
      fruit: 'grape',
      water: true,
      sun: true,
      size: 10
  };

  console.log(garden.vegatable)
  x = garden.vegatable