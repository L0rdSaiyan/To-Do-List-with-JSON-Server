export default function UserGreeting({isLoggedIn,username})
{
    if(isLoggedIn)
    {
        return <h2>Welcome {username}</h2>
    }else{
        return <h2>Please, log in to continue</h2>
    }

   return(
    <div>

    </div>
   )
}