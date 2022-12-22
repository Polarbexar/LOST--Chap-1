import { useEffect, useState } from "react"
import * as scoresAPI from '../../utilities/score-api'
import PersonalScoreListItem from '../PersonalScoreListItem/PersonalScoreListItem'
import './PersonalScoreBoard.css'

export default function PersonalScoreBoard({profile, setProfile}) {
  console.log(profile)
  const [scores, setScores] = useState([])
  const scoreListItem = scores.map((s, idx) => (
    <PersonalScoreListItem profile={s} key={idx} />
  ))
  useEffect(() => {
    async function fetchScores() {
      const scores = await scoresAPI.getUserScores();
      console.log(scores)
      setScores(scores);
    }
    fetchScores();
  }, [profile]);

  async function handleSubmit() {
    const deleteScores = await scoresAPI.deleteScores()
    console.log(deleteScores)
    setProfile(deleteScores)
  }

  return (
    <>
  <div className="personalScore">
  <h3>Your High Scores</h3>
  {scoreListItem}
  <button className="reset" onClick={handleSubmit}>Delete Score History</button>
  </div>
    </>
  )
} 