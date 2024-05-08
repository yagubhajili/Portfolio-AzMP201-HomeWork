import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/slices/CounterSlice'
import { useState } from 'react'


function App() {


  const [inputVal, setInputVal] = useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <div>
          <input type="text" placeholder='enter a num' onChange={(e) => {
            setInputVal(e.target.value)
          }} />
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(inputVal))}
          >
            Increment
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByAmount(inputVal))}
          >
            Decrement
          </button>
        </div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App
