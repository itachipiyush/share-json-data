// export default function Home() {
//   return (
//     <div className="space-y-2 mt-10">
//       <h1 className="text-3xl font-bold sm:text-5xl">Share Your Data </h1>
//       <p className="max-w-[600px] text-muted-foreground md:text-xl">
//         Our App makes it easy to share your data with others and provides a
//         great experience.
//       </p>
//     </div>
//   );
// }
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="space-y-6 mt-10 px-4">
//       <h1 className="text-3xl font-bold sm:text-5xl">Share JSON Data</h1>
//       <p className="max-w-[600px] text-muted-foreground md:text-xl">
//         Welcome to the <strong>Share JSON Data</strong> application! This guide will help you navigate the app and understand how to use its features effectively.
//       </p>
      
//       <h2 className="text-2xl font-semibold">Table of Contents</h2>
//       <ul className="list-disc list-inside space-y-2">
//         <li><a href="#getting-started" className="text-blue-500 hover:underline">Getting Started</a></li>
//         <li><a href="#signing-in" className="text-blue-500 hover:underline">Signing In</a></li>
//         <li><a href="#dashboard-overview" className="text-blue-500 hover:underline">Dashboard Overview</a></li>
//         <li><a href="#adding-json-data" className="text-blue-500 hover:underline">Adding JSON Data</a></li>
//         <li><a href="#viewing-your-json-data" className="text-blue-500 hover:underline">Viewing Your JSON Data</a></li>
//         <li><a href="#logging-out" className="text-blue-500 hover:underline">Logging Out</a></li>
//       </ul>

//       <hr className="my-4" />

//       <h2 id="getting-started" className="text-2xl font-semibold">Getting Started</h2>
//       <p>
//         1. <strong>Access the Application</strong>: Visit the website at <a href="#" className="text-blue-500 hover:underline">share-json-data.vercel.app</a> to get started.
//       </p>
//       <p>
//         2. <strong>Sign In</strong>: Before you can access the dashboard and manage your JSON data, you need to sign in.
//       </p>

//       <h2 id="signing-in" className="text-2xl font-semibold">Signing In</h2>
//       <p>
//         - Click the <strong>Sign In</strong> button located on the top right corner of the homepage.
//       </p>
//       <p>
//         - Enter your credentials (email and password).
//       </p>
//       <p>
//         - Once signed in, you will be redirected to your dashboard.
//       </p>
//       <Image 
//         src="/images/signin.png" 
//         alt="Sign In Example" 
//         width={720} // Adjust width as needed
//         height={1000} // Adjust height as needed
//         className="w-full max-w-md rounded-md shadow-md h-auto"
//       />

//       <h2 id="dashboard-overview" className="text-2xl font-semibold">Dashboard Overview</h2>
//       <p>
//         Upon signing in, you will see your dashboard, which includes:
//       </p>
//       <ul className="list-disc list-inside">
//         <li>A summary of your saved JSON data.</li>
//         <li>Options to manage your JSON data, including adding new entries.</li>
//       </ul>
//       <Image 
//         src="/images/dashboard.png" 
//         alt="Dashboard Overview" 
//         width={500} // Adjust width as needed
//         height={300} // Adjust height as needed
//         className="w-full max-w-md rounded-md shadow-md"
//       />

//       <h2 id="adding-json-data" className="text-2xl font-semibold">Adding JSON Data</h2>
//       <p>To add new JSON data:</p>
//       <ol className="list-decimal list-inside space-y-2">
//         <li>Click on the <strong>Add JSON Data</strong> button on your dashboard.</li>
//         <li>A form will appear where you can input your JSON data.</li>
//         <li>Fill in the required fields with your JSON content.</li>
//         <li>Click <strong>Save</strong> to add the data to your dashboard.</li>
//       </ol>

//       <h3 className="text-xl font-semibold">JSON Format Example</h3>
//       <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
//         <code>{`{
//   "name": "Example Data",
//   "type": "example",
//   "content": {
//     "key1": "value1",
//     "key2": "value2"
//   }
// }`}</code>
//       </pre>

//       <h2 id="viewing-your-json-data" className="text-2xl font-semibold">Viewing Your JSON Data</h2>
//       <p>
//         - After adding data, it will appear in the list on your dashboard.
//       </p>
//       <p>
//         - Click on any JSON entry to view its details or make edits.
//       </p>
//       <Image 
//         src="/images/viewjson.png" 
//         alt="Viewing JSON Data" 
//         width={500} // Adjust width as needed
//         height={300} // Adjust height as needed
//         className="w-full max-w-md rounded-md shadow-md"
//       />
//       <h2 id="sharing-your-json-data" className="text-2xl font-semibold">Sharing Your JSON Data</h2>
//       <p>
//         - After adding data, it will appear in the list on your dashboard.
//       </p>
//       <p>
//         - Click on any JSON entry to view its details or make edits.
//         - It will automatically copy url link to clipboard.
//         - Now you can share that url link with others.
//       </p>
//       <Image 
//         src="/images/sharejson.png" 
//         alt="sharing JSON Data" 
//         width={500} // Adjust width as needed
//         height={300} // Adjust height as needed
//         className="w-full max-w-md rounded-md shadow-md"
//       />

//       <h2 id="logging-out" className="text-2xl font-semibold">Logging Out</h2>
//       <p>
//         To log out of your account:
//       </p>
//       <ul className="list-disc list-inside">
//         <li>Click on your profile icon in the top right corner of the dashboard.</li>
//         <li>Select <strong>Log Out</strong> from the dropdown menu.</li>
//       </ul>

