import './ScoreListItem.css'

export default function ScoreListItem({score}) {
  return (
  <li>{score.name} - <span className='scoreItem'>{score.highScore} points</span></li>
)}
  