import React, { useEffect, useState } from 'react'
import styles from './styles';
import { firebase } from '../../firebase/config'
import DonorOnboarding from '../DonorOnboarding/DonorOnboarding';
import RecOnboarding from '../RecOnboarding/RecOnboarding';

export default function HomeScreen(props) {

    const type = props.extraData.type;

    if(type === "Donor"){
        return(
            <DonorOnboarding {...props}/>
        )
    }

    return(
        <RecOnboarding {...props} />
    )
}
