import React from 'react';

export default function ProductSidebar() {
  return (
    <aside className="w-full lg:w-1/4">
      {/* Filter by Category */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-ampharDarkBlue mb-4 border-b border-gray-200 pb-2">
          Filter by Category
        </h3>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">General Medicine (24)</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Pediatrics (12)</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Orthopedic (8)</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Dermatology (15)</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Cardiology (10)</span>
            </label>
          </li>
        </ul>
      </div>

      {/* Product Type */}
      <div>
        <h3 className="text-lg font-bold text-ampharDarkBlue mb-4 border-b border-gray-200 pb-2">
          Product Type
        </h3>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Tablets & Capsules</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Syrups & Liquids</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Ointments & Creams</span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-ampharLightBlue rounded border-gray-300 focus:ring-ampharLightBlue" />
              <span className="ml-3 text-gray-600">Injectables</span>
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
}
