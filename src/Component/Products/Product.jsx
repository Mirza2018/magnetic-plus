import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ p }) => {
    const { name, balance,_id } = p


    const navigate = useNavigate()


    return (
        <a className="group" >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" onClick={() => {navigate(`/category/${_id}`) }} >
                <img
                    src='https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/350505712_509682027931354_8825000770997443477_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhYoqLC8KdfzW-41vwqDLCrv7SwRS3dsiu_tLBFLd2yKqRTpU7G5uRYqOAJX9wIJLSxChv3C_vOMhm-WB09ENi&_nc_ohc=mMYTQxg5AnQQ7kNvgHicCPu&_nc_ht=scontent.fdac45-1.fna&oh=00_AYCmJxFC2SBHVSFxMS8v1VmDLnH0TiIpFhyxpztfljpYTg&oe=665D05BA'
                    alt=''
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{balance}</p>
        </a>
    );
};

export default Product;