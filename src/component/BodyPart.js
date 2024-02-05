import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'



const bodyPart = ({ item, borderTop, bodyPart }) => {
    return (
        <Stack type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ?
                    '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20PX',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}










        >
            <img src={Icon} alt='dumbbell' styles={{ with: '40px', Height: '40px' }} />
        </Stack >
    )
}

export default bodyPart