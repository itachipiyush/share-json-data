// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { JsonData } from "@prisma/client";
// import { format } from "date-fns";
// import { ShareIcon } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function JsonDataTable() {
//   const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("api/json");
//       const data = await response.json();

//       setJsonDataList(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return "loading...";
//   }
//   if (!jsonDataList.length) {
//     return (
//       <div className="text-center text-gray-500 mt-6">
//         No data available, please add new entry!
//       </div>
//     );
//   }
//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Name</TableHead>
//           <TableHead>Created At</TableHead>
//           <TableHead>
//             <span className="sr-only">Share</span>
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {jsonDataList.map((data) => (
//           <TableRow key={data.id}>
//             <TableCell>{data.name}</TableCell>
//             <TableCell>
//               {format(new Date(data.createdAt), "MMMM d, yyyy")}
//             </TableCell>
//             <TableCell>
//               <Link href={`/${data.id}`}>
//                 <ShareIcon className='h-4 w-4'/>
//               </Link>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JsonData } from "@prisma/client";
import { format } from "date-fns";
import { ShareIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function JsonDataTable() {
  const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/json");
      const data = await response.json();
      setJsonDataList(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this JSON data?");
    if (confirmed) {
      try {
        await fetch(`/api/json/${id}`, {
          method: "DELETE",
        });
        // Update the state after deletion
        setJsonDataList((prev) => prev.filter((data) => data.id !== id));
        alert("Data deleted successfully!");
      } catch (error) {
        console.error("Failed to delete data", error);
      }
    }
  };

  const handleCopyLinkAndNavigate = async (id: string) => {
    const link = `${window.location.origin}/${id}`;
    await navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    router.push(`/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!jsonDataList.length) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No data available, please add new entry!
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className="sr-only">Share</span>
          </TableHead>
          <TableHead>
            <span className="sr-only">Delete</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{format(new Date(data.createdAt), "MMMM d, yyyy")}</TableCell>
            <TableCell>
              <button
                onClick={() => handleCopyLinkAndNavigate(data.id)}
                className="flex items-center justify-center p-2 text-gray-600 hover:text-blue-600"
                aria-label="Copy link to clipboard and navigate"
              >
                <ShareIcon className="h-4 w-4" />
              </button>
              {copiedId === data.id && (
                <span className="text-green-500 ml-2">Copied!</span>
              )}
            </TableCell>
            <TableCell>
              <button
                onClick={() => handleDelete(data.id)}
                className="flex items-center justify-center p-2 text-gray-600 hover:text-red-600"
                aria-label="Delete this entry"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
