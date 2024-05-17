// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract AgrowVaultLoan {
    struct Loan {
        uint loanAmount;
        uint repaidAmount;
        uint interestRate;
        uint startDate;
    }

    mapping (address => Loan) public loans;

    event RepaymentMade(address farmer, uint amountPaid);

    function getLoanDetails() public view returns (
        uint, uint, uint, uint
    ) {
        Loan memory loan = loans[msg.sender];
        return (
            loan.loanAmount,
            loan.repaidAmount,
            loan.interestRate,
            loan.startDate
        );
    }

    function repayLoan(uint loanAmount) public payable {
        require(loanAmount > 0,"Repayment amount should be greater than 0.");
        require(msg.value == loanAmount,"Sent amount doesn't match repayment amount");

        Loan storage loan = loans[msg.sender];
        require(loan.loanAmount > 0, "No loan found for this address");

        loan.repaidAmount = loan.loanAmount + loanAmount;
        if(loan.repaidAmount >= loan.loanAmount){
            delete(loans[msg.sender]);
        }
        emit RepaymentMade(msg.sender, loanAmount);
    }

    function requestLoan(uint loanAmount, uint interestRate) public{
        require(loanAmount > 0, "Loan amount must be greater than 0");

        bool approved = true;
        if(approved) {
            createLoan(msg.sender, loanAmount, interestRate);
        } else {
            emit LoanRequestDenied(msg.sender, loanAmount);
            revert("Loan Request Denied");
        }
    }

    function createLoan(address farmer, uint loanAmount, uint interestRate) internal {
        loans[farmer] = Loan(loanAmount, 0, interestRate, block.timestamp);
    }

    event LoanRequestDenied(address farmer, uint amount);
}