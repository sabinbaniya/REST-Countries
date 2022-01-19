
interface IAppProps {
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string
}

const Card: React.FunctionComponent<IAppProps> = ({name, flag, population, region, capital}) => {
  return (
      <div className="dark:bg-DarkBlue bg-White rounded-md my-4 dark:text-White text-LightVeryDarkBlue max-h-90 drop-shadow" key={Math.random()}>
          <div className="h-1/2">
              <img src={flag} className="" alt={name} />
          </div>
          <div className="p-8 space-y-3">
              <p className="font-extrabold " >{name}</p>
              <p className="font-semibold ">Population : <span className="font-light">{population.toLocaleString()}</span></p>
              <p className="font-semibold ">Region : <span className="font-light">{region}</span></p>
              <p className="font-semibold ">Capital : <span className="font-light">{capital}</span></p>
          </div>
      </div>
  )
};

export default Card;
