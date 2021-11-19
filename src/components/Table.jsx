function Table({items, title, totalIncome, removeItem}) {
    
    return (
        <div className="table">
            <div>{title}</div>
            <table>
                <tbody>
                    {items.map(item => {
                        return <tr key={item.id} onChange={()=>removeItem(item.id, item.option, item.number)}>
                        <td>{item.desc}</td>
                        <td>{item.option}{item.number}</td>
                        {item.option === "-" && totalIncome > 0 && <td className="td-wrapper">{(item.number / totalIncome * 100).toFixed(0)}%</td>}
                    </tr>
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default Table
