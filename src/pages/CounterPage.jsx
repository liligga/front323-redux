import { useSelector, useDispatch } from "react-redux"


const CounterPage = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT_COUNTER' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT_COUNTER' })
  }

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className='text-2xl col-span-full'>Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button 
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={decrement}
          >-</button>
        <span>{counter}</span>
        <button
          onClick={increment}
          className="w-8 bg-slate-300 px-2 py-1 rounded-md">
            +
        </button>
      </div>
    </div>
  )
}

export default CounterPage
