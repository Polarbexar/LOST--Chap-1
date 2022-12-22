import { useEffect, useState } from 'react';
import * as scoresAPI from '../../utilities/score-api'
import ScoreListItem from '../ScoreListItem/ScoreListItem'
import './HighScoreBoard.css'

export default function HighScoreBoard() {
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

  return (
    <div className="highScore">
    <h3>All Time High Scores</h3>
    <div style={{
      textAlign:'left'
    }}>
    {scoreListItem}
    </div>
    </div>
  )
}