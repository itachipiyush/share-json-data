import AddJsonDialog from './add-json-dialog';
import JsonDataTable from './json-data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function JsonEditor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved JSON Data</CardTitle>
        <CardDescription>View and share your saved JSON data.</CardDescription>
      </CardHeader>
      <CardContent>
        <JsonDataTable />
      </CardContent>
      <CardFooter>
        <AddJsonDialog/>
      </CardFooter>
    </Card>
  );
}
