import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewsDetails, getDetailsNewsSlice } from '../../redux/reduxSlice/detailsNewsSlice';
const ItemNews = ({title, description, id}) => {
    const dispatch=useDispatch();

    return(<div style={{border: '1px solid black', textAlign:'left', margin:'10px', padding:'10px'}}>
         <p>title: {title}</p>
         <p>description: {description}</p>
         <Link to={'details/'+id
        } onClick={()=>dispatch(getDetailsNewsSlice(id))}>Show more</Link>
    </div>);
};
export default ItemNews;