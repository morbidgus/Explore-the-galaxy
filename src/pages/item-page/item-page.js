import { useLocation } from 'react-router-dom';
import './item-page.styles.css';

const getCharacterId = (search) => {
  search = search.slice(4);
  return search.slice(0, -1);
}

const ItemPage = () => {
  const { search } = useLocation();
  const characterId = getCharacterId(search);
  return(
    <div>
      Hi
    </div>
  )
}

export default ItemPage;