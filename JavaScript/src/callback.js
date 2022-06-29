        //     function display(num1,num2,callback)
        //     {
        //     var sum = num1+num2;
        //     callback(sum);
        //     }
        //     function calculator(s)
        //     {
        //         console.log(s)
        //     }
        //    display(5,5,calculator=(s)=>
        //    {
        //     console.log(s);
        //    });  
            // console.log(5);  

// const { isLabelWithInternallyDisabledControl } = require("@testing-library/user-event/dist/utils");
            const value ={
                name:"nisha",age:34,mobile:7906770045
            }
            const student=[
                value,
                {name:"Harsh",age:19,mobile:9012211950},
                {name:"anamika",age:34,mobile:7906770045}
            ];
            // console.log(student);
            const enroll=()=>
            { 
                setTimeout(()=>{
               student.push({name:"Harsh",age:07,mobile:73876836});


               console.log(student);

                },3000);
            }
           
           function get()
            {
                setTimeout(()=>
                {
                    console.log("Inside the getFunction");
                    enroll();
                },5000)
            }
            get();




            //  Call back function example

            // function getData(x, y, callback){  
            //     document.write(" The multiplication of the numbers " + x + " and " + y + " is: " + (x*y) + "<br><br>" );  
            //     callback();  
            //     }  
            //     function showData(){  
            //     document.write(' This is the showData() method execute after the completion of getData() method.');  
            //     }  
            //     getData(20, 30, showData);  
                  
         

        const start(name,callback)
        {
            

        }
        const end=()=>
        {
            console.log("Inside the end ");
        }