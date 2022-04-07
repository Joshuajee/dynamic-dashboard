import React, { useState } from 'react';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { getTransactions } from '../../data';



const TransactionsTable = () => {

    const [data] = useState(getTransactions());

    return (
        <div className="transactions app-box">

            <div className="transactions app-box"> <h3> Transaction History  </h3> </div>

            <FlexGrid itemsSource={data}>
                <FlexGridColumn binding="id" header="ID" width=".5*"/>
                <FlexGridColumn header="Type" binding="type" width="*"/>
                <FlexGridColumn header="Date" binding="date" width="*" format="n2"/>
                <FlexGridColumn header="Asset" binding="asset" width="*" format="n2"/>
                <FlexGridColumn header="Amount" binding="amount" width="*" format="n2"/>
                <FlexGridColumn header="Status" binding="status" width="*" format="n2"/>
            </FlexGrid>
        </div>
    )
}

export default TransactionsTable