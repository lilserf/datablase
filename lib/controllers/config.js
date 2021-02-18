import { seasons } from '../controllers/timeMap.js';

export async function config() {
  let config = {};

  const sortedSeasonList = await seasons();

  config.seasons = {
    minSeason: sortedSeasonList[0].season,
    maxSeason: sortedSeasonList[sortedSeasonList.length - 1].season,
  };

  config.gameTypes = [
    {
      label: 'Regular Season',
      value: 'R',
    },
    {
      label: 'Postseason',
      value: 'P',
    },
  ];

  config.columns = {
    hitting: [
      {
        id: 'gamesPlayed',
        label: 'Games Played',
        labelBrief: 'G',
        dataField: 'games_played',
        description: '',
      },
      {
        id: 'atBats',
        label: 'At Bats',
        labelBrief: 'AB',
        dataField: 'at_bats',
        description: '',
      },
      {
        id: 'runsScored',
        label: 'Runs Scored',
        labelBrief: 'R',
        dataField: 'runs_scored',
        description: '',
      },
      {
        id: 'hits',
        label: 'Hits',
        labelBrief: 'H',
        dataField: 'hits',
        description: '',
      },
      {
        id: 'doublesHit',
        label: 'Doubles Hit',
        labelBrief: '2B',
        dataField: 'doubles',
        description: '',
      },
      {
        id: 'triplesHit',
        label: 'Triples Hit',
        labelBrief: '3B',
        dataField: 'triples',
        description: '',
      },
      {
        id: 'quadruplesHit',
        label: 'Quadruples Hit',
        labelBrief: '4B',
        dataField: 'quadruples',
        description: '',
      },
      {
        id: 'runsBattedIn',
        label: 'Runs Batted In',
        labelBrief: 'RBI',
        dataField: 'runs_batted_in',
        description: '',
      },
      {
        id: 'stolenBases',
        label: 'Stolen Bases',
        labelBrief: 'SB',
        dataField: 'stolen_bases',
        description: '',
      },
      {
        id: 'caughtStealing',
        label: 'Caught Stealing',
        labelBrief: 'CS',
        dataField: 'caught_stealing',
        description: '',
      },
      {
        id: 'basesOnBalls',
        label: 'Bases on Balls (Walks)',
        labelBrief: 'BB',
        dataField: 'walks',
        description: '',
      },
      {
        id: 'strikeouts',
        label: 'Strikeouts',
        labelBrief: 'SO',
        dataField: 'strikeouts',
        description: '',
      },
      {
        id: 'battingAverage',
        label: 'Batting Average',
        labelBrief: 'BA',
        dataField: 'batting_average',
        description: '',
      },
      {
        id: 'battingAverageWithRunnersInScoringPosition',
        label: 'Batting Average With Runners in Scoring Position',
        labelBrief: 'BA/RISP',
        dataField: 'batting_average_risp',
        description: '',
      },
      {
        id: 'hitsWithRunnersInScoringPosition',
        label: 'Hits With Runners in Scoring Position',
        labelBrief: 'HRISP',
        dataField: 'hits_risp',
        description: '',
      },
      {
        id: 'onBasePercentage',
        label: 'On-base Percentage',
        labelBrief: 'OBP',
        dataField: 'on_base_percentage',
        description: '',
      },
      {
        id: 'sluggingPercentage',
        label: 'Slugging Percentage',
        labelBrief: 'SLG',
        dataField: 'slugging',
        description: '',
      },
      {
        id: 'onBasePlusSlugging',
        label: 'On-base Plus Slugging Percentage',
        labelBrief: 'OPS',
        dataField: 'on_base_slugging',
        description: '',
      },
      {
        id: 'totalBases',
        label: 'Total Bases',
        labelBrief: 'TB',
        dataField: 'total_bases',
        description: '',
      },
      {
        id: 'groundIntoDoublePlays',
        label: 'Double Plays Grounded Into',
        labelBrief: 'GDP',
        dataField: 'gidp',
        description: '',
      },
      {
        id: 'sacrifices',
        label: 'Sacrifices',
        labelBrief: 'SAC',
        dataField: 'sacrifices',
        description: '',
      },
      {
        id: 'sacrificeBunts',
        label: 'Sacrifice Hits (Sacrifice Bunts)',
        labelBrief: 'SH',
        dataField: 'sacrifice_bunts',
        description: '',
      },
      {
        id: 'sacrificeFlies',
        label: 'Sacrifice Flies',
        labelBrief: 'SF',
        dataField: 'sacrifice_flies',
        description: '',
      },
      {
        id: 'homeRuns',
        label: 'Home Runs',
        labelBrief: 'HR',
        dataField: 'home_runs',
        description: '',
      },
      {
        id: 'hitByPitch',
        label: 'Hit-by-Pitch',
        labelBrief: 'HBP',
        dataField: 'hit_by_pitches',
        description: '',
      },
    ],
    pitching: [
      {
        id: 'wins',
        label: 'Wins',
        labelBrief: 'W',
        dataField: 'wins',
        description: '',
      },
      {
        id: 'losses',
        label: 'Losses',
        labelBrief: 'L',
        dataField: 'losses',
        description: '',
      },
      {
        id: 'winningPercentage',
        label: 'Winning Percentage',
        labelBrief: 'W-L%',
        dataField: 'win_pct',
        description: '',
      },
      {
        id: 'earnedRunAverage',
        label: 'Earned Run Average',
        labelBrief: 'ERA',
        dataField: 'earned_run_average',
        description: '',
      },

      {
        id: 'gamesPlayed',
        label: 'Games Played',
        labelBrief: 'G',
        dataField: 'games',
        description: '',
      },
      {
        id: 'shutouts',
        label: 'Shutouts',
        labelBrief: 'SHO',
        dataField: 'shutouts',
        description: '',
      },
      {
        id: 'inningsPitched',
        label: 'Innings Pitched',
        labelBrief: 'IP',
        dataField: 'innings',
        description: '',
      },
      {
        id: 'hitsAllowed',
        label: 'Hits Allowed',
        labelBrief: 'H',
        dataField: 'hits_allowed',
        description: '',
      },
      {
        id: 'earnedRuns',
        label: 'Earned Runs',
        labelBrief: 'R',
        dataField: 'runs_allowed',
        description: '',
      },
      {
        id: 'homeRuns',
        label: 'Home Runs',
        labelBrief: 'HR',
        dataField: 'home_runs_allowed',
        description: '',
      },
      {
        id: 'basesOnBalls',
        label: 'Bases on Balls (Walks)',
        labelBrief: 'BB',
        dataField: 'walks',
        description: '',
      },
      {
        id: 'strikeouts',
        label: 'Strikeouts',
        labelBrief: 'SO',
        dataField: 'strikeouts',
        description: '',
      },
      {
        id: 'qualityStarts',
        label: 'Quality Starts',
        labelBrief: 'QS',
        dataField: 'quality_starts',
        description: '',
      },
      {
        id: 'battersFaced',
        label: 'Batters Faced',
        labelBrief: 'BF',
        dataField: 'batters_faced',
        description: '',
      },
      {
        id: 'walksAndHitsPerInningPitched',
        label: 'Walks and Hits Per Inning Pitched',
        labelBrief: 'WHIP',
        dataField: 'whip',
        description: '',
      },
      {
        id: 'hitsAllowedPerNine',
        label: 'Hits Per 9 Innings',
        labelBrief: 'H9',
        dataField: 'hits_per_9',
        description: '',
      },
      {
        id: 'homeRunsPerNine',
        label: 'Home Runs Per 9 Innings',
        labelBrief: 'HR9',
        dataField: 'home_runs_per_9',
        description: '',
      },
      {
        id: 'basesOnBallsPerNine',
        label: 'Walks Per 9 Innings',
        labelBrief: 'BB9',
        dataField: 'walks_per_9',
        description: '',
      },
      {
        id: 'strikeoutsPerNine',
        label: 'Strikeouts Per 9 Innings',
        labelBrief: 'SO9',
        dataField: 'strikeouts_per_9',
        description: '',
      },
      {
        id: 'strikeoutToWalkRatio',
        label: 'Strikeout-to-Walk Ratio',
        labelBrief: 'SO/BB',
        dataField: 'strikeouts_per_walk',
        description: '',
      },
      {
        id: 'hitBatsmen',
        label: 'Hit Batsmen',
        labelBrief: 'HB',
        dataField: 'hit_by_pitches',
        description: '',
      },
      {
        id: 'numberOfPitches',
        label: 'Number of Pitches',
        labelBrief: 'NP',
        dataField: 'pitches_thrown',
        description: '',
      },
      {
        id: 'strikePercentage',
        label: 'Strike Percentage',
        labelBrief: 'STRIKE%',
        dataField: 'strikeout_percentage',
        description: '',
      },
      {
        id: 'walkPercentage',
        label: 'Walk Percentage',
        labelBrief: 'BB%',
        dataField: 'walk_percentage',
        description: '',
      },
    ],
  };

  config.defaults = {
    gameType: 'R',
    season: config.seasons.maxSeason,
    statType: 'season',
  };

  return config;
}