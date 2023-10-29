import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import { publicRouter } from './Routes';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRouter.map((item, index) => {
                    let Layout
                    let Component = item.component
                    if(item.layout){
                        Layout = item.layout
                    }else{
                        Layout = Fragment
                    }
                return <Route key={index} path={item.path} element={<Layout><Component/></Layout>}/>
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
