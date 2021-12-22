import './Header.css';

const HeaderItem = ({ item, category, changeCategory }) => {
    


    return(
        <a className='header-links-item' href='#' onClick={()=>{changeCategory(category)}}>{item}</a>
    )
}

export default HeaderItem;