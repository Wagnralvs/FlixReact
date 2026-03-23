
import { useMemo } from "react";
import { PaginationsType } from "../../shared/models/movies";
interface Props {
  paginations: PaginationsType;
  newRequest: (page: number) => void
}

export default function PaginationCard({paginations,  newRequest} : Props  ) {

const pageNumbers =useMemo(() => {
  return {
  first: paginations.page,
  seconds: paginations.page + 1,
  third: paginations.page + 2,

};
}, [paginations.page])


function newPage(next:number){
  newRequest(next);
}
return (
<nav aria-label="Page navigation">
  <ul className="pagination my-4 justify-content-center" >
    <li className={paginations.page > 1 ? "page-item" : "page-item disabled"}>
      <a className="page-link" href="#" aria-label="Previous" onClick={()=>newPage(pageNumbers.first - 1)}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className={paginations.page === pageNumbers.first ? "page-item active" : "page-item"}>
      <a className="page-link" onClick={()=>newPage(pageNumbers.first)} href="#">{pageNumbers.first}</a>
    </li>
    <li className={paginations.page === pageNumbers.seconds ? "page-item active" : "page-item"}>
      <a className="page-link" onClick={()=>newPage(pageNumbers.seconds)} href="#">{pageNumbers.seconds}</a>
    </li>
    <li className={paginations.page === pageNumbers.third ? "page-item active" : "page-item"}>
      <a className="page-link" onClick={()=>newPage(pageNumbers.third)} href="#">{pageNumbers.third}</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onClick={()=>newPage(pageNumbers.third + 1)}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  );
}
