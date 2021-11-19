import Logo from "./img/Logo.svg"


function Banner({totalIncome, totalExpences, total}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ]
    const dateObj = new Date();
    const monthNumber = dateObj.getMonth();
    const monthName = monthNames[monthNumber]
    const year = dateObj.getFullYear();

    return (
        <div className="banner-wrapper">
            <h1 className="heading">Available Budget in {monthName} {year}</h1>
            <div className="total">{total > 0 && <span1>+</span1>}{total}</div>
            <div className="income-wrapper"><span className="span">Income</span><span>{totalIncome > 0 && <span2>+</span2>}{totalIncome}</span></div>
            <div className="expences"><span className="span">Expences</span><span>{totalExpences > 0&& <span3>-</span3>}{totalExpences}</span><span4 className="span">{totalExpences > 0 && totalIncome > 0 && (totalExpences / totalIncome * 100).toFixed(0) + "%"}</span4></div>
           <img className="header_image" src={Logo} />
        
      
        </div>
    )
}

export default Banner
