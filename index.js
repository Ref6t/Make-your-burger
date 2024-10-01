







// function for adding elements 

function add(e,cls,count=1,position=["body"]){
    let pos =[] 
    pos =document.querySelectorAll(position)
    
    for(j =0;j< pos.length;j++){
    for(i=0;i<count;i++){
        // console.log(pos[j])
        let element = document.createElement(e)
        pos[j].appendChild(element)
        

        //  المشكله ان الكلاس يا بيجي ف الاسم كله مش ف المضاف فقط
        //problem has been solved

let appended=[]
appended=document.querySelectorAll(position+' '+e+":last-child") 
                    let J=0;
                        while(J<appended.length){
                        appended[J].className=cls 
                        // appended[J].id=clsJ
                        J+=1
                        console.log(appended.length);
                        console.log(J);
                    }
            }

        }
    }
    


// function for adding order image

function addImg(src,cls,count=1,position=["body"]){
    let pos =[] 
    pos =document.querySelectorAll(position)
    
    for(j =0;j< pos.length;j++){
    for(i=0;i<count;i++){
        let element = document.createElement("img")
        pos[j].appendChild(element)
let appended=[]
appended=document.querySelectorAll(position+' '+'img'+':last-child') 
                    let J=0;
                        while(J<appended.length){
                        appended[J].className=cls 
                        appended[J].src=src 
                        J=+1
                    }
            }

        }
    }



    // function for adding text

function addText(selector,text){
    let textPosition =[] 
    textPosition =document.querySelectorAll(selector)
    for (j =0; j< textPosition.length;j++) {
        let Text =document.createTextNode(text)
        textPosition[j].appendChild(Text)
    }
}



// function for add css to elements 

function cssStyle(selector,properties){
    selectedElement=document.querySelectorAll(selector)
    for (j =0; j< selectedElement.length;j++) {
        selectedElement[j].style.cssText=properties
        
    }
}


add("div","c",2,"body")






// ___________________  Body _layout_________________

cssStyle("body"," height:98vh; background-color:green; box-sizing:border-box; margn:0px; padding:0px;")


add("section","container",1,"body")

