import styled from "styled-components";


export const Table = styled.table`

  margin: 0 auto;
  width: 70%;
 
`;
export const Thead = styled.thead`

th {
    background-color: blue;
  };
  `;
export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  color: #fff
  
`;
  
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
text-align: center;
font-size: 16px;

`;