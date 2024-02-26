import {useState} from 'react'
export default function MyComponente()
{

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployeed, setIsEmployeed] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [car, setCar] = useState({year:"2024",
                                    make: "Ford",
                                    model: "Mustang"})

    const [car2, setCar2] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const [char, setChar] = useState({});
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleAddCar()
    {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel}
        setCar2(c => [...c, newCar])
    }
    
    function handleRemoveCar(index)
    {
        setCar2(c => car2.filter((_,i) => i!==index))
    }
    function handleYearChange(event)
    {
        setCarYear(event.target.value)
    }
    function handleMakeChange(event)
    {
        setCarMake(event.target.value)

    }
    function handleModelChange(event)
    {
        setCarModel(event.target.value)
    }

    function handleAddFood()
    {
        let newFood = document.getElementById("foodInput").value
        setFoods([...foods, newFood])
        newFood = document.getElementById("foodInput").value = ""

    }

    function handleRemoveFood(index)
    {
        setFoods(f => foods.filter((_,i) => i !== index))
    }

    const updateName = () =>
    {
        setName("SpongeBob")
    }

    const incrementAge = () =>
    {
        setAge(age + 1)
    }

    const toggleEmployeedStatus = () =>
    {
        setIsEmployeed(!isEmployeed)
    }

    function handleNameChange(event)
    {
        setName(event.target.value)
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value)
    }

    function handleQuantityChange(event)
    {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event)
    {
        setComment(event.target.value)
    }

    function handleCarYear(event)
    {
        setCar({...car,year: event.target.value})
    }

    function fetchChar(event)
    {


    setChar(event.target.value)
    const url = `https://swapi.dev/api/people/?search=${encodeURIComponent(char)}`;

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao chamar a API. Código de status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length > 0) {
        const primeiroResultado = data.results[0];
        setChar(primeiroResultado)
      } else {
        console.log(`Nenhum personagem encontrado com o nome ${char}`);
      }
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });

    }


    function teste(char)
    {
        fetch("https://swapi.dev/api/people/1/")
        .then(result => result.json())
        .then(data => 
            {
                console.log(data)
            })
    }

    return(

        <div>
            <button onClick={teste}>cu</button>
            <input onChange={handleNameChange}></input>
            <p>{name}</p>
            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>{quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} cols="30" rows="10"></textarea>
            <p>comment: {comment}</p>
            <select onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
                <p>Payment: {payment}</p>
                <p>Your favorito car is: {car.year}, {car.make}, {car.model}</p>
                <input type='number' onChange={handleCarYear} value={car.year}></input>
                <input type='text' value={car.make}></input>
                <input type='text' value={car.model}></input>

        <input type='text' onChange={fetchChar} placeholder='personagem'></input>
        <p> personagem: {char.name}</p>

        <h1>List of food</h1>
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={()=> handleRemoveFood(index)} >
                    {food}
                    </li>
                ))}
        </ul>
        <input type='text' id='foodInput' placeholder='Enter food name'></input>
        <button onClick={handleAddFood}> add food</button>
        
        
        <h2>List of car Objetcst</h2>
        <ul>
            {car2.map((element, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>{element.year} {element.model} {element.make}</li>
            ))}
        </ul>
        <input type='number' value={carYear} onChange={handleYearChange}></input><br></br>
        <input type='text' value={carMake} onChange={handleMakeChange}></input><br></br>
        <input type='number' value={carModel} onChange={handleModelChange}></input><br></br>
                <button onClick={handleAddCar}>ADD CAR</button>
               </div>


        // <div>
        //     <p>Name: {name}</p>
        //     <button onClick={updateName}>Set Name</button>
        //     <p>Age: {age}</p>
        //     <button onClick={incrementAge}>Increment Age</button>
        //     <button onClick={toggleEmployeedStatus}>toggle Employeed Status</button>

        //     {isEmployeed && (
        //         <p>Is employeed!</p>
        //     )}
        // </div>
    )
}