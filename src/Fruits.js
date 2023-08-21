function Fruits({title, fruits, addFunction, logFruit}){
    return(
        <div>
            <h1>{title}</h1>
            {fruits.map(fruit=>{
                return <p onClick={()=>logFruit(fruit)} key={fruit}>{fruit}</p>
            })}

            <button onClick={addFunction}>Add One</button>
        </div>
    )
}

export default Fruits;