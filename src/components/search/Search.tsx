import Styles from './Search.module.css'
import { BsSearch } from 'react-icons/bs';

const Search = ({onChange}: any) => {
  return (
    <div>
        <form
          style={{ maxWidth: '95%', margin: ' 20px auto' }}
          className={`form-group pb-3 ${Styles.hasSearch}`}
        >
          <BsSearch className={`${Styles.formControlSearchIcon}`} />
          <input
            type="text"
            className={`form-control form-control-sm shadow-none ${Styles.SearchBox}`}
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          />
        </form>
    </div>
  )
}

export default Search