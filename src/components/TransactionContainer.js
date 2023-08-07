import { Table, TableCell, TableHeader, TableRow, Thead  } from "./componentstyle/TransactionStyle";

export const TransactionContainer  = props => {
    console.log(props.items)
return (

<Table>
  <Thead>
    <TableRow>
    <TableHeader>Type</TableHeader>
    <TableHeader>Amount</TableHeader>
    <TableHeader>Currency</TableHeader>
    </TableRow>
  </Thead>
  <tbody>
  {props.items.map(item => (
    <TableRow key={item.id}>
      <TableCell>{item.type}</TableCell>
      <TableCell>{item.amount}</TableCell>
      <TableCell>{item.currency}</TableCell>
    </TableRow>
    ))}
  </tbody>
</Table>

);
};