const Input=({colorValue,setColorValue})=>{
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <input 
                autoFocus
                type="text" 
                placeholder="Set color"
                value={colorValue}
                onChange={(e)=>setColorValue(e.target.value)}
            />
        </form>
        )
}
export default Input