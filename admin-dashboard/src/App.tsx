import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import ProductManagement from './pages/management/ProductManagement';
import TransactionManagement from './pages/management/TransactionManagement';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Customers = lazy(() => import('./pages/Customers'));
const Products = lazy(() => import('./pages/Products'));
const Transaction = lazy(() => import('./pages/Transaction'));
const NewProduct = lazy(() => import('./pages/management/NewProduct'));

const BarCharts = lazy(() => import('./pages/charts/BarCharts'));
const PieCharts = lazy(() => import('./pages/charts/PieCharts'));
const LineCharts = lazy(() => import('./pages/charts/LineCharts'));
const Coupon = lazy(() => import('./pages/apps/Coupon'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/customer" element={<Customers />} />
                    <Route path="/admin/product" element={<Products />} />
                    <Route
                        path="/admin/transaction"
                        element={<Transaction />}
                    />

                    {/* charts */}
                    <Route path="/admin/chart/bar" element={<BarCharts />} />
                    <Route path="/admin/chart/pie" element={<PieCharts />} />
                    <Route path="/admin/chart/line" element={<LineCharts />} />

                    {/* Apps */}
                    <Route path="/admin/app/coupon" element={<Coupon />} />

                    {/* Management */}
                    <Route path="/admin/product/new" element={<NewProduct />} />
                    <Route
                        path="/admin/product/:id"
                        element={<ProductManagement />}
                    />
                    <Route
                        path="/admin/transaction/:id"
                        element={<TransactionManagement />}
                    />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
