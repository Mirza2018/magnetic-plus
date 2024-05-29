import React from 'react';

const Category = ({ c }) => {
    const { _id, img } = c

    return (

        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="https://scontent.fdac45-1.fna.fbcdn.net/v/t39.30808-6/350505712_509682027931354_8825000770997443477_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhYoqLC8KdfzW-41vwqDLCrv7SwRS3dsiu_tLBFLd2yKqRTpU7G5uRYqOAJX9wIJLSxChv3C_vOMhm-WB09ENi&_nc_ohc=mMYTQxg5AnQQ7kNvgHicCPu&_nc_ht=scontent.fdac45-1.fna&oh=00_AYCmJxFC2SBHVSFxMS8v1VmDLnH0TiIpFhyxpztfljpYTg&oe=665D05BA" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                    <span className="absolute inset-0"></span>
                    {_id}
                </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>





    );
};

export default Category;