import React from 'react';


const Card = (props) => {
  return (
    <>
    <div class="mt-6 flex items-end justify-between">
      <div class=" w-48 rounded-md bg-[url(https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
      </div>
      <div class=" w-40 rounded-md bg-green-950 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
      </div>
      <div class=" w-48 rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-40">
      </div>
      <div class=" w-40 rounded-md bg-green-300 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
      </div>
      <div class=" w-48 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
      </div>
    </div>
    </>
  )
}

export default Card
