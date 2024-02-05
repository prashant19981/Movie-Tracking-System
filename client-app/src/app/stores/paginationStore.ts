import { makeAutoObservable } from "mobx";


export default class PaginationStore {

    currentPage:number = 1;
    totalPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage = (currentPageNumber:number)=>{
        this.currentPage = currentPageNumber;
    }
    setTotalPage = (totalPages:number)=>{
        this.totalPage = totalPages;
    }

}