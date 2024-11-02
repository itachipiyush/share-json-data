// "use client";

// import { useState } from "react";
// import AddJsonDialog from "./add-json-dialog";
// import JsonDataTable from "./json-data-table";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function JsonEditor() {
//   const [refreshKey, setRefreshKey] = useState(0);

//   const handleSave = async (jsonName: string, jsonData: string) => {
//     const response = await fetch("api/json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: jsonName, content: jsonData }),
//     });

//     if (!response.ok) {
//       setRefreshKey((prev) => prev + 1);
//       console.log("data successfully added");
//     } else {
//       console.log("Something went wrong");
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Saved JSON Data</CardTitle>
//         <CardDescription>View and share your saved JSON data.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <JsonDataTable key={refreshKey} />
//       </CardContent>
//       <CardFooter>
//         <AddJsonDialog onSave={handleSave} />
//       </CardFooter>
//     </Card>
//   );
// }
"use client";

import { useState } from "react";
import AddJsonDialog from "./add-json-dialog";
import JsonDataTable from "./json-data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function JsonEditor() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSave = async (jsonName: string, jsonData: string) => {
    const response = await fetch("api/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: jsonName, content: jsonData }),
    });

    if (response.ok) {
      // Only increment refreshKey if the response is successful
      setRefreshKey((prev) => prev + 1);
      console.log("Data successfully added");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved JSON Data</CardTitle>
        <CardDescription>View and share your saved JSON data.</CardDescription>
      </CardHeader>
      <CardContent>
        <JsonDataTable key={refreshKey} /> {/* Using refreshKey to force a re-render */}
      </CardContent>
      <CardFooter>
        <AddJsonDialog onSave={handleSave} />
      </CardFooter>
    </Card>
  );
}
