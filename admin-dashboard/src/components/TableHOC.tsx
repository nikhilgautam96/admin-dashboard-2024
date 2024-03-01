import { useTable, Column, TableOptions, useSortBy, usePagination } from "react-table";

const TableHOC = <T extends Object> (
    columns: Column<T>[], 
    data: T[], 
    containerClassname: string, 
    heading: string,
    showPagination: boolean = false
    ) => {
    return ()=> {
        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 6,
            }
        }
        const {
            getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            page, 
            prepareRow,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage,
            pageCount,
            state:{pageIndex}
        } = useTable(options, useSortBy, usePagination);

        return (
            <div className={containerClassname}>
                <h2 className="heading">{heading}</h2>

                <table className="table" {...getTableProps()}>
                    <thead>
                    {
                        headerGroups.map((headerGroup)=> (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) =>(
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            {' '}
                                            {
                                                (column.isSorted) ? column.isSortedDesc ? <span>⬆️</span> : <span>⬇️</span> : ''
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=> (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {
                    (showPagination) ? (
                    <div className="table-pagination">
                        <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
                        <span>{`${pageIndex+1} of ${pageCount} page.`}</span>
                        <button disabled={!canNextPage} onClick={nextPage}>Next</button>
                    </div>) : ''
                }
            </div>
        )
    }
}
export default TableHOC;