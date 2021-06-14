let operations=parseInt(prompt('How many operations do you want to process?'));
const allowedOperations=['+','-','*','/'];
if (operations>0){
    //Gathering data
    let operands=[];
    let actions=[];
    let validData=true;
    //operands[0]=parseInt(prompt('Please, give start value'));

    for (let i=0; i<=operations; i++) {
        operands[i] = prompt(`Please, enter ${(i == 0) ? 'first' : 'next'} operand`);
        if (operands[i] != parseFloat(operands[i])) {
            alert('Error! Expecting number but got unexpected ' + typeof operands[i]);
            validData=false;
            break;
        }
        if (i != operations) {
            actions[i] = prompt('Please, enter math action (+, -, *, /)');
            if (!allowedOperations.includes(actions[i])) {
                alert('This program can calculate only very simple actions');
                validData=false;
                break;
            }
        }
    }
        //let operand=prompt('');
        // switch (action){
        //     case "+":
        //         console.log("plus");
        //         break;
        //     case "-":
        //         console.log("minus");
        //         break;
        //     default:
        //         alert('This program can calculate only very simple actions');
        //         stop=true;
        //         break;
        // }
        //operations--;
    if (validData)
    {
        //calculate
        //console.log(actions,operands);
        //let result;
        let result=parseFloat(operands[0]);
        let log=operands[0];
        actions.forEach((action,idx)=>{
            switch(action){
                case "+":
                    log+='+'+operands[idx+1];
                    result=result+parseFloat(operands[idx+1]);
                    break;
                case "-":
                    log+='-'+operands[idx+1];
                    result=result-parseFloat(operands[idx+1]);
                    break;
                case "*":
                    log+='*'+operands[idx+1];
                    result=result*parseFloat(operands[idx+1]);
                    break;
                case "/":
                    log+='/'+operands[idx+1];
                    result=result/parseFloat(operands[idx+1]);
                    break;
                default:
                    alert('Unexpected error!');
                    break;
            }

        });
        console.log(`Without math priorities: ${log}=${result}`);
        console.log(`With math priorities: ${log}=${eval(log)}`);
    }

} else {
    alert ("Sorry, nothing to calculate. Reload page and try again");
}