import axios from "axios";
export default axios.create({
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'b326461fae8f4fde834de10f394473f8'
        }
    }
)