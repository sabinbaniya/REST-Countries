import {FC} from "react"
import ContentLoader from "react-content-loader"

interface PropsInterface {
    bgColor: string;
    foregroundColor: string;
}

const MyLoader:FC <PropsInterface> = ({bgColor, foregroundColor}) => (
    <ContentLoader 
    speed={2}
    width={288}
    height={412}
    viewBox="0 0 288 412"
    backgroundColor={bgColor}
    foregroundColor={foregroundColor}
  >
    <rect x="20" y="285" rx="3" ry="3" width="213" height="17" /> 
    <rect x="21" y="318" rx="3" ry="3" width="127" height="14" /> 
    <rect x="159" y="318" rx="3" ry="3" width="92" height="14" /> 
    <rect x="22" y="353" rx="3" ry="3" width="171" height="13" /> 
    <rect x="20" y="251" rx="3" ry="3" width="244" height="16" /> 
    <rect x="-64" y="-10" rx="0" ry="0" width="498" height="209" />
  </ContentLoader>
)


const Loader: FC <PropsInterface> = ({bgColor , foregroundColor}) => {
    return (
        <div className="dark:bg-DarkBlue bg-White rounded-md my-4 mx-auto dark:text-White text-LightVeryDarkBlue max-h-90 drop-shadow" style={{width: '288', height: '412', maxWidth: '288'}}>
          <MyLoader bgColor={bgColor} foregroundColor={foregroundColor}/>
        </div>
    )
}

export default Loader