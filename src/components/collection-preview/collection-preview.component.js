import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = (props) => {
    console.log(props);
    return (
        <div className='collection-preview'>
        <h1 className='title'>{props.title}</h1>
        <div className='preview'>
            {
                props.items.filter((item,idx) => idx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem 
                        key={id}
                        {...otherItemProps}
                    />
                ))
            }
        </div>
    </div> 
 )
 }

export default CollectionPreview;