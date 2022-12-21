import React, { useEffect, useState } from 'react';
import * as scoresAPI from '../../utilities/score-api'
import ScoreListItem from '../ScoreListItem/ScoreListItem'

export default function HighScoreBoard({profile}) {
  const [scores, setScores] = useState([]);
  const scoreListItem = scores.map((s, idx) => (
    <ScoreListItem score={s} key={idx} />
  ));

  useEffect(() => {
    async function fetchScores() {
      const scores = await scoresAPI.getHighScores();
      console.log(scores)
      setScores(scores);
    }
    fetchScores();
  }, []);

  return <div>{scoreListItem}</div>
}