cssStyle("body section.container",
    `

    width:100%;
    height:100%;

    // height:720px;
    background-color:#ddd000;
    // margin:97px 218px 77px 218px;
    border-radius:20px;
    display:grid;
    grid-template-columns :85%;
    grid-template-rows :10% 400px 20% ;
    // row-gap: 10px;
    justify-content:center;
    align-content:space-between;
    font-family: "Open Sans", sans-serif;

    `)
    

    // ________________________ NAV ____________________
    
    
    add("nav","nav",1,"body section.container")
    cssStyle("body section.container nav",`
    width:100%;
    // background-color:blue;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:25px;
    `)
    
    
    add("div","head",2,"nav")
    cssStyle("body section.container nav div",`
    width:30%;
    height:70%;
     `)
    
    addImg( "/images/logo.png","logo",1,"nav div:first-child")
    cssStyle("nav div:first-child ",`  
    width:30%;
    height:100%;
    // background-color:red;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `)
    cssStyle("nav div:first-child .logo",`
    width:80px;
    height:80px;
    `)

    add("div","page",2,"nav div:first-child")
    addText(".page:nth-child(2)","Discover")
    addText(".page:nth-child(3)","make your burger")
    
    cssStyle("nav div:first-child div",`
        line-height:20px;
        font-size:16px;
        font-weight:400;
        text-transform:capitalize;
        
    `)
    cssStyle("nav div:first-child div:last-child",`
    line-height:20px;
    font-size:16px;
    font-weight:600;
    text-transform:capitalize;
    // padding:10px 0;
    border-bottom:2px solid #5243C2;

    `)

    cssStyle("nav div.head:nth-child(2) ",`  
    width:30%;
    height:100%;
    // background-color:red;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `)
    
    add("span","page",2,"nav div.head:nth-child(2)")
    addText("span.page:nth-child(1)","Call Me Back")
    addText("span.page:nth-child(2)","8 800 437-87-22")
    
    cssStyle("nav div.head:nth-child(2) span",`
        line-height:20px;
        font-size:16px;
        font-weight:400;
        text-transform:capitalize;
        padding:6px 12px ;
        // background-color:#FFEDED;
        color:#FF4D4F;      
        border-radius:30px  
        `)

        cssStyle("nav div.head:nth-child(2) span:last-child",`
        line-height:20px;
        font-size:16px;
        font-weight:600;
        text-transform:capitalize;
        `)
        
        addImg( "/images/avatar.png","avatar",1,"nav div.head:nth-child(2)")
        cssStyle("nav div.head:nth-child(2) .avatar",`
        width:60px;
        height:60px;
        `)


    
    // ________________________ MAIN_SECTION _______________
    
    
    add("section","secMain",1,".container")
    cssStyle("body section.container section",`
    width:100%;
    height:400px;
    // background-color:brown;
    display:flex;
    justify-content:space-between;
    align-items:center;

      `)
     
     
     add("div","main",3,".container .secMain")

     cssStyle(".main",`
     width:30%;
     height:400px;
    //  background-color:gold;


     display:flex;
     align-items:center; 
     justify-content:center; 
     flex-direction: column;  

      `)
    add("div","main1",1,".container .secMain .main:first-child")
    
    
    addText(".secMain .main:first-child .main1" ,'make your burger' )
    
    cssStyle(".main1",`
    font-size:62px;
    font-weight:700;
    line-height:85px;
    color:#1F2939;
    text-transform:capitalize;
    width:55%;
    height:50%;
    // background-color:green;

    `)
    
    
    cssStyle(".main:nth-child(2)",`
    width:37%;
    height:100%;
    // background:red;
    // background-image:url("images/orderimages/background.png");
    background-size:cover ;
    background-repeat:no-repeat;
    background-position:top;
    display:flex;
    flex-direction:column-reverse;
    align-items:center;
    justify-content:flex-start;    
    position:relative;
    overflow:hidden;

     `)
   


 
    add("div","main3",3,".container .secMain .main:nth-child(3)")    
    cssStyle(".main:last-child div",`
    width:80%;
    height:15%;
    margin:10px;
    // background-color:red;
    `)
    addText(".main:last-child div:first-child","summary")
    cssStyle(".main:last-child div:first-child",`
    width:80%;
    height:15%;
     margin:10px;
     font-size:36px;
     font-weight:600;
     line-height:49.03px;
     text-transform:capitalize;
    //  background-color:red;
     border-bottom:2px solid #F5F5FF;
     `)
     
     cssStyle(".container .secMain .main:nth-child(3) div:nth-child(2) ",`
     width:80%;
     height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
     `)
     add("span","cost",2,".container .secMain .main:nth-child(3) div:nth-child(2)")    
     cssStyle(".container .secMain .main:nth-child(3) div:nth-child(2) .cost:first-child",`
     font-size:36px;
     font-weight:800;
     line-height:49.03px;
    //  background-color:green;
     color:#5243C2;
    padding:10px 23% 10px 0px;
     
     `)    
     addText(".container .secMain .main:nth-child(3) div:nth-child(2) span:first-child","$ 0")
    
    
     addText(".container .secMain .main:nth-child(3) div:nth-child(2) span:nth-child(2)","checkout")
  
    cssStyle(".container .secMain .main:nth-child(3) div:nth-child(2) span:nth-child(2)",`
    width:30%;
    font-size:16px;
    font-weight:600;
    line-height:20px;
    // background-color:#5243C2;
    color:#F5F5FF;
    text-align:center;
    padding:25px 50px 25px 50px;
    border-radius:99px;
    `)

     // _____________________________ ORDER_SECTION _____________________
      
     
     add("section","secOrder",1,"body section.container")
     
  
  cssStyle("body section.container .secOrder",`
    width:100%;
    height:100%;
    // background-color:red;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `)

    add("div","order",9,"body section.container .secOrder")
    cssStyle("div.order",`
    width:8%;
    height:95%;
    // background-color:brown;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    border: 3px solid #F0F7FA;
    // padding:10px;
    border-radius:30px;

    `)
    addImg("/images/orderimages/cutiet.png","cutiet",1,"body section.container .secOrder div.order:nth-child(1)")
    addImg("/images/orderimages/mayo.png","mayo",1,"body section.container .secOrder div.order:nth-child(2)")
    addImg("/images/orderimages/onion.png","onion",1,"body section.container .secOrder div.order:nth-child(3)")
    addImg("/images/orderimages/tomato.png","tomato",1,"body section.container .secOrder div.order:nth-child(4)")
    addImg("/images/orderimages/cucumber.png","cucumber",1,"body section.container .secOrder div.order:nth-child(5)")
    addImg("/images/orderimages/cheese.png","cheese",1,"body section.container .secOrder div.order:nth-child(6)")
    addImg("/images/orderimages/salad.png","salad",1,"body section.container .secOrder div.order:nth-child(7)")
    addImg("/images/orderimages/bun.png","bun",1,"body section.container .secOrder div.order:nth-child(8)")
    addImg("/images/orderimages/bun2.png","bun2",1,"body section.container .secOrder div.order:nth-child(9)")
    cssStyle("body section.container .secOrder div.order img",`
    width:70px;
    height:25px;
    `)
    
    
    add("span","name",1,"body section.container .secOrder div.order")
    cssStyle("body section.container .secOrder div.order span",`
    width:70%;
    height:%5;
    // background-color:yellow;
    text-align:center;
    text-transform:capitalize;
    `)

    addText("body section.container .secOrder div.order:nth-child(1) span","cutiet")
    addText("body section.container .secOrder div.order:nth-child(2) span","mayo")
    addText("body section.container .secOrder div.order:nth-child(3) span","onion")
    addText("body section.container .secOrder div.order:nth-child(4) span","tomato")
    addText("body section.container .secOrder div.order:nth-child(5) span","cucumber")
    addText("body section.container .secOrder div.order:nth-child(6) span","cheese")
    addText("body section.container .secOrder div.order:nth-child(7) span","salad")
    addText("body section.container .secOrder div.order:nth-child(8) span","bun")
    addText("body section.container .secOrder div.order:nth-child(9) span","bun2")

    add("div","selection",1,"body section.container .secOrder div.order")
    cssStyle("body section.container .secOrder div.order div.selection",`
    width:95%;
    height:20%;
    // background-color:gold;
    display:flex;
    justify-content:space-around;
    align-items:center;
    `)
