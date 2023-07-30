import {useEffect, useState} from "react";
import "../../assets/list.scss";

const List = () => {
  const [books, setBooks] = useState([]);
  

  return (
    <main>
      <div className="l__container p__list">
        <div className="l__wrap">
          <div>
            xkq
          </div>
          <div>
            <ul className="c__cardWrap">
              <li className="c__card">fd</li>
              <li className="c__card">fd</li>
              <li className="c__card">fd</li>
              <li className="c__card">fd</li>
              <li className="c__card">fd</li>
              <li className="c__card">fd</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default List;