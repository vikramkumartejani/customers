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

  // Letters & Years & Months
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

  // Table
  const tableData = [
    { name: "Test Name A", code: "458741952", category: "A", value: 21 },
    { name: "Test Name B", code: "458741952", category: "A", value: 21 },
    { name: "Test Name C", code: "458741952", category: "A", value: 21 },
    { name: "Test Name D", code: "458741952", category: "A", value: 21 },
    { name: "Test Name E", code: "458741952", category: "A", value: 21 },
    { name: "Test Name F", code: "458741952", category: "A", value: 21 },
    { name: "Test Name G", code: "458741952", category: "A", value: 21 },
    { name: "Test Name H", code: "458741952", category: "A", value: 21 },
    { name: "Test Name I", code: "458741952", category: "A", value: 21 },
    { name: "Test Name J", code: "458741952", category: "A", value: 21 },
    { name: "Test Name K", code: "458741952", category: "A", value: 21 },
  ];

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = tableData.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.code.includes(query) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.value.toString().includes(query)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(tableData);
    }
  };

  return (
    <Layout>
      <div className="customer-main flex-wrap flex items-start gap-5 w-full lg:h-full sm:px-0">
        <div className="tables-and-map md:h-fit max-w-[1195px] w-full mx-auto">
          <div className="flex-1 flex justify-start gap-7 xl:flex-row flex-col">
            <div className=" bg-white shadow-custom flex-1 overflow-auto rounded-[24px] p-3 py-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[#121212] md:text-[24px] text-[20px] leading-[31px] font-ibmplexsans font-semibold">
                  Names
                </h2>
                <div className="bg-[#F4EDF8] rounded-[100px] h-[38px] px-5 flex items-center gap-4">
                  <span className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]">
                    <img src={Search} alt="Search" />
                  </span>
                  <input
                    type="text"
                    placeholder="Find Names"
                    className="bg-transparent outline-none text-[14px] leading-[18px] font-ibmplexsans font-normal"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div className=" mt-5 w-full h-[339px] lg:containerone pr-2 md:pr-3">
                <table className="w-full">
                  <tbody className=" divide-gray-200 flex flex-col gap-5 mb-6">
                    {filteredData.map((item, index) => (
                      <tr
                        key={index}
                        className={`flex items-center justify-between gap-5 rounded-[10px] h-[51px] ${
                          index === 1
                            ? "bg-[#6100A2] text-white"
                            : "bg-[#EDE9FE] text-[#49454F] "
                        }`}
                      >
                        <h2 className="px-3 md:px-6 whitespace-nowrap md:text-[18px] text-[14px] md:leading-[19px] font-normal">
                          {item.name}
                        </h2>
                        <div className="flex items-center gap-3">
                          <td className="px-3 md:px-6 whitespace-nowrap md:text-[18px] text-[14px] md:leading-[19px] font-normal">
                            {item.code}
                          </td>
                          <td className="px-3 md:px-6 whitespace-nowrap md:text-[18px] text-[14px] md:leading-[19px] font-normal">
                            {item.category}
                          </td>
                          <td className="px-3 md:px-6 whitespace-nowrap md:text-[18px] text-[14px] md:leading-[19px] font-normal">
                            {item.value}
                          </td>
                        </div>
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
                <h3 className="text-[#121212] md:text-[24px] text-[20px] md:leading-[31px] leading-[25px] font-ibmplexsans font-semibold mb-3">
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
                        <h2 className="text-[#202020] md:text-[23px] sm:text-[18px] text-[15px] md:leading-[19px] sm:leading-[16px] leading-[14px] font-medium">
                          {detail.label}
                        </h2>
                        <h4 className="text-[#202020] md:text-[23px] sm:text-[18px] text-[15px] md:leading-[19px] sm:leading-[16px] leading-[14px] text-nowrap font-normal">
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
                <div className="mt-3.5 flex items-center flex-wrap justify-between gap-4">
                  <div className="bg-[#65558F1A] w-fit md:h-[63px] h-fit pt-0.5 rounded-xl text-center">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Water Consumed
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.00
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] w-fit md:h-[63px] h-fit pt-0.5 rounded-xl text-center">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Invoice
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.50
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] w-fit md:h-[63px] h-fit pt-0.5 rounded-xl text-center">
                    <h3 className="text-[#65558F] md:text-[14px] text-[12px] md:leading-[30px] leading-[25px] font-semibold">
                      Receipt
                    </h3>
                    <h2 className="text-[#262626] md:text-[16px] text-[15px] md:leading-[30px] leading-[25px] font-semibold">
                      1.00
                    </h2>
                  </div>
                  <div className="bg-[#65558F1A] w-fit md:h-[63px] h-fit pt-0.5 rounded-xl text-center">
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

        {/* Filter By Year */}
        <div className="filter-container bg-white w-full lg:max-w-[338px] xl:h-full max-w-full rounded-[24px] md:h-fit p-5">
          <h2 className="text-[#121212] md:text-[22px] text-[18px] md:leading-[28.6px] font-semibold font-ibmplexsans pb-5">
            Filter By Year
          </h2>
          <div className="flex item gap-3">
            {letters.map((letter, index) => (
              <div
                key={index}
                className={`md:w-[86px] w-[48px] h-[48px] ${
                  letter === "B"
                    ? "bg-[#6100A2] text-white"
                    : "bg-[#65558F1A] text-[#262626]"
                } rounded-xl text-[16px] leading-[30px] font-semibold flex items-center justify-center`}
              >
                {letter}
              </div>
            ))}
          </div>

          <h2 className="text-[#121212] md:text-[22px] text-[18px] md:leading-[28.6px] font-semibold font-ibmplexsans pb-5 pt-8">
            Filter By Year
          </h2>
          <div className="flex item gap-3 flex-wrap">
            {years.map((year, index) => (
              <div
                key={index}
                className={`md:w-[86px] w-[70px] h-[48px] ${
                  year === "2023"
                    ? "bg-[#6100A2] text-white"
                    : "bg-[#65558F1A] text-[#262626]"
                } rounded-xl text-[16px] leading-[30px] font-semibold flex items-center justify-center`}
              >
                {year}
              </div>
            ))}
          </div>

          <h2 className="text-[#121212] md:text-[22px] text-[18px] md:leading-[28.6px] font-semibold font-ibmplexsans pb-5 py-8">
            Filter By Month
          </h2>
          <div className="flex item  gap-3 flex-wrap">
            {months.map((month, index) => (
              <div
                key={index}
                className={`w-[90px] h-[48px] ${
                  month === "May"
                    ? "bg-[#6100A2] text-white"
                    : "bg-[#65558F1A] text-[#262626]"
                } rounded-xl text-[13px] leading-[30px] font-semibold flex items-center justify-center`}
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
