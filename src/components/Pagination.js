import React, {PureComponent} from 'react';
import axios from 'axios';
import ReactPaginate from "react-paginate";


export class Pagination extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 3,
            currentPage: 0,
        }
    }


    render(){
return (
    <div>
        <p>XYZ</p>
    </div>


)

    }

}

export default Pagination;