//       <hr className="my-4" />

//       <p>
//         Thank you for using the <strong>Share JSON Data</strong> application! If you have any questions or need further assistance, please contact our support team at <a href="mailto:itachipiyushgaming@gmail.com" className="text-blue-500 hover:underline">Piyush</a>.
//       </p>
//     </div>
//   );
// }

// src/app/page.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from '@/components/ImageModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="space-y-6 mt-10 px-4">
      <h1 className="text-3xl font-bold sm:text-5xl">Share JSON Data</h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Welcome to the <strong>Share JSON Data</strong> application! This guide will help you navigate the app and understand how to use its features effectively.
      </p>

      <h2 className="text-2xl font-semibold">Table of Contents</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><a href="#getting-started" className="text-blue-500 hover:underline">Getting Started</a></li>
        <li><a href="#signing-in" className="text-blue-500 hover:underline">Signing In</a></li>
        <li><a href="#dashboard-overview" className="text-blue-500 hover:underline">Dashboard Overview</a></li>
        <li><a href="#adding-json-data" className="text-blue-500 hover:underline">Adding JSON Data</a></li>
        <li><a href="#viewing-your-json-data" className="text-blue-500 hover:underline">Viewing Your JSON Data</a></li>
        <li><a href="#logging-out" className="text-blue-500 hover:underline">Logging Out</a></li>
      </ul>

      <hr className="my-4" />

      <h2 id="getting-started" className="text-2xl font-semibold">Getting Started</h2>
      <p>
        1. <strong>Access the Application</strong>: Visit the website at <a href="#" className="text-blue-500 hover:underline">share-json-data.vercel.app</a> to get started.
      </p>
      <p>
        2. <strong>Sign In</strong>: Before you can access the dashboard and manage your JSON data, you need to sign in.
      </p>

      <h2 id="signing-in" className="text-2xl font-semibold">Signing In</h2>
      <p>
        - Click the <strong>Sign In</strong> button located on the top right corner of the homepage.
      </p>
      <p>
        - Enter your credentials (email and password).
      </p>
      <p>
        - Once signed in, you will be redirected to your dashboard.
      </p>
      <Image 
        src="/images/signin.png" 
        alt="Sign In Example" 
        width={720} 
        height={1000} 
        className="w-full max-w-md rounded-md shadow-md h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => handleImageClick('/images/signin.png')} // Open modal on image click
      />

      <h2 id="dashboard-overview" className="text-2xl font-semibold">Dashboard Overview</h2>
      <p>
        Upon signing in, you will see your dashboard, which includes:
      </p>
      <ul className="list-disc list-inside">
        <li>A summary of your saved JSON data.</li>
        <li>Options to manage your JSON data, including adding new entries.</li>
      </ul>
      <Image 
        src="/images/dashboard.png" 
        alt="Dashboard Overview" 
        width={500} 
        height={300} 
        className="w-full max-w-md rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => handleImageClick('/images/dashboard.png')} // Open modal on image click
      />

      <h2 id="adding-json-data" className="text-2xl font-semibold">Adding JSON Data</h2>
      <p>To add new JSON data:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Click on the <strong>Add JSON Data</strong> button on your dashboard.</li>
        <li>A form will appear where you can input your JSON data.</li>
        <li>Fill in the required fields with your JSON content.</li>
        <li>Click <strong>Save</strong> to add the data to your dashboard.</li>
      </ol>

      <h3 className="text-xl font-semibold">JSON Format Example</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
        <code>{`{
  "name": "Example Data",
  "type": "example",
  "content": {
    "key1": "value1",
    "key2": "value2"
  }
}`}</code>
      </pre>

      <h2 id="viewing-your-json-data" className="text-2xl font-semibold">Viewing Your JSON Data</h2>
      <p>
        - After adding data, it will appear in the list on your dashboard.
      </p>
      <p>
        - Click on any JSON entry to view its details or make edits.
      </p>
      <Image 
        src="/images/viewjson.png" 
        alt="Viewing JSON Data" 
        width={500} 
        height={300} 
        className="w-full max-w-md rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => handleImageClick('/images/viewjson.png')} // Open modal on image click
      />
      <h2 id="sharing-your-json-data" className="text-2xl font-semibold">Sharing Your JSON Data</h2>
      <p>
        - After adding data, it will appear in the list on your dashboard.
      </p>
      <p>
        - Click on any JSON entry to view its details or make edits.
        - It will automatically copy the URL link to clipboard.
        - Now you can share that URL link with others.
      </p>
      <Image 
        src="/images/sharejson.png" 
        alt="Sharing JSON Data" 
        width={500} 
        height={300} 
        className="w-full max-w-md rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        onClick={() => handleImageClick('/images/sharejson.png')} // Open modal on image click
      />

      <h2 id="logging-out" className="text-2xl font-semibold">Logging Out</h2>
      <p>
        To log out of your account:
      </p>
      <ul className="list-disc list-inside">
        <li>Click on your profile icon in the top right corner of the dashboard.</li>
        <li>Select <strong>Log Out</strong> from the dropdown menu.</li>
      </ul>

      <hr className="my-4" />

      <p>
        Thank you for using the <strong>Share JSON Data</strong> application! If you have any questions or need further assistance, please contact our support team at <a href="mailto:itachipiyushgaming@gmail.com" className="text-blue-500 hover:underline">Piyush</a>.
      </p>

      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </div>
  );
}
