import React, { useState } from 'react';

const MonthModal = ({ onClose, monthData, onSave }) => {
  const [formData, setFormData] = useState(monthData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[9999] px-2">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg relative">
        <button 
          className="absolute top-2 right-2 text-3xl" 
          onClick={onClose} 
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-6">Edit Month</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(monthData).map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full outline-none bg-[#F4EDF8]"
              />
            </div>
          ))}
          <button type="submit" className="bg-[#F4EDF8] text-black w-full px-4 py-2 rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MonthModal;
