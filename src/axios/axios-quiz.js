import axios from "axios";

export default axios.create({
	baseURL: 'https://react-quiz-11769.firebaseio.com/'
})