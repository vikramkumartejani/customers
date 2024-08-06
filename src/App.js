import "./App.css";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Edit from "./assets/edit.svg";
import Search from "./assets/search.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  // Map
  const position = [38.9072, -77.0369]; // Coordinates for Washington, DC

  // Details
  const detailsData = [
    { label: "Name:", value: "Test Name" },
    { label: "Zone:", value: "A" },
    { label: "House No:", value: "20" },
    { label: "Telephone:", value: "+44 4587 41952" },
    { label: "Rate:", value: "1.5" },
    { label: "Discount:", value: "0.75" },
  ];

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
      name: "Test Name A",
      code: "458741952",
      category: "A",
      value: 21,
      year: "2024",
      month: "January",
    },
    {
      name: "Test Name B",
      code: "458741952",
      category: "A",
      value: 21,
      year: "2023",
      month: "February",
    },
    {
      name: "Test Name C",
      code: "458741952",
      category: "A",
      value: 21,
      year: "2022",
      month: "March",
    },
    {
      name: "Test Name D",
      code: "458741953",
      category: "B",
      value: 22,
      year: "2021",
      month: "April",
    },
    {
      name: "Test Name E",
      code: "458741954",
      category: "B",
      value: 23,
      year: "2024",
      month: "May",
    },
    {
      name: "Test Name F",
      code: "458741955",
      category: "B",
      value: 24,
      year: "2023",
      month: "June",
    },
    {
      name: "Test Name G",
      code: "458741956",
      category: "C",
      value: 25,
      year: "2022",
      month: "July",
    },
    {
      name: "Test Name H",
      code: "458741957",
      category: "C",
      value: 26,
      year: "2021",
      month: "August",
    },
    {
      name: "Test Name I",
      code: "458741958",
      category: "C",
      value: 27,
      year: "2024",
      month: "September",
    },
    {
      name: "Test Name J",
      code: "458741959",
      category: "A",
      value: 28,
      year: "2023",
      month: "October",
    },
    {
      name: "Test Name K",
      code: "458741960",
      category: "A",
      value: 29,
      year: "2022",
      month: "November",
    },
    {
      name: "Test Name L",
      code: "458741961",
      category: "A",
      value: 30,
      year: "2021",
      month: "December",
    },
  ];

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);
  const [activeLetter, setActiveLetter] = useState("");
  const [activeYear, setActiveYear] = useState("");
  const [activeMonth, setActiveMonth] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
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

  return (
    <Layout>
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
                    {filteredData.map((item, index) => (
                      <tr
                        key={index}
                        onClick={() => handleRowClick(index)}
                        className={`flex items-center justify-between gap-5 rounded-[10px] h-[51px] cursor-pointer ${
                          selectedRowIndex === index
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
                <div className="bg-white rounded-[20px] px-4  sm:px-[30px] py-5">
                  <div className="flex flex-wrap items-center w-full justify-end gap-3">
                    <h4 className="text-[#121212] text-[14px] font-medium font-ibmplexsans leading-[18.2px]">
                      Edit
                    </h4>
                    <button>
                      <img src={Edit} alt="Edit" width={15} height={15} />
                    </button>
                  </div>
                  <div className="mt-[-14px] flex flex-col gap-5">
                    {detailsData.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <h2 className="text-[#202020] md:text-[17px] sm:text-[15px] text-[16px] md:leading-[19px] sm:leading-[16px] leading-[14px] font-medium">
                          {detail.label}
                        </h2>
                        <h4 className="text-[#202020] md:text-[17px] sm:text-[15px] text-[16px] md:leading-[19px] sm:leading-[16px] leading-[14px] text-nowrap font-normal">
                          {detail.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Month */}
              <div className="bg-white rounded-[20px] sm:w-auto w-full px-4 sm:px-[30px] py-5">
                <div className="flex items-center w-full justify-end gap-3">
                  <h4 className="text-[#121212] text-[14px] font-medium font-ibmplexsans leading-[18.2px]">
                    Edit
                  </h4>
                  <button>
                    <img src={Edit} alt="Edit" width={15} height={15} />
                  </button>
                </div>
                <h2 className="text-[#121212] md:text-[20px] text-[18px] md:leading-[26px] leading-[20px] font-semibold font-ibmplexsans mt-[-14px]">
                  Month: August
                </h2>
                <div className="mt-3.5 flex items-center flex-wrap justify-between gap-3">
                  <div className="bg-[#65558F1A] sm:w-[154px] w-full md:h-[63px] h-fit pt-0.5 rounded-xl text-center px-[10px]">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Water Consumed
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.00
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] sm:w-[95px] w-full md:h-[63px] h-fit pt-0.5 rounded-xl text-center px-[10px]">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Invoice
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.50
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] sm:w-[95px] w-full md:h-[63px] h-fit pt-0.5 rounded-xl text-center px-[10px]">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Receipt
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.00
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] sm:w-[95px] w-full md:h-[63px] h-fit pt-0.5 rounded-xl text-center px-[10px]">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Balance
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      -0.50
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <section className="bg-white p-1 mt-7 rounded-[24px] w-full md:max-w-[1195px]">
            <MapContainer
              center={position}
              zoom={13}
              attributionControl={false}
              zoomControl={false}
              className="max-w-full w-full h-[360px] rounded-[24px]"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup className="custom-popup">
                  <div className="popup-content">
                    <div className="popup-title">Map Street</div>
                    <div className="popup-address">John Bucarest St. 199</div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </section>
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
    </Layout>
  );
}

export default App;
