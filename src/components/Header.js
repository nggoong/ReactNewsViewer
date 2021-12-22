import React, { useState } from 'react';
import './Header.css';
import HeaderItem from './HeaderItems';


const Header = () => {

    const [itemList, setItemList] = useState(['전체보기', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술']);

    return(
        <div className='header'>
            <div className='header-links'>
            {itemList.map((item)=>{return(
                <HeaderItem item={item}></HeaderItem>
            )})}
            </div>
        </div>

    )
}

export default Header;