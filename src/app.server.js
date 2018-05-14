let express=require("express");
let cors=require("cors");

class Main{

    static main(){
        let app=new express();
        app.use(cors());
        
        app.get("/",function(req,res){

            let output={"name":"Hello CDAC"};
            res.json(output);

        })
        
        app.listen(3003);
    }

}

Main.main();