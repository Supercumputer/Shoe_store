import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouter, privateRouter } from './Routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {publicRouter.map((item, index) => {
                        let Layout;
                        let Component = item.component;
                        if (item.layout) {
                            Layout = item.layout;
                        } else {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    <Route path='/' element={<PrivateRouter/>}>
                        {privateRouter.map((item, index) => {
                            let Layout;
                            let Component = item.component;
                            if (item.layout) {
                                Layout = item.layout;
                            } else {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Route>

                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
