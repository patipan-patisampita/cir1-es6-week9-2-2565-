function sevenElven(){
    //รายการสินค้า
    const soil = "น้ำปลา"
    const price = 15
    const unit = 2
    const total = price * unit
    return total //30
    // console.log(total)
}
const sevenPrice = sevenElven()
//ค่าจ้าง
function goBike(){
    const motorcycle = 100
    const money = 100
    const sum = money + motorcycle
    return sum //200
    //console.log(sum)
}
const gobikePrice = goBike()

const sumMoney = sevenPrice + gobikePrice
console.log(sumMoney)
