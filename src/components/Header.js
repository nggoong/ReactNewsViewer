import './Header.css';
import HeaderItem from './HeaderItems';


const Header = () => {

    const itemList = ['헤드라인', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];
    return(
        <div className='header'>
            <div className='header-links'>
            {itemList.map((item, index)=>{return(
                <HeaderItem item={item} key={index}></HeaderItem>
            )})}
            </div>
        </div>

    )
}

export default Header;