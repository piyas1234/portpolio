import axios from 'axios';
// import {Request} from 'react-server-request'

export default axios.create({
  baseURL: `http://localhost:5000/`
});


// export default  new Request('https://cherry-pie-28611.herokuapp.com')
 

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Porgramming-Hero-web-course/full-stack-client-piyas1234.git