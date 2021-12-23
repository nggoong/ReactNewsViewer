import './Header.css';
import HeaderItem from './HeaderItems';


const Header = ({changeCategory}) => {

    const itemList = ['헤드라인', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];
    const category = ['headline', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    return(
        <div className='header'>
            <div className='header-links'>
            {itemList.map((item, index)=>{return(
                <HeaderItem item={item} key={index} category={category[index]} changeCategory={changeCategory}></HeaderItem>
            )})}
            </div>
            <div className='user-control'>
                <div className='logo'>
                    <h1>logo</h1>
                </div>
                <div className='user-control-btn'>
                    <p>SIGN UP</p>
                    <p>LOGIN</p>
                    <p>INSTAGRAM</p>
                </div>
            </div>
        </div>

    )
}

export default Header;