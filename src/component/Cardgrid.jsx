import { useEffect, useState } from "react";
import Card from "./card";
import getData from "../api/getData";


function CardGrid({features = []}){
   const [dataProduct,setdataPruduct] = useState([])
  useEffect(() => {
    const featureData = async () => {
      const data = await getData();
      setdataPruduct(data);
      console.log(data)
    };
    featureData();

  },[]);
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-slate-400 p-4">
      {
        features.map ((data) =>{

          return(
            <Card key={data.id} icon={data.icon} title={data.title} subtitle={data.subtitle} />
          )
        })
      }
      {dataProduct.map((items) => (
          <div key={items.id} className="border-b pb-2 last:border-none">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">{items.title}</h4>
            </div>
            <p className="text-sm text-gray-500">{items.description}</p>
          </div>
        ))}
    </div>
    
  )
}

export default CardGrid;