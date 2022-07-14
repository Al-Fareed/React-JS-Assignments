const Box=({colorValue})=>{
    return (
        <div
            className="Box"
            style={{backgroundColor:colorValue}}
        >
            <p>{colorValue ? colorValue :"Empty"}</p>
        </div>
    )
}
Box.defaultProps={
    colorValue:"No color"
}

export default Box