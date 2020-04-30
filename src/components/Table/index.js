import React from 'react'
import './Table.scss';

const Table = ({columns, children, tableName}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={`${tableName}-th-${index}`}
                            className={`${column.hideable?'hideable':''}`}>
                                {column.name}
                        </th>))
                    }
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table;
