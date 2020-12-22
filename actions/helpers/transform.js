export function makeRequestQuery({ search, query }) {
    let strQuery = `?search=${search}`;
    let arrSorters = [];

    // Append filters to query
    for (let categoryFilter in query.filters) {
        if (!!query.filters[categoryFilter]) {
            strQuery += `&${categoryFilter}=${query.filters[categoryFilter]}`;
        }
    }
    
    // Make the sorting portion 
    for (let sorter in query.sorters) {
        if (!!query.sorters[sorter]) {
            arrSorters.push(`${sorter}:${query.sorters[sorter]}`);
        }
    }

    // Append sorters to query
    if(arrSorters.length > 0) {
        strQuery += `&sort=${arrSorters.join(',')}`;
    }

    return strQuery;
}
