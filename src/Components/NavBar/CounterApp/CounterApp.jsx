import { useState } from "react"

const CounterApp = () => {
    const[count, setCount] = useState(0)
    const[message, setMessage] = useState("")

    const increment = () =>{
        if(count <= 9){
            setCount(count + 1)
            setMessage("")
        }
        else{
            setMessage("Maximum Reached!")
        }
    }

    const decrement = () =>{
        if(count >= 1){
            setCount(count - 1)
            setMessage("")
        }
        else{
            setMessage("Minimum Reached!")
        }   
    }

    const reset = () => {
        setCount(0)
        setMessage(<p className="text-green-500">Reset complete.</p>)
    }

    return(

        <div className="flex justify-center mt-30 font-medium">
            <div className="space-x-5 space-y-10">
                <p className="p-10 bg-white border rounded-xl">Count: {count}</p>

                <button onClick={increment} className="bg-green-300 p-3 w-35 rounded-lg hover:bg-green-500">Increment (+)</button>
                <button onClick={decrement} className="bg-red-300 p-3 w-35 rounded-lg hover:bg-red-500">Decrement (-)</button>
                <button onClick={reset} className="bg-orange-300 p-3 w-35 rounded-lg hover:bg-orange-500">Reset</button>


                <p className="text-center text-xl text-red-500">{message}</p>
            </div>
        </div>

    )
}

export default CounterApp