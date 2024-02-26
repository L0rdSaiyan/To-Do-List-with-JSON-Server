export default function Students({name, age, enabled})
{

    function googleSearch()
    {
        window.location.href = `https://www.google.com/search?q=${name}`
    }

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {enabled && (
            <button onClick={googleSearch} >pesquisar</button>
            )}
        </div>
    )
}