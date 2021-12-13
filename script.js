var container = document.getElementById("overall-container")

fetch("https://restcountries.com/v2/all")
  .then((a) => a.json())
  .then((x) =>{
    console.log(x); 
      //Creating container class div
      var new_con = document.createElement("div");
      new_con.classList.add("container");
      container.appendChild(new_con);

      //Creating row class div
      var new_row = document.createElement("div");
      new_row.classList.add("row");
      new_row.style.backgroundColor = "rgb(12, 32, 54)";
      new_con.appendChild(new_row);
      
  for (i=0;i<x.length;i++)
      {
        //Creating col class div
          var new_col = document.createElement("div");
          new_col.classList.add("col-lg-4");
          new_col.className = new_col.className + " col-sm-12" + " d-flex" + " justify-content-center";
          new_row.appendChild(new_col);

        //Creating card class div
          var new_card = document.createElement("div");
          new_card.classList.add("card");
          new_card.className = new_card.className + " m-3";
          new_card.style.width ="18rem";
          new_col.appendChild(new_card);

        //Creating card-header class div
          var new_cardHeader = document.createElement("div");
          new_cardHeader.classList.add("card-header");
          new_cardHeader.className = new_cardHeader.className + " bg-dark" + " text-light" + " text-center";
          new_cardHeader.innerText =`${x[i].name}`;
          new_card.appendChild(new_cardHeader);

        //Creating card-body class div
          var new_cardBody = document.createElement("div");
          new_cardBody.classList.add("card-body");
          new_cardBody.style.backgroundImage = "linear-gradient(to right, rgb(241, 226, 205) , rgb(79, 92, 100))";
          new_card.appendChild(new_cardBody);

        //Set img in card-body 
          var img = document.createElement('img');
          img.src = x[i].flags.png;
          img.style.width = "254px"
          img.style.height = "170px"
          img.classList.add("card-img-top");
          new_cardBody.appendChild(img);

        //Creating P tag in card-body 
          var new_cardpara1 = document.createElement("p");
          new_cardpara1.classList.add("card-text");
          new_cardpara1.className = new_cardpara1.className + " text-center" + " pt-3";
          new_cardpara1.innerText =`Capital : ${x[i].capital}`;
          new_cardBody.appendChild(new_cardpara1);

        //Creating P tag in card-body 
          var new_cardpara2 = document.createElement("p");
          new_cardpara2.classList.add("card-text");
          new_cardpara2.className = new_cardpara2.className + " text-center";
          new_cardpara2.innerText = `Region : ${x[i].region}`;
          new_cardBody.appendChild(new_cardpara2);

        //Creating P tag in card-body 
          var new_cardpara3 = document.createElement("p");
          new_cardpara3.classList.add("card-text");
          new_cardpara3.className = new_cardpara3.className + " text-center";
          new_cardpara3.innerText = `Country Code : ${x[i].alpha3Code}`;
          new_cardBody.appendChild(new_cardpara3);
          
        //Creating button in Card-body
          var new_cardButton = document.createElement("div");
          new_cardButton.classList.add("d-flex");
          new_cardButton.className = new_cardButton.className + " justify-content-center";
          new_cardBody.appendChild(new_cardButton);
          var new_Button = document.createElement("button");
          new_Button.classList.add("btn");
          new_Button.className = new_Button.className + " btn-primary";
          new_Button.setAttribute("href", "#");
          new_Button.innerText = "Click for Weather";
          new_Button.style.backgroundColor = "transparent";
          new_Button.style.border = "1px solid rgb(241, 240, 240)";
          new_cardButton.appendChild(new_Button);

          new_Button.addEventListener("click", ()=>{
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=India&appid=d746835531bef6dacba70a1a8e6edd11`)
            .then((b) => b.json())
            .then((s) =>{
              console.log(new_Button);
              new_Button.innerText =`${s.main.temp} Kelvin`;
              new_cardButton.appendChild(new_Button);
              console.log(i);
              console.log(s.main.temp);
              alert(`The Selected Country Weather is ${s.main.temp} Kelvin`);
            })
            .catch((err) => {
              console.log(err);
            })
           });

          } 
          
  })
  .catch((err) => {
      console.log(err);
  })


 
   
  
    















