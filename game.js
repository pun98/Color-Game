var list;
var colorPick;
var square=document.querySelectorAll(".square");
var output=document.querySelector("#output");
var colorShow=document.querySelector("#color");
var head=document.querySelector("#head");
var mainbtn=document.querySelector("#mainbtn");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var numSquares=6;
var modebtn=document.querySelectorAll(".modebtn");

for(var i=0;i<modebtn.length;i++)
{
    modebtn[i].addEventListener("click",function(){
    	modebtn[0].classList.remove("selected");
    	modebtn[1].classList.remove("selected");
    	this.classList.add("selected");
    	if(this.textContent==="EASY")
    	{
    		numSquares=3;
    	}
    	else
    	{
    		numSquares=6;
    	}
    	reset();

    });
}

function reset()
{
		head.style.backgroundColor="#3287a8";
	mainbtn.textContent="NEW COLORS";
	output.textContent="";
	list=generateRandomColor(numSquares);
  colorPick=pickColor();
  colorShow.textContent=colorPick;
  for(var i=0;i<square.length;i++)
   {
   	 if(list[i])
   	 {
   	 	square[i].style.display="block";
   		square[i].style.backgroundColor=list[i];
   	 }
   	 else
   	 {
	 square[i].style.display="none";
     }
   }

}

mainbtn.addEventListener("click",function(){
	reset();
});


  
 for(var i=0;i<square.length;i++)
{
	
	
		square[i].addEventListener("click",function(){
              var color=this.style.backgroundColor;
			if(color===colorPick)
			{
				output.textContent="Correct!";
				changeColor(color);
				head.style.backgroundColor=color;
				mainbtn.textContent="Play Again"
			}
			else
			{
				output.textContent="Try again";
				this.style.backgroundColor="#232323"

			}
		});
	
}  

function changeColor(color)
{

	for(var i=0;i<square.length;i++)
       {
        square[i].style.backgroundColor=color;
	   }
}

function pickColor(){
	var random=Math.floor(Math.random()*list.length);
	return list[random]
}

function generateRandomColor(num){
  var arr=[];
  for(var i=0;i<num;i++)
  {

    arr.push(randomColor());
  }

  return arr;

}

function randomColor(){

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
  
	return( "rgb("+r+", "+g+", "+b+")" ) 
}








