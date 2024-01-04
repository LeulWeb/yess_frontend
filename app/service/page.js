import React from 'react';
import Why from '../components/service/Why';
import Comming from '../components/service/Comming';
import View from '../components/service/View';
import BTraining from '../components/service/BTraining';

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