//    NOTE  IF 3 the same type or 3 span for ex there is abug  WHY ??????
//      Bug has been solved ...

    add("span","remov",1,".secOrder .order .selection")
    add("div","amount",1,".secOrder .order .selection")
    add("span","add",1,".secOrder .order .selection")
    addText("body section.container .secOrder div.order .selection .remov","-")
    addText("body section.container .secOrder div.order .selection .amount","0")
    addText("body section.container .secOrder div.order .selection .add","+")
  
    cssStyle(".secOrder div.order .selection div",`
        font-size:18px;
        font-weight:600;
    `)
    cssStyle(".secOrder div.order .selection span",`
        width:25px;
        height:325x;
        text-align:center;
        line-height:26px;
        font-size:14px;
        font-weight:700;
        // padding :7px 15px;
        color:blue;
        cursor:pointer;
        // background-color:#F5F5FF;
        border-radius:50%;
    `)
 
    // ___________________________ FOOTER ______________________________
    
    // add("footer","foot",1,"body section.container")
        
    // cssStyle("body section.container footer",`
    // width:100%;
    // height:100%;
    // // background-color:yellow;
    // display:flex;
    // align-items:center;
    // justify-content:space-between;
    
    // `)
    
    // add("div","foot",2,"footer")
    // cssStyle("body section.container footer div",`
    // width:25%;
    // height:70%;
    // // background-color:red;
    // `)

    
    
// ___________________________+============  JS EVENTS =============_________________________
 
