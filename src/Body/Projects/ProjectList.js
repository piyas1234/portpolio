import React from 'react';
import MediumHeading from '../Home/components/UI/MediumHeading';
import ProductCard from '../Shared/ProductCard';
import data from './data'
const ProjectList = () => {
    return (
        <div className="col-md-10 offset-md-1" style={{position:'absolute',top:'100px',left:'0',right:'0',bottom:'0'}}>
             <MediumHeading   text={'my projects'}></MediumHeading>
            <ProductCard data={data}> </ProductCard>
        </div>
    );
};

export default ProjectList;