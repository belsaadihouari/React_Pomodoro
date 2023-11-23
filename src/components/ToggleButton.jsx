import play from "../assets/play-button.svg"
import reset from "../assets/reset.svg"
import { useSelector, useDispatch } from "react-redux"
import { startChrono, resetChrono } from "../features/chrono"

export default function ToggleButton() {
  const chronoValues = useSelector(state => state.chrono)
  const dispatch = useDispatch()

  function toggleChrono() {
    if (!chronoValues.isPlaying) {
      dispatch(startChrono())
    } else {
      dispatch(resetChrono())
    }
  }

  return (
    <button
      onClick={toggleChrono}
      className="px-4 py-2 text-slate-800 flex justify-center items-center mx-auto bg-slate-300 rounded hover:bg-slate-200 "
    >
      <span className="mr-3 text-lg">{chronoValues.isPlaying ? "Reset" : "Start"}</span>
      <img className="w-5" src={chronoValues.isPlaying ? reset : play} alt="" />
    </button>
  )
}
