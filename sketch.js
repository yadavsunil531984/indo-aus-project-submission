
console.log(tf.version)
async function loadmodel(){
    const model= await tf.loadLayersModel('model.json')
    model.predict(tf.tensor2d([[a, b, c, d]])).print()
}
//loadmodel()

var button ,a,b,c,d

function setup() {

  createCanvas(900,500);
  button = createButton("Predict")
   button.position(250,250)
   
   input1 = createInput("4.9")
   input1.position(50,100)
   text1=createElement('h3')
   text1.html("Sepal length (cm)")
   text1.position(60,120)


   input2 = createInput("3.1")
   input2.position(250,100)
   text2=createElement('h3')
   text2.html("Sepal width (cm)")
   text2.position(260,120)

   input3 = createInput("1.5")
   input3.position(450,100)
   text3=createElement('h3')
   text3.html("Petal length (cm)")
   text3.position(470,120)

   input4 = createInput("0.1")
   input4.position(650,100)
   text3=createElement('h3')
   text3.html("Petal width (cm)")
   text3.position(670,120)
}

// function to display UI
function draw() {
 background("lightblue");

 button.mousePressed(()=>{

a=parseInt(input1.value())
b=parseInt(input2.value())
c=parseInt(input3.value())
d=parseInt(input4.value())

 })
 fill("Red")
 textSize(30)
 text("Category: "+d,350,260)
 text("0 - setosa ",350,360)
 text("1 - versicolor ",350,400)
 text("2 - virginica ",350,440)
 

 loadmodel()
}


  
