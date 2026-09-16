import { NavigationBar, Footer } from "../components"
import { Outlet } from "react-router-dom"; // This is the general Placeholder for every different side that comes between the generallayout

function GeneralLayout() {
    return (
        <div>
            <NavigationBar />
            <main className="flex flex-col w-screen min-h-30 p-5">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default GeneralLayout