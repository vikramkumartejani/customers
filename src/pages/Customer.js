import React, { useState } from "react";
import Edit from "../assets/edit.svg";
import Search from "../assets/search.svg";
import "leaflet/dist/leaflet.css";
import DetailsModal from "../components/DetailsModal";
import MonthModal from "../components/MonthModal";
import Map from "../components/Map";

const Customer = () => {
  const letters = ["A", "B", "C"];
  const years = ["2024", "2023", "2022", "2021"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Table Data
  const tableData = [
    {
      id: "1",
      name: "Test Name A",
      code: "458741952",
      category: "A",
      value: 21,
      year: "2024",
      month: "January",
      details: {
        Name: "Test Name A",
        Zone: "A",
        "House No": "10",
        Telephone: "+44 4587 41952",
        Rate: "1.5",
        Discount: "0.75",
      },
      monthData: {
        "Water Consumed": "1.00",
        Invoice: "1.50",
        Receipt: "1.00",
        Balance: "-0.50",
      },
    },
    {
      id: "2",
      name: "Test Name B",
      code: "987654321",
      category: "B",
      value: 32,
      year: "2021",
      month: "February",
      details: {
        Name: "Test Name B",
        Zone: "B",
        "House No": "22",
        Telephone: "+44 9876 54321",
        Rate: "2.0",
        Discount: "1.0",
      },
      monthData: {
        "Water Consumed": "2.00",
        Invoice: "2.50",
        Receipt: "2.00",
        Balance: "-0.50",
      },
    },
    {
      id: "3",
      name: "Test Name C",
      code: "345678901",
      category: "C",
      value: 15,
      year: "2023",
      month: "March",
      details: {
        Name: "Test Name C",
        Zone: "C",
        "House No": "30",
        Telephone: "+44 3456 78901",
        Rate: "2.5",
        Discount: "1.25",
      },
      monthData: {
        "Water Consumed": "1.50",
        Invoice: "2.00",
        Receipt: "1.50",
        Balance: "-0.50",
      },
    },
    {
      id: "4",
      name: "Test Name B",
      code: "123456789",
      category: "B",
      value: 45,
      year: "2024",
      month: "April",
      details: {
        Name: "Test Name B",
        Zone: "B",
        "House No": "40",
        Telephone: "+44 1234 56789",
        Rate: "3.0",
        Discount: "1.50",
      },
      monthData: {
        "Water Consumed": "2.00",
        Invoice: "3.00",
        Receipt: "2.00",
        Balance: "-1.00",
      },
    },
    {
      id: "5",
      name: "Test Name B",
      code: "234567890",
      category: "B",
      value: 50,
      year: "2022",
      month: "May",
      details: {
        Name: "Test Name B",
        Zone: "B",
        "House No": "50",
        Telephone: "+44 2345 67890",
        Rate: "2.0",
        Discount: "1.0",
      },
      monthData: {
        "Water Consumed": "2.50",
        Invoice: "2.50",
        Receipt: "2.00",
        Balance: "0.50",
      },
    },
    {
      id: "6",
      name: "Test Name C",
      code: "456789012",
      category: "C",
      value: 23,
      year: "2023",
      month: "June",
      details: {
        Name: "Test Name C",
        Zone: "C",
        "House No": "60",
        Telephone: "+44 4567 89012",
        Rate: "3.0",
        Discount: "1.0",
      },
      monthData: {
        "Water Consumed": "1.75",
        Invoice: "2.50",
        Receipt: "1.75",
        Balance: "-0.75",
      },
    },
    {
      id: "7",
      name: "Test Name A",
      code: "567890123",
      category: "A",
      value: 29,
      year: "2024",
      month: "July",
      details: {
        Name: "Test Name A",
        Zone: "A",
        "House No": "70",
        Telephone: "+44 5678 90123",
        Rate: "3.5",
        Discount: "1.75",
      },
      monthData: {
        "Water Consumed": "2.00",
        Invoice: "3.00",
        Receipt: "2.00",
        Balance: "-1.00",
      },
    },
    {
      id: "8",
      name: "Test Name A",
      code: "678901234",
      category: "A",
      value: 40,
      year: "2024",
      month: "August",
      details: {
        Name: "Test Name A",
        Zone: "A",
        "House No": "80",
        Telephone: "+44 6789 01234",
        Rate: "4.0",
        Discount: "2.0",
      },
      monthData: {
        "Water Consumed": "2.50",
        Invoice: "3.50",
        Receipt: "2.50",
        Balance: "-1.00",
      },
    },
    {
      id: "9",
      name: "Test Name C",
      code: "789012345",
      category: "C",
      value: 28,
      year: "2021",
      month: "September",
      details: {
        Name: "Test Name C",
        Zone: "C",
        "House No": "90",
        Telephone: "+44 7890 12345",
        Rate: "2.5",
        Discount: "1.25",
      },
      monthData: {
        "Water Consumed": "2.00",
        Invoice: "2.50",
        Receipt: "2.00",
        Balance: "-0.50",
      },
    },
    {
      id: "10",
      name: "Test Name A",
      code: "890123456",
      category: "A",
      value: 34,
      year: "2023",
      month: "October",
      details: {
        Name: "Test Name A",
        Zone: "A",
        "House No": "100",
        Telephone: "+44 8901 23456",
        Rate: "3.0",
        Discount: "1.50",
      },
      monthData: {
        "Water Consumed": "2.50",
        Invoice: "3.00",
        Receipt: "2.50",
        Balance: "-0.50",
      },
    },
    {
      id: "11",
      name: "Test Name C",
      code: "901234567",
      category: "C",
      value: 22,
      year: "2022",
      month: "November",
      details: {
        Name: "Test Name C",
        Zone: "C",
        "House No": "110",
        Telephone: "+44 9012 34567",
        Rate: "2.0",
        Discount: "1.0",
      },
      monthData: {
        "Water Consumed": "1.75",
        Invoice: "2.00",
        Receipt: "1.75",
        Balance: "-0.25",
      },
    },
    {
      id: "12",
      name: "Test Name B",
      code: "012345678",
      category: "B",
      value: 36,
      year: "2021",
      month: "December",
      details: {
        Name: "Test Name B",
        Zone: "B",
        "House No": "120",
        Telephone: "+44 0123 45678",
        Rate: "4.0",
        Discount: "2.0",
      },
      monthData: {
        "Water Consumed": "3.00",
        Invoice: "4.00",
        Receipt: "3.00",
        Balance: "-1.00",
      },
    },
    {
      id: "13",
      name: "Test Name A",
      code: "123450987",
      category: "A",
      value: 27,
      year: "2021",
      month: "January",
      details: {
        Name: "Test Name A",
        Zone: "A",
        "House No": "130",
        Telephone: "+44 1234 50987",
        Rate: "2.5",
        Discount: "1.25",
      },
      monthData: {
        "Water Consumed": "2.00",
        Invoice: "2.50",
        Receipt: "2.00",
        Balance: "-0.50",
      },
    },
  ];

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);
  const [activeLetter, setActiveLetter] = useState("");
  const [activeYear, setActiveYear] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [selectedRowId, setSelectedRowId] = useState("1");
  const [details, setDetails] = useState(tableData[0].details);
  const [monthData, setMonthData] = useState(tableData[0].monthData);

  const handleRowClick = (id) => {
    const selectedItem = tableData.find((item) => item.id === id);
    if (selectedItem) {
      setSelectedRowId(id);
      setDetails(selectedItem.details);
      setMonthData(selectedItem.monthData);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterData(query, activeLetter, activeYear, activeMonth);
  };

  const filterData = (query, letter, year, month) => {
    let filtered = tableData;
    if (query) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.code.includes(query) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.value.toString().includes(query)
      );
    }
    if (letter) {
      filtered = filtered.filter((item) => item.category === letter);
    }
    if (year) {
      filtered = filtered.filter((item) => item.year === year);
    }
    if (month) {
      filtered = filtered.filter((item) => item.month === month);
    }
    setFilteredData(filtered);
  };

  const handleFilterClick = (type, value) => {
    if (type === "letter") {
      const newLetter = activeLetter === value ? "" : value;
      setActiveLetter(newLetter);
      filterData(searchQuery, newLetter, activeYear, activeMonth);
    } else if (type === "year") {
      const newYear = activeYear === value ? "" : value;
      setActiveYear(newYear);
      filterData(searchQuery, activeLetter, newYear, activeMonth);
    } else if (type === "month") {
      const newMonth = activeMonth === value ? "" : value;
      setActiveMonth(newMonth);
      filterData(searchQuery, activeLetter, activeYear, newMonth);
    }
  };

  // Modal
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isMonthModalOpen, setMonthModalOpen] = useState(false);

  const toggleDetailsModal = () => setDetailsModalOpen(!isDetailsModalOpen);
  const toggleMonthModal = () => setMonthModalOpen(!isMonthModalOpen);

  const handleSaveDetails = (updatedDetails) => {
    setDetails(updatedDetails);
  };

  const handleSaveMonthData = (updatedMonthData) => {
    setMonthData(updatedMonthData);
  };

  return (
    <div className="customer-main flex items-start gap-5 w-full lg:h-full sm:px-0">
      <div className="tables-and-map md:h-full max-w-[1195px] w-full mx-auto">
        <div className="flex-1 flex justify-start gap-7 xl:flex-row flex-col ">
          <div className=" bg-white shadow-custom flex-1  rounded-[24px] p-3 py-4 sm:p-5  min-w-[300px]">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[#121212] md:text-[20px] text-[18px]  md:leading-[28px] leading-[20px] font-ibmplexsans font-semibold">
                Names
              </h2>
              <div className="bg-[#F4EDF8] rounded-[100px] h-[38px] px-5 flex items-center gap-4">
                <span className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]">
                  <img src={Search} alt="Search" />
                </span>
                <input
                  type="text"
                  placeholder="Find Names"
                  className="bg-transparent w-full outline-none text-[14px] leading-[18px] font-ibmplexsans font-normal"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            {/* Table */}
            <div className="mt-5 w-full table-container h-[339px] lg:containerone overflow-auto pr-2 md:pr-3 ">
              <table className="w-full">
                <tbody className="divide-gray-200 flex flex-col gap-5">
                  {filteredData.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => handleRowClick(item.id)}
                      className={`flex items-center justify-between gap-5 rounded-[10px] h-[51px] cursor-pointer ${
                        selectedRowId === item.id
                          ? "bg-[#6100A2] text-white"
                          : "bg-[#EDE9FE] text-[#49454F]"
                      } hover:bg-[#6100A2] hover:text-white`}
                    >
                      <td className="px-3 md:px-6 whitespace-nowrap md:text-[16px] text-[14px] md:leading-[16px] font-normal">
                        {item.name}
                      </td>
                      <td className="px-3 md:px-6 whitespace-nowrap md:text-[16px] text-[14px] md:leading-[16px] font-normal">
                        {item.code}
                      </td>
                      <td className="px-3 md:px-6 whitespace-nowrap md:text-[16px] text-[14px] md:leading-[16px] font-normal">
                        {item.category}
                      </td>
                      <td className="px-3 md:px-6 whitespace-nowrap md:text-[16px] text-[14px] md:leading-[16px] font-normal">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Details & Month */}
          <div className="flex-1 flex-wrap flex flex-col gap-4 w-full">
            {/* Details */}
            <div>
              <h3 className="text-[#121212] md:text-[20px] text-[18px] md:leading-[28px] leading-[25px] font-ibmplexsans font-semibold mb-3">
                Details
              </h3>
              <div className="bg-white rounded-[20px] px-4 sm:px-[30px] py-5">
                <div className="flex items-end justify-end">
                  <div
                    onClick={toggleDetailsModal}
                    className="flex w-[100px] cursor-pointer relative z-10 flex-wrap items-center justify-end gap-3"
                  >
                    <h4 className="text-[#121212] text-[14px] font-medium font-ibmplexsans leading-[18.2px]">
                      Edit
                    </h4>
                    <button>
                      <img src={Edit} alt="Edit" width={15} height={15} />
                    </button>
                  </div>
                </div>
                <div className="mt-[-14px] flex flex-col gap-5">
                  {Object.keys(details).map((key, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <h2 className="text-[#202020] md:text-[17px] sm:text-[15px] text-[16px] md:leading-[19px] sm:leading-[16px] leading-[14px] font-medium">
                        {key}:
                      </h2>
                      <h4 className="text-[#202020] md:text-[17px] sm:text-[15px] text-[16px] md:leading-[19px] sm:leading-[16px] leading-[14px] text-nowrap font-normal">
                        {details[key]}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Month */}
            <div className="bg-white rounded-[20px] sm:w-auto w-full px-4 sm:px-[20px] py-5">
              <div className="flex items-center w-full justify-end gap-3">
                <h4 className="text-[#121212] text-[14px] font-medium font-ibmplexsans leading-[18.2px]">
                  Edit
                </h4>
                <button onClick={toggleMonthModal}>
                  <img src={Edit} alt="Edit" width={15} height={15} />
                </button>
              </div>
              <h2 className="text-[#121212] md:text-[20px] text-[18px] md:leading-[26px] leading-[20px] font-semibold font-ibmplexsans mt-[-14px]">
                Month: August
              </h2>
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-3">
                {Object.keys(monthData).map((key, index) => (
                  <div
                    key={index}
                    className="bg-[#65558F1A] md:h-[63px] h-fit pt-0.5 rounded-xl flex items-center justify-center flex-col text-center px-[10px]"
                  >
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] font-semibold">
                      {key}
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      {monthData[key]}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            {isDetailsModalOpen && (
              <DetailsModal
                onClose={toggleDetailsModal}
                details={details}
                onSave={handleSaveDetails}
              />
            )}

            {isMonthModalOpen && (
              <MonthModal
                onClose={toggleMonthModal}
                monthData={monthData}
                onSave={handleSaveMonthData}
              />
            )}
          </div>
        </div>

        <Map />
      </div>

      {/* Filter By Letter */}
      <div className="filter-container bg-white w-full lg:max-w-[338px] xl:h-full max-w-full rounded-[24px] md:h-fit p-5">
        <h2 className="text-[#121212] md:text-[20px] text-[18px] md:leading-[28px] font-semibold font-ibmplexsans pb-5">
          Filter By Letter
        </h2>
        <div className="flex flex-wrap item gap-3">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`md:w-[86px] w-[48px] h-[48px] ${
                letter === activeLetter
                  ? "bg-[#6100A2] text-white"
                  : "bg-[#65558F1A] text-[#262626]"
              } rounded-xl text-[16px] leading-[30px] font-semibold flex items-center justify-center cursor-pointer`}
              onClick={() => handleFilterClick("letter", letter)}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Filter By Year */}
        <h2 className="text-[#121212] md:text-[20px] text-[18px] md:leading-[28px] font-semibold font-ibmplexsans pb-5 pt-8">
          Filter By Year
        </h2>
        <div className="flex flex-wrap item gap-3 flex-wrap">
          {years.map((year, index) => (
            <div
              key={index}
              className={`md:w-[86px] w-[70px] h-[48px] ${
                year === activeYear
                  ? "bg-[#6100A2] text-white"
                  : "bg-[#65558F1A] text-[#262626]"
              } rounded-xl text-[16px] leading-[30px] font-semibold flex items-center justify-center cursor-pointer`}
              onClick={() => handleFilterClick("year", year)}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Filter By Month */}
        <h2 className="text-[#121212] md:text-[22px] text-[18px] md:leading-[28.6px] font-semibold font-ibmplexsans pb-5 py-8">
          Filter By Month
        </h2>
        <div className="flex item gap-3 flex-wrap">
          {months.map((month, index) => (
            <div
              key={index}
              className={`w-[90px] h-[48px] ${
                month === activeMonth
                  ? "bg-[#6100A2] text-white"
                  : "bg-[#65558F1A] text-[#262626]"
              } rounded-xl text-[13px] leading-[30px] font-semibold flex items-center justify-center cursor-pointer`}
              onClick={() => handleFilterClick("month", month)}
            >
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
