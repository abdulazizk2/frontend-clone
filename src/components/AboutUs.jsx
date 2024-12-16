import { CircleCheck } from "lucide-react"

const AboutUs = () => {
  return (
    <div className="container bg-white text-center pt-7 rounded-md text-black pb-10">
      <div className="flex items-center justify-center gap-10 mt-20">
        <div className="max-w-[55%]">
          <img src="../card.png" alt="product-card" className="bg-slate-100 border rounded-xl p-10" />
        </div>
        <div className="max-w-[45%] text-left"><h1 className="text-4xl mt-8 mb-5 capitalize">Key Benefits of our system for <span className="capitalize">your business efficiency</span></h1>
          <p className="font-[16px] text-gray-500">Our systems boosts productivity cut costs, and drive business gorwth.</p>
          <div>
            <div className="flex items-center mt-12">
              <CircleCheck />
              <h2 className="ml-4 text-2xl">Boosting quality with tech</h2>
            </div>
            <p className="px-10 font-[16px] text-gray-500 mt-3">With advanced technology, we help you achieve top product quality.
            Discover how we can enhance your standards.</p>
            <div className="flex items-center mt-2">
              <CircleCheck />
              <h2 className="ml-4 text-2xl">Boosting quality with tech</h2>
            </div>
            <p className="px-10 font-[16px] text-gray-500 mt-3">With advanced technology, we help you achieve top product quality.
            Discover how we can enhance your standards.</p>
            <div className="flex items-center mt-2">
              <CircleCheck />
              <h2 className="ml-4 text-2xl">Boosting quality with tech</h2>
            </div>
            <p className="px-10 font-[16px] text-gray-500 mt-3">With advanced technology, we help you achieve top product quality.
            Discover how we can enhance your standards.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs