// pages/example.js

import axios from 'axios';

export async function getServerSideProps(context) {
    const { query } = context; // query parameters are accessed via context

    // Example: Fetching data using axios
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}lenderslist1`, query.mobilenumber, {
            headers: {
                'Content-Type': 'application/json',
                'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
            }
        });

        return {
            props: {
                data: response.data
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {} // Return empty props or handle error
        };
    }
}

// Example component that receives props
export default function Example({ data }) {
    return (
        <div>
            <h1>Data: {JSON.stringify(data)}</h1>
        </div>
    );
}

