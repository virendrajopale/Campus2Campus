import React from 'react'
import { useTable, useFilters } from 'react-table'

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFilters
  )

  return (
    <>
    <div className=' flex  items-center justify-center flex-col gap-4 mt-4 text-white'>
      <div className="flex  mb-4 gap-9">
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id} className="mr-4 mb-2 flex gap-4">
                <label htmlFor={column.id} className="font-semibold">
                  {column.render('Header')}:{' '}
                </label>
                <p className='text-black'>
                {column.render('Filter')}
                </p>
              </div>
            ) : null
          )
        )}
      </div>
      <div className="overflow-x-auto w-[80%]">
        <table {...getTableProps()} className="w-full table-auto border-collapse border">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={'header-group-' + index}
                className="bg-gray-200"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    key={column.id}
                    className="px-4 py-2 text-left"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={'row-' + index}>
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={'cell-' + cellIndex}
                        className="border px-4 py-2"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Table