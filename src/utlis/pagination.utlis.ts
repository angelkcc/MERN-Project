

export const getPagination= 
(currentPage:number,perPage:number,totalCount:number)=>{
    const totalPages= Math.ceil(totalCount/perPage);
    return{
        page:currentPage,
        limit:perPage,
        totalPages,
        nextPage:currentPage<totalPages?currentPage+1:null,
        prevPage:currentPage>1?currentPage-1:null,
        total:totalCount,
    };
};