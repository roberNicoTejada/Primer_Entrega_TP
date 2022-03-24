import { useState } from 'react'

function ItemCount(props) {

    const [count,SetCount] = useState(1)
    
    function Sumar() {

        if (count < props.stock) {
            SetCount(count + 1)  
        }
        
    }

    function Restar() {

        if (count > 1) {
            SetCount(count - 1)
        }
    }

    return (
        <div className="h6 qtyBox d-flex align-items-center justify-content-around border w-75">
            <div className="btnQty qtyMinus fs-3 ps-3 text-muted" role="button" onClick={Restar}>
                -
            </div>
            <div className="qtyInput border-0 text-center form-control shadow-none text-muted">
                {count}
            </div>       
            <div className="btnQty qtyPlus fs-3 pe-3 text-muted" role="button" onClick={Sumar}>
                +
            </div>
        </div>
    )
}

export default ItemCount