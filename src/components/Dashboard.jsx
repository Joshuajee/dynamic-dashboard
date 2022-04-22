import Candlestick from "./Candlestick"
import TransactionsTable from "./TransactionTable"
import Trade from "./Trade"


const Dashboard = () => {

    return (
        <div className="dashboard">
            <Candlestick />
            <Trade />
            <TransactionsTable />
        </div>
    )
}

export default Dashboard