import React from 'react';
import MediumHeading from '../Shared/MediumHeading';
 
import ProductCard from '../Shared/ProductCard';
import data from './data'
const ProjectList = () => {
    return (
        <div className="col-md-10 offset-md-1" style={{position:'absolute',top:'100px',left:'0',right:'0',bottom:'0'}}>
            <MediumHeading st={{boxShadow:"0px 0px 10px 0px white",backgroundColor:'black',border:"1px solid white",borderColor:'transferent'}}  text={'my blogs'}></MediumHeading>
            <ProductCard data={data}> </ProductCard>
        </div>
    );
};

export default ProjectList;