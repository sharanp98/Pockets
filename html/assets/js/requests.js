/*const url_login="http://192.168.43.191/MicroLoan/index.php/user/login/tom";
const url_getuser="http://192.168.43.191/MicroLoan/index.php/user/get_user";
httpLogin(url_login);    
httpGetUser(url_getuser);
data={};
function httpLogin(url)
{
    str="";
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            str=xmlHttp.responseText;
            console.log(str);
        }
    }
    xmlHttp.open("GET", url,false); // true for asynchronous 
    xmlHttp.send(null);
};
function httpGetUser(url)
{
    str="";
    let cookie="nua09hg6p9p95ashe0vvs80idlbhhttr"
    let xmlHttp = new XMLHttpRequest("cookie"=cookie);
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            str=xmlHttp.responseText;
            data=JSON.parse(str);
            console.log(str);
        }
    }

    xmlHttp.open("GET", url,false); // true for asynchronous 
    xmlHttp.send(null);
};*/

const data=JSON.parse('{"basic":{"username":"tom","email":"tomjoseph@gmail.com","max_amnt":"5000","no_clients":"5","UPI":"ALKI9823JI"},"balance":{"balance":"90","no_lents":"3","no_borrows":"1","late_count":"1","total_amout_paid":"338"},"requests":{"id":"18","req_no":"389","from":"santosh","cash":"2200","return_date":"2020-20-10","return_cash":"2415.6"},"give":[],"get":[],"completed_transactions":[]}');

function fill(){
    //Credit-Active Loans
    const activeCredit=data.get;
    if(activeCredit.length==0)
    {
        document.getElementById("activeCredit").innerHTML='<li class="d-xl-flex align-items-xl-center" style="padding-left: 12px;margin-bottom: 0;padding-right: 12px;"><span class="float-right flex-fill" style="font-size: 16px;padding-top: 4px;padding-bottom: 4px;">No active loans<br></span></li>';
    }
    else{
        /*for(i in activeCredit){

        }*/
    }
    //Credit- Requests
    const requests=data.requests;
    if(requests.length==0)
    {
        document.getElementById("requests").innerHTML='<li class="d-xl-flex align-items-xl-center" style="padding-left: 12px;margin-bottom: 0;padding-right: 12px;"><span class="float-right flex-fill" style="font-size: 16px;padding-top: 4px;padding-bottom: 4px;">No requests<br></span></li>'
    }
    else
    {
        let innerHTML=""
        i=requests;
        innerHTML=innerHTML.concat(`<li onclick="redirect()" class="d-xl-flex align-items-xl-center" style="padding-left: 12px;margin-bottom: 0;padding-right: 12px;"><span class="float-right flex-fill" style="font-size: 16px;padding-top: 4px;padding-bottom: 4px;">John Wick requested ₹${i.cash}<br></span><span class="float-right" style="font-size: 12px;">${i.return_date}</span></li>`);
        document.getElementById("requests").innerHTML=innerHTML;
    }
    //Debit-Active Loans
    const activeDebit=data.give;
    if(activeDebit.length==0)
    {
        document.getElementById("activeDebit").innerHTML='<li class="d-xl-flex align-items-xl-center" style="padding-left: 12px;margin-bottom: 0;padding-right: 12px;"><span class="float-right flex-fill" style="font-size: 16px;"><br>No loans active<br><br></span><span class="float-right" style="font-size: 12px;"><button class="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#requestModal">Make Request</button></span></li>';
    }
    //Profile
    document.getElementById("save").addEventListener("click",function modal(){
        document.getElementById("requestModal").innerHTML=`<div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
            <div class="modal-body text-center">
                <h3>Transaction Successful</h3>
                <p>Transaction ID:1052</p>
            </div>
            <div class="modal-footer text-left justify-content-xl-center"><button class="btn btn-success border rounded-circle" type="button" style="width: 40px;height: 40px;padding: 0px;"><i class="fas fa-check"></i></button></div>
        </div>
    </div>`;
    });
        document.getElementById("requests").addEventListener("click",()=>{window.location.replace("profile-1.html");});
    
}
fill();