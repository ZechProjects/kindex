import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, Column } from "react-table";
import ReactPaginate from "react-paginate";
import { Company, companyData, companyDataMap } from "data/companyData";
import Flag from "react-flagkit";
import { Link } from "react-router-dom";

// Example data
const data: Company[] = companyData;

// Example columns
const columns: Column<Company>[] = [
  {
    Header: "Name",
    accessor: "name",
    // Custom Cell rendering based on conditions
    Cell: ({ value, row }: any) => {
      return (
        <div>
          <img
            src={`${row.original.img}`}
            alt="Placeholder"
            style={{ width: "50px" }}
          />{" "}
          <span>
            <Link to={`/company-profile/${row.original.id}`}>{value}</Link>
          </span>
        </div>
      );
    },
  },
  { Header: "Category", accessor: "category" },
  {
    Header: "Rating",
    accessor: "rating",
    // Custom Cell rendering based on conditions
    Cell: ({ value }: any) => {
      // Conditionally format the rating
      const stars = "★".repeat(value) + "☆".repeat(5 - value);
      return (
        <span>
          {stars} ({value})
        </span>
      ); // Display rating with stars
    },
  },
  {
    Header: "Country",
    accessor: "country",
    Cell: ({ value }) => {
      return <Flag country={value} />;
    },
  },
];

// Table Component
const SearchCompanyPage: React.FC = () => {
  const [filterInput, setFilterInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // React Table Hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns: useMemo(() => columns, []),
      data: useMemo(() => data, []),
    },
    useGlobalFilter, // Global Filtering Hook
    useSortBy // Sorting Hook
  );

  // Handle page change
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  // Handle filter input change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setGlobalFilter(value); // Update global filter
    setFilterInput(value);
  };

  // Paginate rows
  const pageCount = Math.ceil(rows.length / itemsPerPage);
  const currentRows = rows.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="container">
      <div className="card p-3">
        <h3>Data Table with Filtering, Sorting, and Pagination</h3>

        {/* Filter Input */}
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search records"}
          style={{ marginBottom: "10px" }}
        />

        {/* Table */}
        <table
          {...getTableProps()}
          style={{ border: "1px solid black", width: "100%" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{ borderBottom: "1px solid black", padding: "10px" }}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {currentRows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default SearchCompanyPage;
