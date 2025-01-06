import { EllipsisVertical, Gauge, Table2 } from "lucide-react";

const Card = () => {
  return (
    <>
      <section className="flex-col p-3 gap-3 mt-6 items-center justify-center flex sm:flex-row sm:items-end sm:justify-evenly sm:container mb-5 md:mb-28 w-full">
        <div className="w-full min-h-56 p-4 md:w-48 rounded-md bg-[url(https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover group-hover:opacity-75 lg:aspect-auto lg:h-64"></div>
        <div className="flex min-h-28 flex-col w-full md:w-40 rounded-md bg-green-950 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64 text-center items-center justify-center">
          <h1 className="text-white text-2xl">Over 100+</h1>
          <p className="mt-2 text-white">Our estimated clients and partners</p>
        </div>
        <div className=" flex min-h-28 flex-col justify-center items-center md:items-start md:justify-start px-5 w-full md:w-48 rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-40">
          <div className="flex gap-x-20 pt-8 mr-11">
            <span>
              <Table2 className="mt-1 rounded-md bg-[#bbf7d0] p-2" size={35}/>
            </span>
            <EllipsisVertical size={15}  />
          </div>

          <h1>Total Projects</h1>
          <h1 className="text-2xl">1951+</h1>
          <h1 className="text-[10px] text-gray-500">Incase of <span className="text-green-500">126</span>this month</h1>
        </div>
        <div className="flex min-h-28 flex-col items-center justify-center w-full md:w-40 rounded-md bg-green-100 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
          <h1 className="text-2xl">6+</h1>
          <p className="px-5 text-center">Years of Dedicated Service</p>
        </div>
        <div className=" bg-green-950 justify-center min-h-28 text-white flex flex-col items-center md:items-start md:px-6 md:justify-end w-full md:w-48 rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64">
          <Gauge />
          <p className="capitalize md:pb-4">
            Achieve optimal efficiency and Boost Productivity
          </p>
        </div>
      </section>
    </>
  );
};

export default Card;
