import axios from 'axios';

//Action type 정의
export const FETCH_TODOS = "FETCH_TODOS";

const apiUrl = 'http://localhost:4500/api/todos';

export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
            .then(res => {
                dispatch({
                    // 요청이 성공하면, 서버 응답내용을 payload로 설정하여
                    // FETCH_TODOS 액션을 디스패치 합니다. 
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                throw (error);
            })
    }
};