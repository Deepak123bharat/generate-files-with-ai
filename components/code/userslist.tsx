"use client";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

interface PageProps {}

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersList = ({}: PageProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data.data);
      setFilteredData(data.data);
    };
    fetch();
  }, []);

  useEffect(() => {
    const data = users.filter((user) => {
      if (
        user.name.toLocaleLowerCase().includes(searchInput) ||
        user.email.toLocaleLowerCase().includes(searchInput)
      ) {
        return user;
      }
    });
    setFilteredData(data);
  }, [searchInput, users]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className=" flex flex-wrap m-10 flex-col gap-10 ">
      <div className="flex">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="search"
        />
      </div>
      <div className="flex gap-10 flex-wrap">
        {filteredData ? (
          filteredData.map((user) => {
            return (
              <div
                key={user.id}
                className="w-100 h-100 bg-yellow-500 rounded-md"
              >
                <h1> {user.name}</h1>
                <h2> {user.email}</h2>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
