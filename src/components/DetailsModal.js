import React, { useState } from 'react';

const DetailsModal = ({ onClose, details, onSave }) => {
  const [formData, setFormData] = useState(details);

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
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center px-2" style={{zIndex:'9999'}}>
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <button className="text-end w-full text-2xl " onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Details</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(details).map((key) => (
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

export default DetailsModal;