let selectOrder = document.querySelectorAll(".order")
for(i=0;i<selectOrder.length;i++){
    selectOrder[i].onmouseenter=function(){
        let elementImage=this.firstChild
        let orderSrc=this.firstChild.src;
        let orderName=this.firstChild.className
        let orderAmount=this.querySelector(".selection .amount")
        let costScreen=document.querySelector(".container .secMain .main:nth-child(3) div:nth-child(2) span:first-child")
        let remBtn=document.querySelectorAll(".remov")
        
        let addBtn=document.querySelectorAll(".add")
        for(j=0;j<addBtn.length;j++){
            addBtn[j].onmousedown=function(){

                let orderAmountValue=orderAmount.textContent
                if(orderAmount.textContent<'3'){
                
                let y =parseInt(orderAmountValue) + 1
                orderAmount.textContent=y
             
             
                let cost =0
             switch (orderName) {
                case "cutiet":cost=5
                    break;
                case "mayo":cost=1
                    break;
                case "onion":cost=1
                    break;
                case "tomato":cost=3
                    break;
                case "cucumber":cost=2
                    break;
                case "cheese":cost=4
                    break;
                case "salad":cost=5
                    break;
                case "bun":cost=1
                    break;
                case "bun2":cost=1
                    break;
             
                default:
                    break;
             }


             let costs =[5,1,1,3,2,4,5,1,1]
             let partPrice = y*cost
             let total=0
             let totalAmount=document.querySelectorAll(".selection .amount")

             for (let x = 0; x < totalAmount.length; x++) {
            let z = parseInt(totalAmount[x].textContent)*costs[x]
            console.log(z);     
            total+=z
        }
            costScreen.textContent=" $ "+total


            addImg(orderSrc,"ordered",1,".main:nth-child(2)")   
            cssStyle(".main:nth-child(2) img:last-child",`
            position:relative;
            top:-1000px;   

            `)
            }
        }
            addBtn[j].onmouseup=function(){                    
                cssStyle(".main:nth-child(2) img:last-child",`
                width:70%;
                height:120px;       
                margin:-70px 0px -18px 0px ; 
                position:relative;
                top:-7px;   
                transition:all 1s ease;
                `)
            }
       
       
            remBtn[j].onclick=function(){
                let orderAmountValue=orderAmount.textContent
                if(orderAmount.textContent>'0'){

                let y =parseInt(orderAmountValue) - 1
                orderAmount.textContent=y
             let cost =0
             switch (orderName) {
                case "cutiet":cost=5
                    break;
                case "mayo":cost=1
                    break;
                case "onion":cost=1
                    break;
                case "tomato":cost=3
                    break;
                case "cucumber":cost=2
                    break;
                case "cheese":cost=4
                    break;
                case "salad":cost=5
                    break;
                case "bun":cost=1
                    break;
                case "bun2":cost=1
                    break;
             
                default:
                    break;
             }
             let costs =[5,1,1,3,2,4,5,1,1]
             let partPrice = y*cost
             let total=0
             let totalAmount=document.querySelectorAll(".selection .amount")
             for (let x = 0; x < totalAmount.length; x++) {
            let z = parseInt(totalAmount[x].textContent)*costs[x]
            console.log(z);     
            total+=z
        }
        console.log(total);     
             costScreen.textContent=" $ "+total
             let mainDivElements=document.querySelector(".main:nth-child(2)").childNodes
             for(x=0;x<mainDivElements.length;x++){
                 if(mainDivElements[x].src==elementImage.src){
                     mainDivElements[x].remove()
                     console.log(elementImage.src,123,mainDivElements[x].src)
                     break
                    
                }
             }

            //  console.log(mainDivElements)
    }  
            }
 
        }

    }

}










/*
// **************************** TEST**************************

function addImg(src,cls,count=1,position=["body"]){
    let pos =[] 
    pos =document.querySelectorAll(position)
    
    for(j =0;j< pos.length;j++){
    for(i=0;i<count;i++){
        // console.log(pos[j])
        let element = document.createElement("img")
        pos[j].appendChild(element)
let appended=[]
appended=document.querySelectorAll(position+' '+'img'+':last-child') 
                    let J=0;
                        while(J<appended.length){
                        appended[J].className=cls 
                        appended[J].src=src 
                        // appended[J].id=cls+J
                        console.log(appended.length);
                        J+=1
                        console.log(J);
                    }
            }

        }
    }
    

    addImg("/images/cover.png","cov",1,"body")
    */

    