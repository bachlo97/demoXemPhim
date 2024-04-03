import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config";
import {GlobalStyle} from "./components/global-style/global-style";

function App() {
    return (
        <GlobalStyle>
            <RouterProvider router={router} />
        </GlobalStyle>
    );
}

export default App;
