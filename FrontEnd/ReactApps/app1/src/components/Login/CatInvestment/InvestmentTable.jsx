import React, { useEffect, useState } from "react";
import Axios_request from "../../Axios_request";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InvestmentTable = () => {
    const [investmentData, setInvestmentData] = useState([]);
    //const [visibleDescription, setVisibleDescription] = useState(null);
    const [hoverInvestmentId, setHoverInvestmentId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Axios_request("get",
            "/investments",
            {}
          )  // Adjust the endpoint as necessary
            .then(response => {
                console.log(response.data);
                setInvestmentData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the investment data!", error);
            });
    }, []);

    
    // const handleCategoryClick = (investmentId) => {
    //     setVisibleDescription(visibleDescription === investmentId ? null : investmentId);
    // };

    const handleCategoryEnter = (investmentId) =>{
        setHoverInvestmentId(investmentId);
    };

    const handleMouseLeave = () => {
        setHoverInvestmentId(null);
    }

    const handleEditClick = (investmentId) =>{
        navigate(`/investment/edit/${investmentId}`);
    };

    return (
        <div className="container mt-4">
            <table className="table table-hover table-bordered table-responsive">
                <thead className="table-light">
                    <tr>
                        <th>Investment Date</th>
                        <th>Category</th>
                        <th>Investment Cost</th>
                        <th>Maturity Date</th>
                        <th>Maturity Amount</th>
                        <th>Edit record</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentData.map((investment) => (
                        <React.Fragment key={investment.investmentId}>
                            <tr onMouseEnter={()=>handleCategoryEnter(investment.investmentId)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <td>{new Date(investment.investmentDate).toLocaleDateString()}</td>
                                <td>{investment.category}</td>
                                <td>{(investment.unitCost)*(investment.quantity)}</td>
                                <td 
                                    //style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} 
                                    
                                    //onClick={() => handleCategoryClick(investment.investmentId)}
                                >
                                    {new Date(investment.maturityDate).toLocaleDateString()}
                                </td>
                                <td>{(investment.maturityUnitPrice)*(investment.quantity)}</td>
                                <td>
                                    <FaEdit style={{cursor: "pointer", color:"blue"}} 
                                     onClick={()=>handleEditClick(investment.investmentId)} />
                                </td>
                            </tr>
                            {hoverInvestmentId === investment.investmentId && (
                                <tr>
                                    <td colSpan="7" className="bg-light">
                                        <strong>Issuer:</strong> {investment.issuer} <br />
                                        <strong>Description:</strong> {investment.description}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestmentTable;
