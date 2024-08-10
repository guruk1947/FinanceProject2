import React from 'react'
import '../../Assets/Css/CategoryBar.css';
import CatInvestmentBar from './CatInvestmentBar';
import CatExpenditureBar from './CatExpenditureBar';

const CategoryBar = () => {
    return (
        <div>
            <div>
                <ul className="nav nav-tabs NavContainer " id="myTab" role="tablist">
                    <li className="nav-item NavScroll  col-md-2" role="presentation">
                        <button className="nav-link active col-12" id="Income-tab" data-bs-toggle="tab" data-bs-target="#income-tab-pane" type="button" role="tab" aria-controls="Income-tab-pane" aria-selected="true">Income</button>
                    </li>
                    <li className="nav-item NavScroll  col-md-2" role="presentation">
                        <button className="nav-link col-12" id="expenditure-tab" data-bs-toggle="tab" data-bs-target="#expenditure-tab-pane" type="button" role="tab" aria-controls="expenditure-tab-pane" aria-selected="false">Expenditure</button>
                    </li>
                    <li className="nav-item NavScroll  col-md-2 " role="presentation">
                        <button className="nav-link col-12" id="investment-tab" data-bs-toggle="tab" data-bs-target="#investment-tab-pane" type="button" role="tab" aria-controls="investment-tab-pane" aria-selected="false">Investment</button>
                    </li>
                    <li className="nav-item NavScroll  col-md-2" role="presentation">
                        <button className="nav-link col-12" id="groups-tab" data-bs-toggle="tab" data-bs-target="#groups-tab-pane" type="button" role="tab" aria-controls="groups-tab-pane" aria-selected="false">Groups</button>

                    </li>
                    <li className="nav-item NavScroll  col-md-2" role="presentation">
                        <button className="nav-link col-12" id="transactions-tab" data-bs-toggle="tab" data-bs-target="#transactions-tab-pane" type="button" role="tab" aria-controls="transactions-tab-pane" aria-selected="false">All Transactions</button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="income-tab-pane" role="tabpanel" aria-labelledby="Income-tab" tabIndex="0"></div>
                    <div className="tab-pane fade" id="expenditure-tab-pane" role="tabpanel" aria-labelledby="expenditure-tab" tabIndex="0"><CatExpenditureBar/></div>
                    <div className="tab-pane fade" id="investment-tab-pane" role="tabpanel" aria-labelledby="investment-tab" tabIndex="0"><CatInvestmentBar/></div>
                    <div className="tab-pane fade" id="groups-tab-pane" role="tabpanel" aria-labelledby="investment-tab" tabIndex="0">...</div>
                    <div className="tab-pane fade" id="transactions-tab-pane" role="tabpanel" aria-labelledby="investment-tab" tabIndex="0"></div>
                </div>
            </div>
        </div>
    )
}

export default CategoryBar