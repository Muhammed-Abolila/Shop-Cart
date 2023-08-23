import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react';
import { getCategoryApi } from '../../Redux/Actions/CategoryAction';
const CategoryContainerHook = () => {
    let backgroundColor=["#ffd3e8","#f4dba5","#55cfdf","#0034ff","#ffd3e8","#f4dba5"];
    let CategoryData=useSelector((state)=>state.CategoryReducer.CategoryApi);
    let dispatch=useDispatch();
    useEffect(() => {
    dispatch(getCategoryApi())
    }, []);
    return [CategoryData,backgroundColor]
};
export default CategoryContainerHook
