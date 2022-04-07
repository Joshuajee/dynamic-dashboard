import Assets from "./Wijmo/Asset"
import Profile from "./Wijmo/Profile"


const SideBar = () => {


    return (
        <div className="sidebar">

            <Profile />

            <div className="assets">
                {/* <Assets /> */}
            </div>

        </div>
    )
}

export default SideBar