import React, { useState } from 'react';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { getAssets } from '../../data';


const Assets = () => {


    const [data] = useState(getAssets());

    return (
        <div className="assets">
            <FlexGrid itemsSource={data}>
                <FlexGridColumn header="Asset" binding="asset" width="*" format="n2"/>
                {/* <FlexGridColumn header="Amount" binding="amount" width="*" format="n2"/> */}
            </FlexGrid>
        </div>
    )
}

export default Assets