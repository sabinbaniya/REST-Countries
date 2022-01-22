import {FC, useEffect, useState} from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { detailCountry } from '../helpers/RequestCountries';
import { DetailsInterface, Obj, Obj2 } from '../types/types';
import Navbar from "./Navbar";

const Detail: FC = () => {

  const {country} = useParams();
  const [detail, setDetail] = useState<DetailsInterface[] | undefined>(undefined)

  const req = async() => {
    let res = await detailCountry(country)
    setDetail(res)
  }

  useEffect(() => {
    req();
    
  }, [])

  return (
    <div className="dark:bg-VeryDarkBlue bg-VeryLightGray min-h-screen">
        <Navbar />
        <div className="w-11/12 mx-auto">
            <div className="my-4 ">
                <Link to="/" >
                    <div className="dark:bg-VeryDarkBlue bg-White dark:text-White text-LightVeryDarkBlue flex w-28 justify-between items-center py-3 px-6 shadow-lg">
                        <BiArrowBack /> Back
                    </div>
                </Link>
            </div>
            <div className="">
                    {
                        detail &&
                        detail?.map(item => {

                            let obj: Obj = item?.currencies || {eng: {name: 'no currencies found'}};
                            let arr = Object.keys(obj);
                            let obj2: Obj2 = item?.languages  || {eng: 'no languages found'};
                            let arr2 = Object.keys(obj2);

                            return (
                                <div key={item.altSpellings[1]} className="flex flex-wrap dark:text-White text-LightVeryDarkBlue">
                                    <div className="pr-10 flex items-center justify-center">
                                        <img className="max-h-96 max-w-sm" src={item?.flags.svg} alt={item.altSpellings[0]} />
                                    </div>
                                    <div className="my-10 basis-2/4">
                                        <div>
                                            <p className="text-2xl font-bold mb-8">{country}</p>
                                        </div>
                                        <div className="xl:flex">
                                            <div className="mb-6">
                                                <p className="font-semibold mb-2">Native Name : <span className="font-light pr-4">{item.altSpellings[1]}</span></p>
                                                <p className="font-semibold mb-2">Population : <span className="font-light">{item.population.toLocaleString()}</span></p>
                                                <p className="font-semibold mb-2">Region : <span className="font-light">{item.region}</span></p>
                                                <p className="font-semibold mb-2">Sub Region : <span className="font-light">{item.subregion}</span></p>
                                                <p className="font-semibold mb-4">Capital : <span className="font-light">{item.capital.map(a => <span>{a}</span>)}</span></p>
                                            </div>
                                            <div className="mb-6">
                                                <p className="font-semibold mb-2">Top Level Domain : <span className="font-light">{item.tld}</span></p>
                                                <p className="font-semibold mb-2">Currencies : <span className="font-light">
                                                    {
                                                        arr.map((item, index) => {
                                                            return (
                                                                <span>
                                                                    {obj[item]?.name} 
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </span></p>
                                                <p className="font-semibold ">Languages : <span className="font-light">
                                                    {
                                                        arr2.map((item, index) => {
                                                            return (
                                                                <span>
                                                                    {obj2[item]} 
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </span></p>
                                            </div>
                                        </div>    
                                        <div className="md:flex md:items-center ">
                                            <p className="font-semibold">Border Countries: </p>
                                            <div className="font-light my-4 md:mx-4 flex flex-wrap">{item.borders.map(a => <span className="py-2 px-4 mr-4 last:mr-0 md:mx-4 dark:bg-DarkBlue dark:text-White bg-White text-LightVeryDarkBlue shadow-xl">{a}</span>)}</div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
            </div>
        </div>    
    </div>
  );
};

export default Detail;

