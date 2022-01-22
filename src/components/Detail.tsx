import {FC, useEffect, useState} from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { detailCountry } from '../helpers/RequestCountries';
import { DetailsInterface } from '../types/types';
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

  console.log(detail)

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
            <div>
                    {
                        detail &&
                        detail?.map(item => {
                            return (
                                <div>
                                    <div>
                                        <img src={item?.flags.svg} alt={item.altSpellings[0]} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{country}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Native Name : <span className="font-light">{item.altSpellings[1]}</span></p>
                                        <p className="font-semibold">Population : <span className="font-light">{item.population.toLocaleString()}</span></p>
                                        <p className="font-semibold">Region : <span className="font-light">{item.region}</span></p>
                                        <p className="font-semibold">Sub Region : <span className="font-light">{item.subregion}</span></p>
                                        <p className="font-semibold">Capital : <span className="font-light">{item.capital.map(a => <span>{a}</span>)}</span></p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Top Level Domain : <span className="font-light">{item.tld}</span></p>
                                        <p className="font-semibold">Languages : <span className="font-light">{item.subregion}</span></p>
                                        <p className="font-semibold">Capital : <span className="font-light">{item.capital.map(a => <span>{a}</span>)}</span></p>
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

