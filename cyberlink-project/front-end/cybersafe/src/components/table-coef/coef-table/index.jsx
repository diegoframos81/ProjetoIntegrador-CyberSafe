/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
  padding: 1rem;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

const CoefTable = ({ data, onAdd }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'DISCIPLINAS',
        accessor: 'disciplina',
      },
      {
        Header: 'PARTICIPAÇÃO',
        accessor: 'participacao',
      },
      {
        Header: 'FREQUÊNCIA',
        accessor: 'frequencia',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Styles>
      <h2>Aluno: Joao Silva</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button variant="primary" onClick={onAdd} style={{ marginTop: '20px' }}>
        Adicionar Informação
      </Button>
    </Styles>
  );
};

export default CoefTable;