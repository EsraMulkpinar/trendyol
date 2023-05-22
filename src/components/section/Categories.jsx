
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Categories = () => {
  return (
    <Link to="/category">
      <div className=" flex flex-col items-center ">
        <div className="container max-w-[1220px] ">
          
          <div className="flex justify-between mx-2 my-5">
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Categories
