export default function HoleCell(props) {
    
    
    return (
        <div>
            <input onChange={(e)=> props.updateTotal(e.target.value)}></input>
            hole#
        </div>
    )
}