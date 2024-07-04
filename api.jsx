import axios from "axios"




axios.interceptors.request.use(
    function (config) {
        const { origin } = new URL(config.url)
        const allowedOrigins = [`http://localhost:3000/users`];
        const token = localStorage.getItem('access-token')
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

export const fetchRegister = async (input) => {
    const { data } = await axios.post(
        `http://localhost:3000/users/`,
        input
    );
    return data;
};

export const fetchLogin = async (input) => {
  
    const { data } = await axios.get(
        `http://localhost:3000/users/`,
    );  
    // return data;

    // console.log(input);
    // console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        if(data[i].email === input.email && data[i].password === input.password){
            alert("daxil oldun")
            const  a = data[i].id
            // console.log(a);
      
            return data;
        }  
    }
    
};

// export const fetchMe = async () => {
//     const { data } = await axios.post(
//         `http://localhost:3000/users`,
//     );
//     return data;    
// }

export const fetchLogout = async () => {
    const { data } = await axios.get(
        `http://localhost:3000/users`,
        {
            refresh_token: localStorage.getItem("refresh-token"),
        }
    );
    return data;
}

