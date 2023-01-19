import React from "react";
import Navbar from "./Navbar";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  SocialBtn,
  CtcLpa,
} from "./Table"; 

const getData = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Trainee",
      company: "Amazon",
      department: "Engineering",
      batch: 2023,
      branch: "CS/IT",
      package: 32,
      imgUrl:
        "https://images.unsplash.com/photo-1672863601285-253fc82db868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      socials: "LinkedIn",
      socialUrl: "https://www.linkedin.com/in/imalfaiz/",
    },
    {
      id: 2,
      name: "Alex Hales",
      position: "BDA",
      company: "BYJU'S",
      department: "Management",
      batch: 2021,
      branch: "Management",
      package: 9.8,
      imgUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      socials: "Facebook",
      socialUrl: "https://www.facebook.com/",
    },
    {
      id: 3,
      name: "Tina Sharma",
      position: "Agronomist",
      company: "BharatAgri",
      department: "Agriculture",
      batch: 2019,
      branch: "Agriculture",
      package: 6.4,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      socials: "Instagram",
      socialUrl: "https://www.instagram.com/",
    },
    {
      id: 4,
      name: "Ravi Kumar",
      position: "Pharmacist",
      company: "Sun Pharma",
      department: "Pharmacy",
      batch: 2022,
      branch: "Pharmacy",
      package: 7.8,
      imgUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      socials: "Twitter",
      socialUrl: "https://www.twitter.com/imalfaiz/",
    },
  ];
  return [...data, ...data, ...data, ...data, ...data];
};

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        positionAccessor: "position",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Batch",
        accessor: "batch",
      },
      {
        Header: "Package",
        accessor: "package",
        Cell: CtcLpa,
      },
      {
        Header: "Branch",
        accessor: "branch",
        Filter: SelectColumnFilter, 
        filter: "includes",
      },
      {
        Header: "Socials",
        accessor: "socials",
        Cell: SocialBtn,
        socialAccessor: "socialUrl",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
