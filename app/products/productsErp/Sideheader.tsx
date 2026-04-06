import React from 'react'

const Sideheader = () => {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24 z-50">
      <h1 className="text-blue-700 text-4xl font-semibold leading-tight">
        Built for the way your business works
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed">
        Modules built specifically for your industry so every team works with
        tools shaped around how they actually operate.
      </p>
    </div>
  );
}; 

export default Sideheader;
