import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./components/header";

export default function UserTemplate() {
    return (
        <div>
            <Header/>
            <main>
            <Suspense fallback='loading...'>
                <Outlet />
            </Suspense>
            </main>
        </div>
    );
}
