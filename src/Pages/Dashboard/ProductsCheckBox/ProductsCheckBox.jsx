import React from 'react';

const ProductsCheckBox = ({ item }) => {
    const { _id, img, name } = item;
    return (
        <div className='flex items-center gap-1 pt-5'>
            <input
                type="checkbox"
                className="checkbox checkbox-info"
                id={_id}
                name="cat[]"
                value={_id}

            />
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img  loading="lazy"  src={img} />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{name}</div>

                </div>
            </div>
        </div>
    );
};

export default ProductsCheckBox;