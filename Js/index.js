
var siteName 

var url 

// function addUrl(){
    


// let sites = document.getElementById("sites");
//  //console.log(siteName,"HEE")
// sites.innerHTML="<h2>" + siteName + "</h2>" ;
// sites.innerHTML+="<button class=' btn btn-primary m-3'><a href="+url+">Visite</a></button>"
// sites.innerHTML+="<button class=' btn btn-danger m-3'>Delete</button>"

// };


if (localStorage.getItem("sitesList")==null)
{
    var SiteArray = [];
}
else
{
    SiteArray = JSON.parse( localStorage.getItem("sitesList"));
    displayUlr();
}


function addUrl(){
    siteName = document.getElementById("siteName").value ;

    url = document.getElementById("url").value ;
    if (checkInputs()==true){

        var Siteobject = {

            name :siteName,
    
            url : url,
    
        };
         
        SiteArray.push(Siteobject);
        //console.log(productsContainer)
        localStorage.setItem("sitesList", JSON.stringify(SiteArray));
        displayUlr();
        clearForm();
    }
      else
      {
          window.alert("please complete all inputs")
      }
};


function clearForm(){
    document.getElementById("siteName").value = "";
    document.getElementById("url").value  = "";
   
};


function displayUlr(){
    
    
    var cartona =``;

    for (var i = 0 ; i < SiteArray.length ; i++)
    {
         cartona +="<h2>" + SiteArray[i].name + "</h2><br>" ;
         cartona +="<button class=' btn btn-primary m-3'><a href="+SiteArray[i].url + ">Visite</a></button><br>"
         cartona +="<button onclick='deleteSites("+i+")' class=' btn btn-danger m-3'>delete</button>"
    }
         document.getElementById("sites").innerHTML = cartona;
         clearForm();

};

function checkInputs(){

    if ( siteName !="" && url!=""){
             return true;
         }
         else
         {
             return false;
         }
};

function deleteSites(siteIndex){
     
    SiteArray.splice(siteIndex,1);
    localStorage.setItem("sitesList", JSON.stringify(SiteArray));

    displayUlr();

};




