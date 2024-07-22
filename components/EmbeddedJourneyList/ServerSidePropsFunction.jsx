
import axios from "axios";

const getData = async ({searchParams}) => {

    const formData1 = new FormData();
    formData1.append('mobilenumber',searchParams.mobilenumber);
    
    const response =await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}lenderslist1`, formData1, {
                headers: {
                  'Content-Type': 'application/json',
                  'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
                }
              })

    // if(!response.ok){
    //     throw Error;
        
    // }
    // return response.json();
    return response.data;
}

const ServerSidePropsFunction = async ({params, searchParams}) => {
    const response = await getData({searchParams});

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        {
            JSON.stringify(response)
        }
      </div>
    </div>
  )

  
}

export default ServerSidePropsFunction

