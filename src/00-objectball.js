function gameObject() {
    let teamObjects = {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    }
    return teamObjects;
  }

  function numPointsScored(playerName) {
    // create convenient aliases
    let game = gameObject();
    let homePlayers = game.home.players;
    let awayPlayers = game.away.players;

    // create object with players from both rosters
    const players = Object.assign({}, homePlayers, awayPlayers);

    // iterate over top level object
    for (let team in game) {
      // create convenient aliases
      let teamObj = game[team];
      let playerObj = teamObj.players;
      // iterate over home/away objects
      for (let player in playerObj) {
        // if current player's name is equal to input 
        if (player === playerName) {
          // return current player's points
          return playerObj[player]['points'];
        }
      }
    }
  }

  // MAKE CORRECTIONS FROM HERE*******************************
  function shoeSize(playerName) {
    // create convenient alias
    let game = gameObject();

    // iterate over top level object
    for (let team in game) {
      // create convenient alias
      let teamObj = game[team];
      // iterate over home/away objects
      for (let player in teamObj['players']) {
        // if current player's name is equal to input 
        if (player === playerName) {
          // return current player's shoe size
          return teamObj['players'][player]['shoe']
        }
      }
    }
  }

  function teamColors(teamName) {
    // create alias variable  
    let game = gameObject();

    // iterate over top-level object
    for (let key in game) {
      // if current team name is equal to input
      if (game[key]['teamName'] === teamName) {
        return game[key]['colors'];
      }
    }
  }

  function teamNames() {
    // create result array
    let arrayOfTeamNames = [];
  
    // create convenient alias variable  
    let game = gameObject();
  
    // iterate over top-level object
    for (let team in game) {
      let teamName = game[team]['teamName'];
      arrayOfTeamNames.push(teamName)
    }
    // return result array
    return arrayOfTeamNames;
  }

  function playerNumbers() {
    // create result array
    let arrayOfPlayerNumbers = [];
  
    // create convenient alias variable  
    let game = gameObject();
  
    // iterate over top-level object
    for (let team in game) {
      let roster = game[team]['players'];
      for (let player in roster) {
        let playerObj = roster[player]
        arrayOfPlayerNumbers.push(playerObj['number'])
      }
    }
    // return result array
    return arrayOfPlayerNumbers;
  }

  function playerStats(playerName) {
    // create convenient alias
    let game = gameObject();
  
    for (let team in game) {
      let players = game[team]['players'];
      // iterate over players object
      for (let player in players) {
        // if current player name equals input
        if (player === playerName) {
          // return player stats object
          return players[player];
        }
      }
    }  
  }

  function bigShoeRebounds() {
    // create convenient alias
    let game = gameObject();
  
    // create comparison variable
    let largestShoe = 0;
    let resultRebounds = 0;
  
    for (let team in game) {
      let players = game[team]['players'];
      // iterate over players object
      for (let player in players) {
        let playerStatsObj = players[player]
        // if current player's shoe size is bigger than largestShoe'
        if (playerStatsObj.shoe > largestShoe) {
          // set largest shoe equal to current player's shoe
          largestShoe = playerStatsObj.shoe;
          resultRebounds = playerStatsObj.rebounds;
        }
      }
    }  
    return resultRebounds;
  }