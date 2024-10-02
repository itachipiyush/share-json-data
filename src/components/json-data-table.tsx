import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { format } from "date-fns"

const jsonDataList = [
    {
        id: 'tyuyfghgfgh',
        name: 'this',
        createdAt: '2024-09-23T07:01:58.297Z',
    },
] 
  
export default function JsonDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className="sr-only">Share</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{format(new Date(data.createdAt), 'MMMM d, yyyy')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
