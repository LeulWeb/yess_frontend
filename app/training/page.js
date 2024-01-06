import React from 'react';
import Why from '../components/training/Why';
import Comming from '../components/training/Comming';
import View from '../components/training/View';
import BTraining from '../components/training/BTraining';

const Service =()=>{
    return(
        <div className=' overflow-x-hidden'>
            <Why />
            <Comming />
            <View />
            <BTraining />
        </div>
    )
}

export default Service;