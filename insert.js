// const { CallTracker } = require('assert');
const {MongoClient}=require('mongodb')

const url="mongodb+srv://akshata:AS413317@cluster0.tavel.mongodb.net/"

const client= new MongoClient(url)

async function run(){
    try{
        await client.connect();
        const db=client.db()

         // insert
        //  const myobj=[{_id:155, name:"raj"},
        //     {_id:156, name:"riya"},
        //     {_id:157, name:"priya"},
            
        //  ]
        //  const result = await db.collection('mydatabase').insertOne(myobj)
        //  console.log(`inserted ${result.insertedId}`);
        
      const result =await db.collection('mydatabase').find({}, {projection:{_id:0, name:1}}).toArray()
          console.log(result);

    } catch(error){
        console.error(error);

    }

    finally{
        client.close()
    }
}

run()